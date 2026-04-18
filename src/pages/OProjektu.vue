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
          Kronika Říma je studentský projekt — historický web vyprávějící šest století římských vojenských konfliktů formou storytellingu. Tato stránka popisuje jak projekt vznikl, co ho tvoří a kde se dál rozvíjí.
        </p>
      </div>

      <!-- I. CO JE KRONIKA ŘÍMA -->
      <section class="op-sekce">
        <div class="op-sekce-header">
          <span class="op-sekce-num">I.</span>
          <h2 class="op-sekce-title">Co je Kronika Říma</h2>
        </div>
        <div class="op-sekce-content">
          <p class="op-text">Kronika Říma pokrývá 32 vojenských konfliktů od první samnitské války roku 343 př. n. l. po markomanská tažení Marca Aurelia roku 180 n. l. — šest století, ve kterých se Řím proměnil z jednoho z měst v Latiu na hegemon celého středomořského světa.</p>
          <p class="op-text">Projekt není encyklopedie ani odborný článek. Je to kronika — něco mezi publicistickým a populárně naučným stylem. Každá kapitola vysvětluje kde jsme, co se děje a proč, aniž by čtenáře utopila ve složitých formulacích. Čtenář se má na konci koukat na historii jako na něco co formovalo antický svět — ne jako na suchý výklad z učebnice dějepisu.</p>
          <p class="op-text">Každá ze 32 kapitol má čtyři části: historický kontext, armádu a vojenství, průběh konfliktu a osobní příběh. Osobní příběhy jsou first-person atmosferické narativy — pohled konkrétního vojáka, který tam byl. Od hastata po signifera, od ženistu po Caesara samotného.</p>
        </div>
      </section>

      <!-- II. VZNIK -->
      <section class="op-sekce">
        <div class="op-sekce-header">
          <span class="op-sekce-num">II.</span>
          <h2 class="op-sekce-title">Jak projekt vznikl</h2>
        </div>
        <div class="op-sekce-content">
          <p class="op-text">Projekt začal v dubnu 2026 jako studentský vedlejší projekt. Maturant na SSEE Sokolnice, obor elektrotechnik-mechanik se zaměřením na IT, přicházející na VUT FEKT. Žádné formální vzdělání v programování ani historii. Jen zájem o obojí a ochota to zkusit.</p>
          <p class="op-text">Základní myšlenka: vytvořit místo kde si člověk může přečíst o římské historii bez toho, aby musel přeskakovat mezi wikipedii, sledovat hodinová videa nebo číst odborné texty. Jedno místo, čtivý styl, moderní design.</p>

          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-label">Začátek · duben 2026</div>
                <div class="timeline-title">Nápad a první architektura</div>
                <p class="timeline-text">Definice struktury projektu — 32 kapitol rozdělených do šesti epoch, každá uložená jako samostatný JSON soubor. Vue.js 3 + Quasar Framework jako technický základ. Vznik Claude Projects s custom instructions kombinujícími roli historického experta a senior Vue vývojáře.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-label">Obsah · duben 2026</div>
                <div class="timeline-title">Psaní 32 kapitol</div>
                <p class="timeline-text">Iterativní psaní textů s důrazem na tři referenční styly: publicistický, populárně naučný a storytelling. Vznik pravidel pro osobní příběhy — present tense, první osoba, 250–500 slov. Systematický audit eliminující opakující se konstrukty napříč kapitolami. Inspirační autoři: Mike Duncan, Mary Beard, Phillip Matyszak.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-label">UI · duben 2026</div>
                <div class="timeline-title">Design a frontend</div>
                <p class="timeline-text">Tmavý historický design — karmínová, zlatá, antracit. Cinzel serif pro nadpisy, EB Garamond pro text. Hero sekce s animovaným obrázkem, scroll progress bar, klávesová navigace šipkami, light/dark mode. localStorage progress tracking — přečtené kapitoly se pamatují v prohlížeči.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-label">Deploy · duben 2026</div>
                <div class="timeline-title">Netlify + GitHub CI/CD</div>
                <p class="timeline-text">Projekt nasazen na kronika-rimy.netlify.app přes GitHub → Netlify pipeline. Každý push do main větve automaticky nasadí novou verzi. Responzivní design pro mobil, tablet i desktop.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-label">Ladění · duben 2026</div>
                <div class="timeline-title">Opravy a optimalizace</div>
                <p class="timeline-text">Oprava reaktivity useProgress.js, fix hero obrázků (object-position, opacity transition při načítání), eliminace blikání při přechodu mezi kapitolami, dynamické titulky stránek přes useMeta(), tablet breakpointy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- III. TECH -->
      <section class="op-sekce">
        <div class="op-sekce-header">
          <span class="op-sekce-num">III.</span>
          <h2 class="op-sekce-title">Technické řešení</h2>
        </div>
        <div class="op-sekce-content">
          <p class="op-text">Projekt je postaven na Vue.js 3 s Composition API a Quasar Frameworku. Data jsou oddělena od UI — každá ze 32 kapitol žije jako samostatný JSON soubor v hierarchii složek podle epoch. Žádná databáze, žádný backend. Čistý statický web.</p>
          <div class="tech-grid">
            <div class="tech-item"><div class="tech-name">Vue.js 3</div><div class="tech-desc">Composition API, reaktivní state, dynamické importy kapitol</div></div>
            <div class="tech-item"><div class="tech-name">Quasar</div><div class="tech-desc">Framework, routing, useMeta() pro dynamické titulky stránek</div></div>
            <div class="tech-item"><div class="tech-name">localStorage</div><div class="tech-desc">Progress tracking — přečtené kapitoly uložené v prohlížeči na zařízení</div></div>
            <div class="tech-item"><div class="tech-name">Netlify CI/CD</div><div class="tech-desc">Automatický deploy z GitHub při každém push do main větve</div></div>
            <div class="tech-item"><div class="tech-name">32 JSON souborů</div><div class="tech-desc">Data oddělená od UI, dynamicky importována při přechodu kapitol</div></div>
            <div class="tech-item"><div class="tech-name">CSS proměnné</div><div class="tech-desc">Kompletní light/dark mode přes custom properties, bez JS přepočtů</div></div>
          </div>
        </div>
      </section>

      <!-- IV. STYL -->
      <section class="op-sekce">
        <div class="op-sekce-header">
          <span class="op-sekce-num">IV.</span>
          <h2 class="op-sekce-title">Pravidla stylu</h2>
        </div>
        <div class="op-sekce-content">
          <p class="op-text">Texty dodržují sadu pravidel která se ukázala jako klíčová pro udržení konzistentního tónu napříč 32 kapitolami.</p>
          <div class="pravidla-grid">
            <div class="pravidlo-blok">
              <div class="pravidlo-nadpis">Co text nesmí</div>
              <ul class="pravidlo-list">
                <li>Textbookové otevření ("aby bylo možné pochopit...")</li>
                <li>Komentáře vypravěče o symbolice</li>
                <li>Prázdné epitety postav ("duše povstání")</li>
                <li>Záporné závěry sekcí — otevřít, ne uzavřít</li>
                <li>Říkat čtenáři jak má reagovat</li>
              </ul>
            </div>
            <div class="pravidlo-blok">
              <div class="pravidlo-nadpis">Osobní příběhy</div>
              <ul class="pravidlo-list">
                <li>První osoba, přítomný čas</li>
                <li>Konkrétní jméno, hodnost a situace v záhlaví</li>
                <li>250–500 slov, jedna scéna, jeden moment</li>
                <li>Fyzický detail místo abstrakce</li>
                <li>Voják nezná historii — nekomentuje ji</li>
              </ul>
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
          <p class="op-text">Projekt je stále živý. Pokud máš zpětnou vazbu k textům, historickým nepřesnostem nebo technické části — napiš mi.</p>
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
import { useMeta } from 'quasar'
useMeta({ title: 'O projektu | Kronika Říma' })
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

