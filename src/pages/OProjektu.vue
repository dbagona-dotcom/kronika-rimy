<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page class="page">
    <div class="oprojektu-wrap">

      <router-link to="/" class="back-btn">← Zpět na rozcestník</router-link>

      <!-- HEADER -->
      <div class="op-header">
        <div class="op-label">Annales Projecti</div>
        <h1 class="op-title">O projektu</h1>
        <div class="op-divider">
          <div class="op-divider-line"></div>
          <div class="op-divider-gem"></div>
          <div class="op-divider-line"></div>
        </div>
        <p class="op-subtitle">
          Studentský projekt mapující šest století římských vojenských dějin prostřednictvím 32 konfliktů od první samnitské války roku 343 př. n. l. až po markomanská tažení císaře Marka Aurelia roku 180 n. l.
        </p>
      </div>

      <!-- I. CO JE KRONIKA ŘÍMA -->
      <section class="op-sekce">
        <div class="op-sekce-header">
          <span class="op-sekce-num">I.</span>
          <h2 class="op-sekce-title">Co je Kronika Říma</h2>
        </div>
        <div class="op-sekce-content">
          <p class="op-text">Kronika Říma sleduje období, během něhož se z jednoho města v Latiu stala mocnost ovládající většinu Středomoří. Nejde o encyklopedii ani odbornou publikaci. Cílem bylo vytvořit čtivý historický web, který zachovává fakta, ale zároveň se dobře čte.</p>
          <p class="op-text">Každá kapitola odpovídá na tři základní otázky. Kde se nacházíme. Co se právě děje. A proč je daný konflikt důležitý. Text se snaží vysvětlovat souvislosti srozumitelně, bez zbytečně složitých formulací a dlouhých odboček.</p>
          <p class="op-text">Všech 32 kapitol má stejnou strukturu. Nejprve představují historický kontext, poté římskou armádu a způsob válčení, následně průběh samotného konfliktu a nakonec osobní příběh. Ten ukazuje události očima římského vojáka, který je jejich přímým účastníkem. V různých kapitolách se tak čtenář dívá na válku z pohledu obyčejného legionáře, důstojníka, ženisty nebo významného velitele.</p>
        </div>
      </section>

      <!-- II. JAK VZNIKALA -->
      <section class="op-sekce">
        <div class="op-sekce-header">
          <span class="op-sekce-num">II.</span>
          <h2 class="op-sekce-title">Jak Kronika vznikala</h2>
        </div>
        <div class="op-sekce-content">
          <p class="op-text">Projekt vznikal postupně od první kapitoly. Nejprve jsem vybral konflikty, rozdělil celé období do 32 kapitol a ke každé z nich shromáždil ověřené historické zdroje. Při samotném psaní jsem využíval Claude AI, ale výsledný text prošel rozsáhlými úpravami.</p>
          <p class="op-text">Od začátku jsem měl jasnou představu o stylu. Nechtěl jsem psát odbornou publikaci ani klasický populárně naučný článek. Cílem bylo vytvořit text, který historii vypráví, ale zároveň nechává prostor samotným událostem. Čtenáře nevede za ruku a nesnaží se mu říkat, co si má myslet.</p>
          <p class="op-text">První verze ukázaly řadu problémů. Objevovaly se opakující se fráze, přehnané dramatické pasáže i dlouhé popisy, které zpomalovaly tempo vyprávění. Každá další úprava některé nedostatky odstranila, ale často přinesla nové.</p>
          <p class="op-text">Postupně jsem si proto začal zapisovat pravidla, která se během práce osvědčila. Z nich vznikly tři příručky popisující stavbu textu, jeho úpravy i způsob budování atmosféry. Právě podle nich vznikla finální podoba všech kapitol.</p>
          <p class="op-text">Nejnáročnější část představovaly osobní příběhy. Nechtěl jsem, aby všechny bitvy působily stejně nebo aby každý voják mluvil stejným hlasem. Každý příběh proto stojí na situaci, která je typická právě pro daný konflikt. Někde dominuje velká bitva, jinde průzkum, přepad nebo dlouhé čekání. Díky tomu má každá kapitola vlastní charakter.</p>
        </div>
      </section>

      <!-- III. SLOVO NA ZÁVĚR -->
      <section class="op-sekce">
        <div class="op-sekce-header">
          <span class="op-sekce-num">III.</span>
          <h2 class="op-sekce-title">Slovo na závěr</h2>
        </div>
        <div class="op-sekce-content">
          <p class="op-text">Nejstarší kapitoly jsou kratší než pozdější části projektu. Období rané republiky je doloženo menším množstvím spolehlivých pramenů a významnou roli v něm hraje politika, zatímco samotných popsaných střetů je méně.</p>
          <p class="op-text">Přesto jsou tyto kapitoly důležité. Ukazují začátek cesty, na jejímž konci stojí říše schopná čelit Hannibalovi, porazit helénistická království nebo ovládnout téměř celý středomořský svět.</p>
        </div>
      </section>

      <!-- IV. PŘÍRUČKY -->
      <section class="op-sekce">
        <div class="op-sekce-header">
          <span class="op-sekce-num">IV.</span>
          <h2 class="op-sekce-title">Příručka projektu</h2>
        </div>
        <div class="op-sekce-content">
          <p class="op-text">Během několika verzí projektu vznikly tři interní příručky. Z nich jsem poté sestavil jednu obsáhlou, která systematicky řeší vše — stavbu textu, jeho úpravu i budování atmosféry.</p>
          <p class="op-text">Ukázky z příručky:</p>

          <div class="prirucky">

            <!-- PŘÍRUČKA 1 -->
            <div class="prirucka" :class="{ 'prirucka--open': open === 1 }">
              <button class="prirucka-btn" @click="toggle(1)">
                <span class="prirucka-num">Příručka I</span>
                <span class="prirucka-nazev">Jak funguje text</span>
                <span class="prirucka-sipka">{{ open === 1 ? '−' : '+' }}</span>
              </button>
              <div class="prirucka-obsah" v-show="open === 1">
                <p class="prirucka-uvod">Každá kapitola má jeden cíl: čtenář který o Římu nic neví musí chtít číst dál. Čtenář který o Římu všechno ví nesmí zavřít záložku po druhé větě.</p>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Rytmus je základ</div>
                  <p>Věty se záměrně střídají v délce. Dlouhá věta nese fakta a kontext. Krátká věta která přijde po ní dostane veškerou váhu. Funguje jen když je vzácná — pokud jsou všechny věty krátké, žádná není důrazná.</p>
                  <p>Klíčový moment dostane vlastní řádek.</p>
                  <p class="prirucka-duraz">Sám.</p>
                  <p class="prirucka-duraz">Bez okolního textu.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Fakta přes situaci, ne přes výčet</div>
                  <p>Jak pilum funguje se ukáže přes to co se stane nepříteli který ho dostane do štítu. Sociální rozdíly v armádě se ukážou přes to že bohatší muž stojí v bitvě lépe chráněn než jeho soused z vedlejší vesnice. Čtenář má věci pocítit, ne se je naučit.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Gradace mluví sama</div>
                  <p>Nejprve zmizely zásoby obilí. Pak kůže a řemeny. Pak mrtvá dobytčata. Pak lidská těla padlých.</p>
                  <p>Žádný komentář na konci. Žádné „bylo to hrozné". Čtenář tam dorazí sám a ta rána je silnější protože ji nikdo neohlásil.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Text nikdy neříká čtenáři jak má reagovat</div>
                  <p>Ukazuje situaci a odchází. Komentář vypravěče oslabuje každý silný moment.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Každá kapitola navazuje na předchozí</div>
                  <p>Zmiňuje kolik let uplynulo, co přetrvává, co se změnilo. Čtenář má pocit že sleduje jeden dlouhý příběh, ne sbírku samostatných článků.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Závěry sekcí otevírají, nesumarizují</div>
                  <p>Poslední věta neshrnuje co bylo — naznačuje co přijde.</p>
                  <p class="prirucka-citace">Příští válka mezi nimi nebude trvat dva roky. Bude trvat dvacet.</p>
                  <p>Čtenář otočí stránku.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Dramatičnost je vzácná a tím silná</div>
                  <p>Přestřelená dramatičnost každou druhou větou přestane fungovat. Silná fráze jednou za kapitolu zasáhne. Silná fráze každý odstavec znudí.</p>
                </div>
              </div>
            </div>

            <!-- PŘÍRUČKA 2 -->
            <div class="prirucka" :class="{ 'prirucka--open': open === 2 }">
              <button class="prirucka-btn" @click="toggle(2)">
                <span class="prirucka-num">Příručka II</span>
                <span class="prirucka-nazev">Čištění textu</span>
                <span class="prirucka-sipka">{{ open === 2 ? '−' : '+' }}</span>
              </button>
              <div class="prirucka-obsah" v-show="open === 2">
                <p class="prirucka-uvod">Pracovní návod pro editaci každé kapitoly. Obsahuje seznam všech opakujících se problémů, pravidlo pro každý z nich a konkrétní příklady.</p>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Jak postupovat</div>
                  <p><strong>Fáze 1 — Analýza.</strong> Přečti kapitolu jednou bez zásahu. Poté projdi bod po bodu podle návodu a vypiš všechny problémy: sekce, odstavec, problém, původní text, návrh opravy, zdůvodnění.</p>
                  <p><strong>Fáze 2 — Oprava.</strong> Teprve po výpisu všech problémů zapiš opravený text kapitoly. Změny aplikuj přesně — nic navíc, nic méně.</p>
                </div>

                <div class="prirucka-blok prirucka-varovani">
                  <div class="prirucka-nadpis">Varování — příliš agresivní škrtání</div>
                  <p>Cílem není text vyprázdnit. Cílem je odstranit vatu a nechat atmosféru. Pokud škrtnutí věty způsobí že odstavec ztratí spád, napětí nebo obraz — větu nešmrt. Pravidla jsou nástroj, ne cíl.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Problém 1 — Komentář vypravěče</div>
                  <p>Autor říká čtenáři jak má reagovat, co je důležité, nebo co něco znamená. Text hodnotí místo aby ukazoval. Pokud věta říká čtenáři jak se cítit nebo co si myslet — škrtni ji.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Problém 2 — Adjektivní stohování</div>
                  <p>Tři nebo více přídavných jmen za sebou která popisují totéž různými slovy. Maximálně jedno přídavné jméno na charakteristiku.</p>
                  <p class="prirucka-priklad"><strong>Špatně:</strong> „Sulla chladný, vypočítavý, vždy věděl co dělá, nenechal se ovládat emocemi."</p>
                  <p class="prirucka-priklad"><strong>Správně:</strong> „Sulla přivedl legie k branám Říma. Jako první v dějinách republiky."</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Problém 3 — Výčet místo situace</div>
                  <p>Seznam věcí bez ukázky jak fungují. Každý výčet nahradit jednou konkrétní situační větou.</p>
                  <p class="prirucka-priklad"><strong>Špatně:</strong> „Výzbroj zůstává standardní — pilum, gladius, scutum, bronzová helma."</p>
                  <p class="prirucka-priklad"><strong>Správně:</strong> „Pilum které prorazí štít a ohne se tak že ho nepřítel nemůže hodit zpět zůstává standardem."</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Problém 4 — Armádní sekce bez obsahu</div>
                  <p>Sekce Armáda a vojenství má odpovídat na otázku „co bylo v tomto konfliktu jinak?" Ne „jak armáda vypadala." Kdyby čtenář sekci přeskočil, přišel by o informaci která mu pomůže pochopit proč bitva dopadla tak jak dopadla?</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Problém 5 — Závěry které sumarizují</div>
                  <p>Poslední věta sekce nemá shrnovat co bylo — má naznačovat co přijde, nebo nechat fakta viset bez komentáře.</p>
                  <p class="prirucka-priklad"><strong>Špatně:</strong> „Toto byl zlomový moment v dějinách impéria."</p>
                  <p class="prirucka-priklad"><strong>Správně:</strong> Fakta o důsledku — čtenář k závěru dorazí sám.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Pravidlo jedné silné věty</div>
                  <p>Každá kapitola musí mít jednu větu která zůstane v hlavě. Tuto větu neškrtat ani když porušuje některá pravidla.</p>
                </div>
              </div>
            </div>

            <!-- PŘÍRUČKA 3 -->
            <div class="prirucka" :class="{ 'prirucka--open': open === 3 }">
              <button class="prirucka-btn" @click="toggle(3)">
                <span class="prirucka-num">Příručka III</span>
                <span class="prirucka-nazev">Storytelling a atmosféra</span>
                <span class="prirucka-sipka">{{ open === 3 ? '−' : '+' }}</span>
              </button>
              <div class="prirucka-obsah" v-show="open === 3">
                <p class="prirucka-uvod">Návod pro práci s atmosférou, napětím a dramatickým momentem. Předpokládá že první vrstva čištění je hotová. Teď jde o to aby text nečetl jako historický článek ale jako vyprávění.</p>

                <p class="prirucka-hlavni">Hlavní pravidlo: atmosféra se buduje střídmostí, ne přidáváním. Jeden silný moment ve správnou chvíli je silnější než deset dramatických vět za sebou.</p>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Princip 1 — Zpomalení před úderem</div>
                  <p>Před každým klíčovým faktem potřebuje čtenář nádech. Krátká věta pro důraz funguje jen když před ní bylo dost prostoru.</p>
                  <p class="prirucka-priklad"><strong>Špatně:</strong> „Sulla a jeho legie překračující brány Říma roku 88 jsou takovým okamžikem."</p>
                  <p class="prirucka-priklad"><strong>Správně:</strong> „Jsou okamžiky v dějinách které nelze odvolat. Okamžiky po nichž je svět jiný, ne postupně, ne pomalu, ale najednou a nezvratně. Sulla a jeho legie překračující brány Říma roku 88 jsou takovým okamžikem."</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Princip 2 — Jedna věta která zůstane v hlavě</div>
                  <p>Každá kapitola má mít jednu větu kterou čtenář nevědomě uloží do paměti. Tuto větu chránit — neškrtat ani když porušuje jiná pravidla.</p>
                  <p class="prirucka-citace">„Nelze ho odvolat. A každý kdo přijde po Sullovi to bude vědět."</p>
                  <p class="prirucka-citace">„Je mu sedmnáct let."</p>
                  <p class="prirucka-citace">„A čeká."</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Princip 3 — Ticho po silném momentu</div>
                  <p>Po silné větě nenásleduje žádný komentář, vysvětlení ani rozvití. Text pokračuje dál jako by se nic nestalo. Čtenář který se zastaví a přemýšlí je silnější zážitek než čtenář který dostane vysvětlení hned za větou.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Červené vlajky — kdy atmosféra zmizela</div>
                  <p>Tři odstavce za sebou začínají datem nebo jménem. Žádná věta v sekci není kratší než dvacet slov. Poslední věta sekce shrnuje co bylo řečeno. Postava je popsána adjektivy, ne akcemi.</p>
                </div>
              </div>
            </div>

          </div>

          <div class="feedback-box" style="margin-top: 1.5rem;">
            <div class="feedback-label">Zájem o celou příručku?</div>
            <p class="feedback-text">Pokud máš zájem o kompletní příručku projektu, napiš mi na mail nebo zprávu na LinkedIn.</p>
          </div>
        </div>
      </section>

      <!-- V. TECHNICKÉ ŘEŠENÍ -->
      <section class="op-sekce">
        <div class="op-sekce-header">
          <span class="op-sekce-num">V.</span>
          <h2 class="op-sekce-title">Technické řešení</h2>
        </div>
        <div class="op-sekce-content">
          <p class="op-text">Projekt je napsaný ve VS Code. Frontend stojí na Vue.js 3 s frameworkem Quasar. Pod kapotou klasické HTML, CSS a JavaScript. Data jsou oddělená od UI — každá ze 32 kapitol žije jako samostatný JSON soubor.</p>
          <div class="tech-grid">
            <div class="tech-item"><div class="tech-name">Vue.js 3</div><div class="tech-desc">Composition API, reaktivní state, dynamické importy kapitol</div></div>
            <div class="tech-item"><div class="tech-name">Quasar</div><div class="tech-desc">Framework, routing, useMeta() pro dynamické titulky stránek</div></div>
            <div class="tech-item"><div class="tech-name">localStorage</div><div class="tech-desc">Progress tracking — přečtené kapitoly uložené v prohlížeči na zařízení</div></div>
            <div class="tech-item"><div class="tech-name">32 JSON souborů</div><div class="tech-desc">Data oddělená od UI, dynamicky importována při přechodu kapitol</div></div>
            <div class="tech-item"><div class="tech-name">CSS proměnné</div><div class="tech-desc">Kompletní light/dark mode přes custom properties, bez JS přepočtů</div></div>
            <div class="tech-item"><div class="tech-name">HTML / CSS / JS</div><div class="tech-desc">Klasický frontend základ pod celou strukturou projektu</div></div>
          </div>
        </div>
      </section>

      <!-- VI. KONTAKT -->
      <section class="op-sekce op-sekce-kontakt">
        <div class="op-sekce-header">
          <span class="op-sekce-num">VI.</span>
          <h2 class="op-sekce-title">Kontakt</h2>
        </div>
        <div class="op-sekce-content">
          <p class="op-text">Pokud máš zpětnou vazbu k textům, historickým nepřesnostem nebo čemukoli jinému — napiš mi.</p>
          <div class="kontakt-grid">
            <a href="mailto:dbagona@gmail.com" class="kontakt-item">
              <div class="kontakt-icon">✉</div>
              <div class="kontakt-info">
                <div class="kontakt-label">E-mail</div>
                <div class="kontakt-hodnota">dbagona@gmail.com</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/david-bagona" target="_blank" rel="noopener" class="kontakt-item">
              <div class="kontakt-icon">in</div>
              <div class="kontakt-info">
                <div class="kontakt-label">LinkedIn</div>
                <div class="kontakt-hodnota">David Bagoňa</div>
              </div>
            </a>
            <a href="https://github.com/dbagona-dotcom/kronika-rimy" target="_blank" rel="noopener" class="kontakt-item">
              <div class="kontakt-icon">⌥</div>
              <div class="kontakt-info">
                <div class="kontakt-label">GitHub</div>
                <div class="kontakt-hodnota">kronika-rimy</div>
              </div>
            </a>
          </div>
          <div class="feedback-box">
            <div class="feedback-label">Zpětná vazba</div>
            <p class="feedback-text">Zaujal tě projekt? Našel jsi historickou nepřesnost? Máš nápad na vylepšení? Napiš mi na mail výše nebo zprávu na LinkedIn. Čtu vše a odpovídám na každou zprávu.</p>
          </div>
        </div>
      </section>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useMeta } from 'quasar'

