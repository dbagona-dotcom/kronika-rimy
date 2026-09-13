import fs from 'fs'
import path from 'path'

const ROOT = process.cwd()
const DIST = path.join(ROOT, 'dist/spa')
const SRC = path.join(ROOT, 'src')

console.log('📁 Kořen projektu:', ROOT)
console.log('📁 Dist:', DIST)

if (!fs.existsSync(path.join(DIST, 'index.html'))) {
  console.error('✗  Nenalezen dist/spa/index.html — spusť nejdřív "quasar build"')
  process.exit(1)
}

const base = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8')

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function write(route, title, description, paragraphs) {
  let html = base

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)

  const desc = esc(description.substring(0, 155))
  if (html.includes('name="description"')) {
    html = html.replace(/(<meta\s+name="description"\s+content=")[^"]*(")/i, `$1${desc}$2`)
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${desc}">\n</head>`)
  }

  const url = `https://kronika-rima.com/${route}`
  const ogBlock = [
    `  <meta property="og:title" content="${esc(title)}">`,
    `  <meta property="og:description" content="${desc}">`,
    `  <meta property="og:url" content="${esc(url)}">`,
    `  <meta property="og:type" content="article">`,
    `  <meta property="og:site_name" content="Kronika Říma">`,
    `  <meta property="og:locale" content="cs_CZ">`,
  ].join('\n')
  html = html.replace('</head>', `${ogBlock}\n</head>`)

  const jsonld = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: title,
    headline: title,
    description: description.substring(0, 155),
    articleBody: paragraphs.join(' ').substring(0, 5000),
    inLanguage: 'cs',
    url,
    publisher: {
      '@type': 'Organization',
      name: 'Kronika Říma',
      url: 'https://kronika-rima.com',
    },
  })
  html = html.replace('</head>', `  <script type="application/ld+json">${jsonld}</script>\n</head>`)

  const seoBlock = [
    `<div id="kr-seo" style="`,
    `position:absolute;`,
    `width:1px;height:1px;`,
    `margin:-1px;padding:0;`,
    `overflow:hidden;`,
    `clip:rect(0 0 0 0);`,
    `white-space:nowrap;`,
    `border:0`,
    `" aria-hidden="true">`,
    `<h1>${esc(title)}</h1>`,
    paragraphs
      .slice(0, 20)
      .map((p) => `<p>${esc(p)}</p>`)
      .join(''),
    `</div>`,
  ].join('')

  html = html.replace('<div id="q-app">', `${seoBlock}\n<div id="q-app">`)

  const dir = route === '' ? DIST : path.join(DIST, route)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8')
  console.log(`  ✓  /${route || '(hlavní stránka)'}`)
}

// ─── NAČTENÍ KAPITOL ──────────────────────────────────────────────────────────

const centuries = [
  '4_stoleti_pr_n_l',
  '3_stoleti_pr_n_l',
  '2_stoleti_pr_n_l',
  '1_stoleti_pr_n_l',
  '1_stoleti_n_l',
  '2_stoleti_n_l',
]

const chapters = {}
let nacteno = 0

console.log('\n📂 Načítám JSON soubory kapitol...')
for (const century of centuries) {
  const dir = path.join(SRC, 'obsah_strany', century)
  if (!fs.existsSync(dir)) {
    console.warn(`  ⚠  složka neexistuje: ${dir}`)
    continue
  }
  const soubory = fs.readdirSync(dir).filter((f) => f.endsWith('.json'))
  console.log(`  📁 ${century}: ${soubory.length} souborů`)
  for (const file of soubory) {
    const fullPath = path.join(dir, file)
    try {
      let raw = fs.readFileSync(fullPath, 'utf-8')
      if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1)
      const data = JSON.parse(raw)
      if (data.id != null) {
        chapters[data.id] = { ...data, _slug: path.basename(file, '.json') }
        nacteno++
      } else {
        console.warn(`    ⚠  ${file}: chybí pole "id"`)
      }
    } catch (err) {
      console.error(`    ✗  ${file}: ${err.message}`)
    }
  }
}
console.log(`\n  → Načteno ${nacteno} kapitol (očekáváno 32)`)
if (nacteno < 32) {
  console.warn(`  ⚠  Chybí ${32 - nacteno} kapitol!`)
}

// ─── GENEROVÁNÍ KAPITOL ───────────────────────────────────────────────────────

