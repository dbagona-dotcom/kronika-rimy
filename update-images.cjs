const { readdirSync, readFileSync, writeFileSync } = require('fs')
const { join } = require('path')

const BASE = 'src/obsah_strany'
const folders = readdirSync(BASE)

for (const folder of folders) {
  const folderPath = join(BASE, folder)
  const files = readdirSync(folderPath).filter(f => f.endsWith('.json'))

  for (const file of files) {
    const filePath = join(folderPath, file)
    const data = JSON.parse(readFileSync(filePath, 'utf-8'))

    const id = data.id
    const heroNum = 2 * id - 1
    const mapaNum = 2 * id

    data.images = {
      hero: `img${heroNum}.jpg`,
      mapa: {
        src: `img${mapaNum}.jpg`,
        caption: data.images?.mapa?.caption || ''
      }
    }

    writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
    console.log(`✓ Kapitola ${id}: hero=img${heroNum}.jpg, mapa=img${mapaNum}.jpg`)
  }
}