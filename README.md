# 🏛️ Kronika Říma

> *"Šest století válek, triumfů a proher — vyprávěných tak, abys cítil prach bitevního pole."*

Historická webová aplikace mapující římské vojenské konflikty od 4. století př. n. l. po 2. století n. l. Tmavý, atmosferický design inspirovaný antikou — protože historii si zaslouží hezké rozhraní.

---

## ⚔️ Technologie

| Vrstva | Technologie |
|--------|-------------|
| Frontend | Vue.js 3 + Quasar Framework |
| Routing | Vue Router |
| Data | JSON soubory (obsah oddělen od UI) |
| Stylování | SCSS + vlastní CSS |
| Fonty | Cinzel + EB Garamond |
| Ukládání postupu | localStorage |

---

## 🚀 Hlavní funkce

**📜 32 historických kapitol** — Každá válka ve čtyřech sekcích: historický kontext, armáda a vojenství, průběh konfliktu a osobní příběh z pohledu legionáře.

**🗺️ Navigace podle epoch** — Rozcestník rozdělený do šesti století, od rané republiky po vrchol císařství.

**⏳ Časová osa** — Chronologický přehled všech 32 konfliktů s indikátorem přečtených kapitol.

**✅ Progress systém** — Sledování přečtených kapitol uložené v localStorage. Počítadlo v navigaci a zlaté checkmarky na časové ose.

**🎨 Historický dark UI** — Karmínová, zlatá a antracitová. Cinzel serif pro nadpisy, EB Garamond pro text. Protože nudná historická stránka je historická chyba.

---

## 🛠️ Instalace

```bash
npm install
npx quasar dev
```

---

## 📁 Struktura projektu
src/
├── pages/
│   ├── Rozcestnik.vue          # Hlavní stránka s kartami století
│   ├── KapitolaSablona.vue     # Univerzální čtečka kapitol
│   └── CasovaOsa.vue           # Chronologický přehled
├── composables/
│   └── useProgress.js          # localStorage progress tracking
└── obsah_strany/               # 32 JSON souborů s obsahem
├── 4_stoleti_pr_n_l/
├── 3_stoleti_pr_n_l/
├── 2_stoleti_pr_n_l/
├── 1_stoleti_pr_n_l/
├── 1_stoleti_n_l/
└── 2_stoleti_n_l/

---

## 📖 Obsah

Kronika pokrývá 600 let římské vojenské historie — od první samnitské války (343 př. n. l.) přes Hannibala, Caesara a Spartaka až po markomanská tažení Marca Aurelia (180 n. l.).

Každá kapitola obsahuje:
- **Historický kontext** — politická situace, klíčové osobnosti
- **Armáda a vojenství** — výzbroj, taktika, organizace legie dané epochy  
- **Průběh konfliktu** — příčiny, klíčové bitvy, výsledek
- **Osobní příběh** — atmosferický first-person pohled řadového legionáře

---

*Vytvořeno s Vue.js 3, přílišným množstvím historických knih a zdravým respektem k římské disciplíně.*