.timeline {
  margin-top: 2rem;
  position: relative;
  padding-left: 1.5rem;
  border-left: 1px solid var(--border-gold);
}
.timeline-item { position: relative; padding-bottom: 2.5rem; }
.timeline-item:last-child { padding-bottom: 0; }
.timeline-dot {
  position: absolute;
  left: -1.85rem;
  top: 0.3rem;
  width: 8px;
  height: 8px;
  background: #9b1b1b;
  transform: rotate(45deg);
}
.timeline-label {
  font-family: 'Cinzel', serif;
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-red);
  margin-bottom: 0.3rem;
}
.timeline-title {
  font-family: 'Cinzel', serif;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.6rem;
}
.timeline-text {
  font-family: 'EB Garamond', serif;
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.75;
}

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

.pravidla-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1.75rem;
}
.pravidlo-blok {
  background: var(--pribeh-bg);
  border: 1px solid var(--pribeh-border);
  padding: 1.5rem;
}
.pravidlo-nadpis {
  font-family: 'Cinzel', serif;
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-red);
  margin-bottom: 1rem;
}
.pravidlo-list { list-style: none; padding: 0; margin: 0; }
.pravidlo-list li {
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  color: var(--text-body);
  line-height: 1.6;
  padding: 0.4rem 0 0.4rem 1rem;
  border-bottom: 1px solid var(--border-gold);
  position: relative;
}
.pravidlo-list li::before { content: '·'; position: absolute; left: 0; color: var(--text-red); }
.pravidlo-list li:last-child { border-bottom: none; }

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
  .pravidla-grid { grid-template-columns: 1fr; }
  .kontakt-grid { grid-template-columns: 1fr; }
  .timeline { padding-left: 1rem; }
  .timeline-dot { left: -1.4rem; }
}
</style>