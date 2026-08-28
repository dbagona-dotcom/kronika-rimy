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

/**
 * Vygeneruje prerendered HTML soubor pro danou routu.
 *
 * @param {string}   route      - URL cesta relativně od kořene ('' = hlavní stránka)
 * @param {string}   title      - Celý <title> stránky
 * @param {string}   description - Meta description (zkrátí se na 155 znaků)
 * @param {string[]} paragraphs  - Pole odstavců pro SEO obsah + JSON-LD articleBody
 */
function write(route, title, description, paragraphs) {
  let html = base

  // 1) <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)

  // 2) Meta description
  const desc = esc(description.substring(0, 155))
  if (html.includes('name="description"')) {
    html = html.replace(/(<meta\s+name="description"\s+content=")[^"]*(")/i, `$1${desc}$2`)
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${desc}">\n</head>`)
  }

  // 3) Open Graph
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

  // 4) JSON-LD strukturovaná data
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

  // 5) Viditelný obsah pro crawlery (CSS "visually hidden" technika)
  //    Na rozdíl od <noscript> nebo display:none Google tento obsah INDEXUJE.
  //    Vue app se mountuje do #q-app a tento blok neovlivní.
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

  // 6) Zapsat soubor
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
      if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1) // odstranit BOM
      const data = JSON.parse(raw)
      if (data.id != null) {
        chapters[data.id] = data
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

  // Sesbírání všech odstavců ze sekcí
  const paras = Object.values(data.sections ?? {})
    .flat()
    .filter((v) => typeof v === 'string' && v.trim().length > 0)

  const desc = (paras[0] ?? data.title).substring(0, 155)

  // Router používá 'kapitola/:id' kde id je číslo bez nuly → /kapitola/1, /kapitola/2, ...
  write(`kapitola/${i}`, `${data.title} | Kronika Říma`, desc, paras)
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

// Terra Felix přehled
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

// Hlavní stránka (rozcestník) — přepíše stávající dist/spa/index.html
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

// O projektu
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

// Časová osa
write(
  'casova-osa',
  'Časová osa | Kronika Říma',
  'Chronologický přehled všech 32 kapitol Kroniky Říma — od nejstarších dějin po Markomanské války.',
  [
    'Chronologický přehled 32 kapitol Kroniky Říma.',
    ...sortedChapters.map((c) => `${c.title} (${c.years ?? ''})`),
  ],
)

console.log('\n✅  Prerendering dokončen!\n')
console.log(`   Vygenerováno: ${32 + vyzboj.length + historie.length + 4} souborů`)
console.log('   Další krok: nasadit dist/spa/ na Netlify\n')