useMeta({ title: 'O projektu | Kronika Říma' })

const open = ref(null)
function toggle(num) {
  open.value = open.value === num ? null : num
}
</script>

<style scoped>
.page { background: var(--bg-primary); min-height: 100vh; }

.oprojektu-wrap {
  max-width: 760px;
  margin: 0 auto;
  padding: 5rem 2rem 6rem;
}

.back-btn {
  display: inline-block;
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-subtle);
  text-decoration: none;
  margin-bottom: 3rem;
  transition: color 0.2s;
}
.back-btn:hover { color: var(--text-gold); }

.op-header { text-align: center; margin-bottom: 5rem; }
.op-label {
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--text-red);
  margin-bottom: 1rem;
}
.op-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}
.op-divider { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 2rem; }
.op-divider-line { width: 80px; height: 1px; background: var(--border-gold); }
.op-divider-gem { width: 6px; height: 6px; background: #9b1b1b; transform: rotate(45deg); }
.op-subtitle {
  font-family: 'EB Garamond', serif;
  font-size: 1.15rem;
  font-style: italic;
  color: var(--text-muted);
  line-height: 1.8;
  max-width: 580px;
  margin: 0 auto;
}

.op-sekce { margin-bottom: 4.5rem; }
.op-sekce-header {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1.75rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-gold);
}
.op-sekce-num {
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  color: var(--text-red);
  flex-shrink: 0;
}
.op-sekce-title {
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.05em;
}
.op-sekce-content { padding-left: 1rem; border-left: 1px solid var(--border-red); }
.op-text {
  font-family: 'EB Garamond', serif;
  font-size: 1.15rem;
  color: var(--text-body);
  line-height: 1.9;
  margin-bottom: 1.25rem;
}
.op-text:last-child { margin-bottom: 0; }

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  border: 1px solid var(--border-gold);
  margin-top: 1.75rem;
}
.tech-item {
  background: var(--bg-card);
  padding: 1.25rem 1.5rem;
  transition: background 0.2s;
}
.tech-item:hover { background: var(--bg-card-hover); }
.tech-name {
  font-family: 'Cinzel', serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-gold);
  letter-spacing: 0.08em;
  margin-bottom: 0.4rem;
}
.tech-desc {
  font-family: 'EB Garamond', serif;
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.prirucky {
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.prirucka {
  border: 1px solid var(--border-gold);
  background: var(--bg-card);
  transition: border-color 0.2s;
}
.prirucka--open { border-color: var(--border-gold-hover); }
.prirucka-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
  text-align: left;
  transition: background 0.2s;
  font-family: inherit;
}
.prirucka-btn:hover { background: var(--bg-card-hover); }
.prirucka-num {
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--text-red);
  flex-shrink: 0;
  min-width: 90px;
}
.prirucka-nazev {
  font-family: 'Cinzel', serif;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-primary);
  flex: 1;
  letter-spacing: 0.04em;
}
.prirucka-sipka {
  font-family: 'Cinzel', serif;
  font-size: 1.4rem;
  color: var(--text-gold);
  line-height: 1;
  flex-shrink: 0;
}
.prirucka-obsah {
  padding: 1.5rem;
  border-top: 1px solid var(--border-gold);
}
.prirucka-uvod {
  font-family: 'EB Garamond', serif;
  font-size: 1.05rem;
  font-style: italic;
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 1.75rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-gold);
}
.prirucka-hlavni {
  font-family: 'EB Garamond', serif;
  font-size: 1.05rem;
  color: var(--text-body);
  line-height: 1.8;
  padding: 1rem 1.25rem;
  background: var(--pribeh-bg);
  border-left: 2px solid var(--pribeh-line);
  margin-bottom: 1.75rem;
}
.prirucka-blok { margin-bottom: 1.5rem; }
.prirucka-blok:last-child { margin-bottom: 0; }
.prirucka-nadpis {
  font-family: 'Cinzel', serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-gold);
  margin-bottom: 0.75rem;
}
.prirucka-blok p {
  font-family: 'EB Garamond', serif;
  font-size: 1.02rem;
  color: var(--text-body);
  line-height: 1.75;
  margin-bottom: 0.6rem;
}
.prirucka-blok p:last-child { margin-bottom: 0; }
.prirucka-duraz { font-weight: 600; color: var(--text-primary) !important; }
.prirucka-citace {
  font-style: italic;
  color: var(--text-pribeh) !important;
  padding-left: 1rem;
  border-left: 2px solid var(--pribeh-line);
  margin: 0.75rem 0 !important;
}
.prirucka-priklad {
  font-size: 0.95rem !important;
  color: var(--text-muted) !important;
  padding-left: 1rem;
  border-left: 1px solid var(--border-gold);
  margin: 0.4rem 0 !important;
}
.prirucka-varovani {
  background: var(--pribeh-bg);
  border: 1px solid var(--pribeh-border);
  padding: 1.25rem;
}
.prirucka-varovani .prirucka-nadpis { color: var(--text-red); }

