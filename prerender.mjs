import fs from 'fs'
import path from 'path'

// Použijeme process.cwd() místo __dirname — spolehlivější na Windows
const ROOT = process.cwd()
const DIST = path.join(ROOT, 'dist/spa')
const SRC = path.join(ROOT, 'src')

console.log('📁 Kořen projektu:', ROOT)
console.log('📁 Dist:', DIST)
console.log('📁 Src:', SRC)

const base = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8')

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function write(route, title, description, paragraphs) {
  let html = base

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)

  const desc = esc(description.substring(0, 155))
  html = html.replace('</head>', `<meta name="description" content="${desc}">\n</head>`)

  const jsonld = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: title,
    description: description.substring(0, 155),
    articleBody: paragraphs.join(' ').substring(0, 5000),
    publisher: { '@type': 'Organization', name: 'Kronika Říma' },
  })
  html = html.replace('</head>', `<script type="application/ld+json">${jsonld}</script>\n</head>`)

  const noscript = `<noscript><article><h1>${esc(title)}</h1>${paragraphs
    .map((p) => `<p>${esc(p)}</p>`)
    .join('')}</article></noscript>`
  html = html.replace('<div id="q-app">', `${noscript}\n<div id="q-app">`)

  const dir = path.join(DIST, route)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8')
  console.log(`✓  /${route}`)
}

// ── KAPITOLY ─────────────────────────────────────────────────────────────────

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

for (const century of centuries) {
  const dir = path.join(SRC, 'obsah_strany', century)
  if (!fs.existsSync(dir)) {
    console.warn(`  ⚠  složka neexistuje: ${dir}`)
    continue
  }
  const soubory = fs.readdirSync(dir).filter((f) => f.endsWith('.json'))
  console.log(`  📂 ${century}: ${soubory.length} souborů`)

  for (const file of soubory) {
    const fullPath = path.join(dir, file)
    try {
      // Přečti s odstraněním BOM (někdy Windows přidá \uFEFF na začátek)
      let raw = fs.readFileSync(fullPath, 'utf-8')
      if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1)
      const data = JSON.parse(raw)
      if (data.id !== undefined && data.id !== null) {
        chapters[data.id] = data
        nacteno++
      } else {
        console.warn(`    ⚠  ${file}: chybí "id"`)
      }
    } catch (err) {
      console.error(`    ✗  ${file}: ${err.message}`)
    }
  }
}

console.log(`\n  Načteno ${nacteno} kapitol z JSON souborů`)
console.log(
  '  ID v paměti:',
  Object.keys(chapters)
    .sort((a, b) => Number(a) - Number(b))
    .join(', '),
)

console.log('\n📖 Generuji kapitoly...')
for (let i = 1; i <= 32; i++) {
  const data = chapters[i]
  if (!data) {
    console.warn(`  ⚠  chybí data pro kapitolu ${i}`)
    continue
  }

  const paras = Object.values(data.sections ?? {})
    .flat()
    .filter((v) => typeof v === 'string' && v.trim().length > 0)

  write(`kapitola/${String(i).padStart(2, '0')}`, data.title, paras[0] ?? data.title, paras)
}

// ── TERRA FELIX ──────────────────────────────────────────────────────────────

const { vyzboj, historie } = await import('./src/obsah_areal/areal-data.js')

console.log('\n🏛  Terra Felix...')
for (const s of [...vyzboj, ...historie]) {
  write(`areal/${s.id}`, `${s.nazev} | Terra Felix | Kronika Říma`, s.dospeli[0] ?? s.nazev, [
    `${s.nazev} — ${s.podnadpis}`,
    ...s.dospeli,
  ])
}

write(
  'areal',
  'Terra Felix | Kronika Říma',
  'Průvodce výstrojí a historií římských legionářů na areálu Terra Felix.',
  [
    'Terra Felix — výzbroj a výstroj legionáře, historie Říma.',
    ...vyzboj.map((s) => s.nazev),
    ...historie.map((s) => s.nazev),
  ],
)

// ── OSTATNÍ ──────────────────────────────────────────────────────────────────

console.log('\n📄 Ostatní stránky...')
write(
  'o-projektu',
  'O projektu | Kronika Říma',
  'Kronika Říma — vzdělávací projekt o historii starověkého Říma ve 32 kapitolách.',
  [
    'Kronika Říma je vzdělávací projekt věnovaný historii starověkého Říma od 4. stol. př. n. l. do 2. stol. n. l.',
  ],
)

write('casova-osa', 'Časová osa | Kronika Říma', 'Přehled všech 32 kapitol Kroniky Říma.', [
  'Chronologický přehled 32 kapitol Kroniky Říma.',
  ...Object.values(chapters)
    .sort((a, b) => a.id - b.id)
    .map((c) => `${c.title} (${c.years ?? ''})`),
])

console.log('\n✅  Hotovo!\n')
