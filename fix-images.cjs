    const { readdirSync, readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } = require('fs')
const { join } = require('path')

const OBRAZKY_DIR = 'obrázky'
const PUBLIC_IMAGES_DIR = 'public/images'
const JSON_BASE = 'src/obsah_strany'

// 1. Vytvoř public/images pokud neexistuje
if (!existsSync(PUBLIC_IMAGES_DIR)) {
  mkdirSync(PUBLIC_IMAGES_DIR, { recursive: true })
  console.log(`✓ Vytvořena složka ${PUBLIC_IMAGES_DIR}\n`)
}

// 2. Načti všechny soubory z obrázky/ a postav mapu: číslo → skutečný název souboru
const files = readdirSync(OBRAZKY_DIR)
const imgMap = {}  // { 1: 'img1.jpg', 7: 'img7.webp', 37: 'img37.png', ... }

for (const file of files) {
  const match = file.match(/^img(\d+)(\..+)$/i)
  if (match) {
    imgMap[parseInt(match[1])] = file
  }
}

console.log(`Nalezeno ${Object.keys(imgMap).length} obrázků v ${OBRAZKY_DIR}/\n`)

// 3. Zkopíruj všechny soubory do public/images/
let copied = 0
for (const [, filename] of Object.entries(imgMap)) {
  const src = join(OBRAZKY_DIR, filename)
  const dest = join(PUBLIC_IMAGES_DIR, filename)
  copyFileSync(src, dest)
  copied++
}
console.log(`✓ Zkopírováno ${copied} souborů do ${PUBLIC_IMAGES_DIR}/\n`)

// 4. Aktualizuj JSON soubory — správná přípona + správná cesta
const folders = readdirSync(JSON_BASE)
let updated = 0
const errors = []

for (const folder of folders) {
  const folderPath = join(JSON_BASE, folder)

  let jsonFiles
  try {
    jsonFiles = readdirSync(folderPath).filter(f => f.endsWith('.json'))
  } catch {
    continue
  }

  for (const file of jsonFiles) {
    const filePath = join(folderPath, file)
    const data = JSON.parse(readFileSync(filePath, 'utf-8'))

    if (!data.images) continue

    const id = data.id
    const heroNum = 2 * id - 1
    const mapaNum = 2 * id
    let changed = false

    // Hero
    if (data.images.hero !== undefined) {
      const heroFile = imgMap[heroNum]
      if (heroFile) {
        data.images.hero = `images/${heroFile}`
        changed = true
      } else {
        errors.push(`⚠  Kapitola ${id}: nenalezen soubor img${heroNum}.*`)
      }
    }

    // Mapa
    if (data.images.mapa?.src !== undefined) {
      const mapaFile = imgMap[mapaNum]
      if (mapaFile) {
        data.images.mapa.src = `images/${mapaFile}`
        changed = true
      } else {
        errors.push(`⚠  Kapitola ${id}: nenalezen soubor img${mapaNum}.*`)
      }
    }

    if (changed) {
      writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
      updated++
      const h = imgMap[heroNum] || '???'
      const m = imgMap[mapaNum] || '???'
      console.log(`✓ Kapitola ${String(id).padStart(2, '0')}: hero=images/${h}, mapa=images/${m}`)
    }
  }
}

console.log(`\n${updated} JSON souborů aktualizováno`)

if (errors.length > 0) {
  console.log('\nPROBLÉMY:')
  errors.forEach(e => console.log(e))
} else {
  console.log('Žádné chyby.')
}
