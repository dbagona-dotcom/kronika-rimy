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
          Studentský projekt — historický web vyprávějící šest století římských vojenských konfliktů formou storytellingu.
        </p>
      </div>

      <!-- I. CO JE KRONIKA ŘÍMA -->
      <section class="op-sekce">
        <div class="op-sekce-header">
          <span class="op-sekce-num">I.</span>
          <h2 class="op-sekce-title">Co je Kronika Říma</h2>
        </div>
        <div class="op-sekce-content">
          <p class="op-text">Projekt pokrývá 32 vojenských konfliktů od první samnitské války roku 343 př. n. l. po markomanská tažení Marca Aurelia roku 180 n. l. Šest století během kterých se Řím proměnil z jednoho z měst v Latiu na hegemona celého středomořského světa.</p>
          <p class="op-text">Není to encyklopedie. Není to odborný článek ani populárně naučný text. Něco mezi. Každá kapitola vysvětluje kde jsme, co se děje a proč, bez toho aby čtenáře utopila ve složitých formulacích. Na konci má mít pocit že viděl něco co formovalo antický svět.</p>
          <p class="op-text">Každá ze 32 kapitol má čtyři části: historický kontext, armádu a vojenství, průběh konfliktu a osobní příběh. Příběhy jsou first-person pohled konkrétního vojáka který tam byl. Od hastata po signifera, od ženistu po Caesara samotného.</p>
        </div>
      </section>

      <!-- II. JAK VZNIKALA -->
      <section class="op-sekce">
        <div class="op-sekce-header">
          <span class="op-sekce-num">II.</span>
          <h2 class="op-sekce-title">Jak Kronika vznikala</h2>
        </div>
        <div class="op-sekce-content">
          <p class="op-text">Začal jsem stylem storytellingu. Nechtěl jsem populárně naučný ani odborný text. Chtěl jsem něco osobitého — něco co se vyzdvihne mezi podobnými publikacemi.</p>
          <p class="op-text">Nejdřív jsem si vybral období a konflikty. Šest století jsem rozdělil na 32 kapitol. Vybral jsem ověřené zdroje a začal psát s pomocí Claude AI postupně od první kapitoly.</p>
          <p class="op-text">První verze se mi líbila. Pak jsem ji po čase pročítal znovu a uvědomil si že to není ono. Vypadalo to jako ostatní generické články.</p>
          <p class="op-text">Přišla verze druhá. Přidával jsem napětí, drama, cliffhangery na konci kapitol. Chtěl jsem aby byl text čtivý, ale přehnal jsem to. V kapitolách se opakovaly stejné ohrané fráze. Popisy postav zabíraly tři řádky. Po pár kapitolách jsem byl sám zmatený a říkal si — sakra, tohle jsem teď nečetl?</p>
          <p class="op-text">Pak se povedla jedna kapitola. Sullovy občanské války. Tam to sedlo. Kolem ní jsem začal stavět pravidla.</p>
          <p class="op-text">Vznikly tři příručky.</p>
          <p class="op-text">První popisuje co má text dělat, jak a proč. Druhá je o čištění — pravidla pro mazání generických frází, komentářů vypravěče, zbytečně dlouhých popisů. Aplikoval jsem ji na všechny kapitoly. Otravné fráze zmizely. Jenže s nimi zmizela i duše textu. Zase to skončilo jako akčnější populárně naučný článek.</p>
          <p class="op-text">Přišla třetí příručka. Ta popisuje jak vyprávět. Jak necpát napětí na sílu ale budovat ho. Po třetím průchodu jsem měl text který je teď na stránce.</p>
          <p class="op-text">Po celou dobu jsem i přes ověřené zdroje musel opravovat historické a stylistické chyby. Některé kapitoly prošly čtyřmi verzemi než jsem s nimi byl spokojený.</p>
        </div>
      </section>

      <!-- III. TECH -->
      <section class="op-sekce">
        <div class="op-sekce-header">
          <span class="op-sekce-num">III.</span>
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

      <!-- IV. PŘÍRUČKY -->
      <section class="op-sekce">
        <div class="op-sekce-header">
          <span class="op-sekce-num">IV.</span>
          <h2 class="op-sekce-title">Tři příručky</h2>
        </div>
        <div class="op-sekce-content">
          <p class="op-text">Během psaní vznikly tři příručky. Každá řeší jinou vrstvu práce s textem. Dohromady drží styl napříč všemi 32 kapitolami.</p>

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
                  <p class="prirucka-priklad"><strong>Špatně:</strong> „Tato mezera v paměti sama o sobě říká jak bezprecedentní je situace."</p>
                  <p class="prirucka-priklad"><strong>Správně:</strong> Škrtnout. Předchozí věta (dvě stě sedmdesát let) to říká sama.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Problém 2 — Adjektivní stohování</div>
                  <p>Tři nebo více přídavných jmen za sebou která popisují totéž různými slovy. Maximálně jedno přídavné jméno na charakteristiku.</p>
                  <p class="prirucka-priklad"><strong>Špatně:</strong> „Sulla chladný, vypočítavý, vždy věděl co dělá, nenechal se ovládat emocemi."</p>
                  <p class="prirucka-priklad"><strong>Správně:</strong> „Sulla přivedl legie k branám Říma. Jako první v dějinách republiky."</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Problém 3 — Redundance unikátnosti</div>
                  <p>Více vět v jednom odstavci říká totéž — že něco je výjimečné, bezprecedentní. Jednou stačí.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Problém 4 — Výčet místo situace</div>
                  <p>Seznam věcí bez ukázky jak fungují. Každý výčet nahradit jednou konkrétní situační větou.</p>
                  <p class="prirucka-priklad"><strong>Špatně:</strong> „Výzbroj zůstává standardní — pilum, gladius, scutum, bronzová helma."</p>
                  <p class="prirucka-priklad"><strong>Správně:</strong> „Pilum které prorazí štít a ohne se tak že ho nepřítel nemůže hodit zpět zůstává standardem."</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Problém 5 — Vata</div>
                  <p>Věta která zabírá místo ale neříká nic konkrétního. Pokud ji škrtneš a text dává smysl dál — škrtni ji.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Problém 6 — Vysvětlování jasného</div>
                  <p>Autor vysvětluje čtenáři význam věcí které jsou z kontextu zřejmé. Pokud čtenář pochopí z kontextu — nevysvětlovat.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Problém 7 — Armádní sekce bez obsahu</div>
                  <p>Sekce Armáda a vojenství má odpovídat na otázku „co bylo v tomto konfliktu jinak?" Ne „jak armáda vypadala." Kontrolní otázka: kdyby čtenář sekci přeskočil, přišel by o informaci která mu pomůže pochopit proč bitva dopadla tak jak dopadla?</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Problém 8 — Závěry které sumarizují</div>
                  <p>Poslední věta sekce nemá shrnovat co bylo — má naznačovat co přijde, nebo nechat fakta viset bez komentáře.</p>
                  <p class="prirucka-priklad"><strong>Špatně:</strong> „Toto byl zlomový moment v dějinách impéria."</p>
                  <p class="prirucka-priklad"><strong>Správně:</strong> Fakta o důsledku — čtenář k závěru dorazí sám.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Problém 9 — Přestřelená dramatičnost</div>
                  <p>Jedna silná dramatická věta na kapitolu. Maximálně dvě. Každá navíc oslabuje všechny ostatní.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Problém 10 — Prolomení čtvrté zdi</div>
                  <p>Každá kapitola musí fungovat samostatně. Žádné „jak jsme viděli", „jak víme", „vývoj který jsme sledovali".</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Problém 11 — Pravopis</div>
                  <p>Opravit všechny zjevné chyby. Časté problémy: překlepy, chybějící čárky v souvětích, nesoulad rodu a pádu.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Problém 12 — Reference na moderní historiky</div>
                  <p>Veškeré zmínky o „moderních historicích", „archeologických nálezech", „dodnes rekonstruují" škrtnout nebo přepsat na přímé konstatování faktu.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Pravidlo rytmu</div>
                  <p>Každý odstavec by měl obsahovat alespoň jednu kratší větu a alespoň jednu delší větu. Tři krátké věty za sebou = žádná z nich není důrazná.</p>
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
                  <p>Před každým klíčovým faktem potřebuje čtenář nádech. Krátká věta pro důraz funguje jen když před ní bylo dost prostoru. Před silný moment vlož jednu větu která zpomalí — rozšíří kontext nebo prodlouží souvětí těsně před úderem.</p>
                  <p class="prirucka-priklad"><strong>Špatně:</strong> „Sulla a jeho legie překračující brány Říma roku 88 jsou takovým okamžikem."</p>
                  <p class="prirucka-priklad"><strong>Správně:</strong> „Jsou okamžiky v dějinách které nelze odvolat. Okamžiky po nichž je svět jiný, ne postupně, ne pomalu, ale najednou a nezvratně. Sulla a jeho legie překračující brány Říma roku 88 jsou takovým okamžikem."</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Princip 2 — Most mezi fakty</div>
                  <p>Věta která spojuje dva fakty tak aby mezi nimi bylo napětí, ne jen chronologie. Bez mostu text skáče od faktu k faktu. S mostem čtenář cítí příčinu a důsledek.</p>
                  <p>Most nesmí být komentář vypravěče. „Řím nemůže neodpovědět" — konstatování reality, povoleno. „Bylo to hrozné a Řím musel jednat" — komentář, zakázáno.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Princip 3 — Jedna věta která zůstane v hlavě</div>
                  <p>Každá kapitola má mít jednu větu kterou čtenář nevědomě uloží do paměti. Tuto větu chránit — neškrtat ani když porušuje jiná pravidla.</p>
                  <p>Příklady silných vět z Kroniky:</p>
                  <p class="prirucka-citace">„Nelze ho odvolat. A každý kdo přijde po Sullovi to bude vědět."</p>
                  <p class="prirucka-citace">„Je mu sedmnáct let."</p>
                  <p class="prirucka-citace">„A čeká."</p>
                  <p>Jsou krátké, konstatují bez hodnocení, nechávají čtenáře v prostoru kde si domyslí zbytek.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Princip 4 — Gradace místo popisu</div>
                  <p>Místo aby text říkal že něco bylo závažné — ukáže to řadou faktů které gradují od menšího k většímu. Poslední fakt v řadě musí být největší nebo nejpřekvapivější.</p>
                  <p class="prirucka-priklad"><strong>Správně:</strong> „Sulla posílil senát. Omezil tribuny. Uzákonil systém který měl zabránit dalšímu Mariovi."</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Princip 5 — Konkrétní obraz místo obecného tvrzení</div>
                  <p>Každé obecné tvrzení o charakteru postavy nebo atmosféře nahradit jednou konkrétní akcí. Obecné tvrzení čtenář přečte a zapomene. Konkrétní obraz si představí a pamatuje.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Princip 6 — Nevyřízené účty místo historického přehledu</div>
                  <p>Motivace postav vyjádřená přes napětí a důsledky, ne přes historický výklad. Čtenář se neztotožní s postavou která „sledovala geopolitické zájmy". Ztotožní se s postavou která „má doma nevyřízené účty".</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Princip 7 — Ticho po silném momentu</div>
                  <p>Po silné větě nenásleduje žádný komentář, vysvětlení ani rozvití. Text pokračuje dál jako by se nic nestalo. Čtenář který se zastaví a přemýšlí je silnější zážitek než čtenář který dostane vysvětlení hned za větou.</p>
                </div>

                <div class="prirucka-blok">
                  <div class="prirucka-nadpis">Červené vlajky — kdy atmosféra zmizela</div>
                  <p>Tři odstavce za sebou začínají datem nebo jménem. Žádná věta v sekci není kratší než dvacet slov. Poslední věta sekce shrnuje co bylo řečeno. Postava je popsána adjektivy, ne akcemi. Čtenář ví co se stalo ale neví proč mu na tom záleží.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- V. KONTAKT -->
      <section class="op-sekce op-sekce-kontakt">
        <div class="op-sekce-header">
          <span class="op-sekce-num">V.</span>
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

/* PŘÍRUČKY — ACCORDION */
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

.prirucka-blok {
  margin-bottom: 1.5rem;
}
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
.prirucka-duraz {
  font-weight: 600;
  color: var(--text-primary) !important;
}
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

/* KONTAKT */
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