console.log('\n📖 Generuji stránky kapitol...')
for (let i = 1; i <= 32; i++) {
  const data = chapters[i]
  if (!data) {
    console.warn(`  ⚠  chybí data pro kapitolu ${i}`)
    continue
  }

  const paras = Object.values(data.sections ?? {})
    .flat()
    .filter((v) => typeof v === 'string' && v.trim().length > 0)

  const desc = (paras[0] ?? data.title).substring(0, 155)

  write(`kapitola/${data._slug}`, `${data.title} | Kronika Říma`, desc, paras)
}

// ─── TERRA FELIX ──────────────────────────────────────────────────────────────

const { vyzboj, historie } = await import('./src/obsah_areal/areal-data.js')

console.log('\n🏛  Generuji Terra Felix stanoviště...')
for (const s of [...vyzboj, ...historie]) {
  write(
    `areal/${s.id}`,
    `${s.nazev} — ${s.podnadpis} | Terra Felix | Kronika Říma`,
    (s.dospeli[0] ?? s.nazev).substring(0, 155),
    [`${s.nazev}. ${s.podnadpis}.`, ...s.dospeli],
  )
}

write(
  'areal',
  'Terra Felix — Výzbroj a výstroj legionáře | Kronika Říma',
  'Průvodce výstrojí a historií římských legionářů na areálu Terra Felix. Přilby, brnění, meče, štíty a více.',
  [
    'Terra Felix — interaktivní výstava o výzbroji a výstroji římského legionáře.',
    ...vyzboj.map((s) => `${s.nazev}: ${s.podnadpis}. ${s.dospeli[0] ?? ''}`),
    ...historie.map((s) => `${s.nazev}: ${s.podnadpis}. ${s.dospeli[0] ?? ''}`),
  ],
)

// ─── OSTATNÍ STRÁNKY ──────────────────────────────────────────────────────────

console.log('\n📄 Generuji ostatní stránky...')

const sortedChapters = Object.values(chapters).sort((a, b) => a.id - b.id)

write(
  '',
  'Kronika Říma — Historie starověkého Říma ve 32 kapitolách',
  'Vzdělávací projekt o historii starověkého Říma od 4. stol. př. n. l. do 2. stol. n. l. ve 32 kapitolách pro děti i dospělé.',
  [
    'Kronika Říma je vzdělávací projekt věnovaný historii starověkého Říma.',
    '32 kapitol od 4. století před naším letopočtem do 2. století našeho letopočtu.',
    'Obsah psán ve dvou verzích: pro dospělé s detailní analýzou, a pro děti s přístupným výkladem.',
    ...sortedChapters.map((c) => `${c.title} (${c.years ?? ''})`),
  ],
)

write(
  'o-projektu',
  'O projektu | Kronika Říma',
  'Kronika Říma — vzdělávací projekt o historii starověkého Říma ve 32 kapitolách pro děti i dospělé.',
  [
    'Kronika Říma je vzdělávací projekt věnovaný historii starověkého Říma.',
    'Obsah zahrnuje 32 kapitol od 4. století před naším letopočtem do 2. století našeho letopočtu.',
    'Každá kapitola je zpracována ve dvou verzích: pro dospělé a pro děti.',
    'Projekt také zahrnuje interaktivní areál Terra Felix věnovaný výzbroji a výstroji legionáře.',
  ],
)

write(
  'casova-osa',
  'Časová osa | Kronika Říma',
  'Chronologický přehled všech 32 kapitol Kroniky Říma — od nejstarších dějin po Markomanské války.',
  [
    'Chronologický přehled 32 kapitol Kroniky Říma.',
    ...sortedChapters.map((c) => `${c.title} (${c.years ?? ''})`),
  ],
)

// ─── SITEMAP ──────────────────────────────────────────────────────────────────

const sitemapUrls = [
  'https://kronika-rima.com/',
  'https://kronika-rima.com/casova-osa',
  'https://kronika-rima.com/o-projektu',
  'https://kronika-rima.com/areal',
  ...sortedChapters.map((c) => `https://kronika-rima.com/kapitola/${c._slug}`),
  ...vyzboj.map((s) => `https://kronika-rima.com/areal/${s.id}`),
  ...historie.map((s) => `https://kronika-rima.com/areal/${s.id}`),
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`

fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap, 'utf-8')
console.log(`\n🗺️  Sitemap: ${sitemapUrls.length} URL → sitemap.xml`)

// ─── HOTOVO ───────────────────────────────────────────────────────────────────

console.log('\n✅  Prerendering dokončen!\n')
console.log(`   Stránky: ${32 + vyzboj.length + historie.length + 4} HTML souborů`)
console.log('   Sitemap: sitemap.xml')
console.log('   Další krok: git push → Netlify deploy\n')