.op-sekce-kontakt .op-sekce-content { border-left-color: var(--border-gold); }
.kontakt-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  border: 1px solid var(--border-gold);
  margin-top: 1.75rem;
  margin-bottom: 1.5rem;
}
.kontakt-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--bg-card);
  padding: 1.25rem 1.5rem;
  text-decoration: none;
  transition: background 0.2s;
}
.kontakt-item:hover { background: var(--bg-card-hover); }
.kontakt-icon {
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  color: var(--text-gold);
  width: 28px;
  text-align: center;
  flex-shrink: 0;
}
.kontakt-label {
  font-family: 'Cinzel', serif;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-subtle);
  margin-bottom: 0.25rem;
}
.kontakt-hodnota {
  font-family: 'EB Garamond', serif;
  font-size: 0.95rem;
  color: var(--text-primary);
}
.feedback-box {
  background: var(--pribeh-bg);
  border: 1px solid var(--pribeh-border);
  padding: 1.5rem;
}
.feedback-label {
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-red);
  margin-bottom: 0.75rem;
}
.feedback-text {
  font-family: 'EB Garamond', serif;
  font-size: 1.05rem;
  font-style: italic;
  color: var(--text-muted);
  line-height: 1.75;
}

@media (min-width: 769px) and (max-width: 1024px) {
  .kontakt-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .oprojektu-wrap { padding: 3rem 1.25rem 4rem; }
  .tech-grid { grid-template-columns: 1fr; }
  .kontakt-grid { grid-template-columns: 1fr; }
  .prirucka-btn { padding: 1rem 1.25rem; gap: 0.75rem; }
  .prirucka-num { min-width: 70px; font-size: 0.6rem; }
  .prirucka-nazev { font-size: 0.85rem; }
  .prirucka-obsah { padding: 1.25rem; }
}
</style>