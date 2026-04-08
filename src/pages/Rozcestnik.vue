<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page class="page">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-ornament">Annales Romani</div>
        <p class="hero-eyebrow">Od Samnické války po Markomanské tažení</p>
        <h1 class="hero-title">Kronika<br/><em>Říma</em></h1>
        <p class="hero-subtitle">Šest století válek, triumfů a proher. Příběhy, které formovaly antický svět – vyprávěné tak, abys cítil prach bitevního pole.</p>
        <div class="hero-stats">
          <div class="hero-stat">
            <span class="hero-stat-num">32</span>
            <div class="hero-stat-label">Konfliktů</div>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <span class="hero-stat-num">6</span>
            <div class="hero-stat-label">Století</div>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <span class="hero-stat-num">{{ readCount }}</span>
            <div class="hero-stat-label">Přečteno</div>
          </div>
        </div>
        <button class="hero-cta" @click="scrollToCenturies">
          Začít číst →
        </button>
      </div>
    </section>

    <!-- CENTURIES -->
    <section class="centuries-section" ref="centuriesRef">
      <div class="section-header">
        <p class="section-label">Navigace podle epoch</p>
        <h2 class="section-title">Šest století Říma</h2>
        <p class="section-desc">Vyber si epochu a začni číst – nebo procházej chronologicky od počátku.</p>
      </div>

      <div class="centuries-grid">
        <div
          v-for="century in centuries"
          :key="century.id"
          class="century-card"
          @click="$router.push('/kapitola/' + prvniKapitola(century.id))"
        >
          <div class="century-card-era">{{ century.era }}</div>
          <div class="century-card-num">{{ century.num }}</div>
          <div class="century-card-title">{{ century.title }}</div>
          <div class="century-card-desc">{{ century.desc }}</div>
          <div class="century-card-conflicts">
            <div class="conflict-dots">
              <div
                v-for="n in century.total"
                :key="n"
                class="dot"
                :class="{ active: n <= century.done }"
              ></div>
            </div>
            {{ century.total }} konfliktů
          </div>
          <div class="century-card-arrow">→</div>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useProgress } from 'src/composables/useProgress'

const { getReadCount } = useProgress()
const readCount = getReadCount()
const centuriesRef = ref(null)

function scrollToCenturies() {
  centuriesRef.value?.scrollIntoView({ behavior: 'smooth' })
}

function prvniKapitola(centuryId) {
  const map = {
    '4_stoleti_pr_n_l': '01_1_samnitska_valka',
    '3_stoleti_pr_n_l': '04_3_samnitska_valka',
    '2_stoleti_pr_n_l': '08_1_makedonska_valka',
    '1_stoleti_pr_n_l': '14_jugurthinska_valka',
    '1_stoleti_n_l': '24_bitva_v_teutoburskem_lese',
    '2_stoleti_n_l': '29_1_dacka_valka'
  }
  return map[centuryId]
}

const centuries = [
  {
    id: '4_stoleti_pr_n_l',
    era: 'Republika · Rané období',
    num: 'IV.',
    title: 'Století př. n. l.',
    desc: 'Řím se teprve sjednocuje. Tři samnické války definují hranice budoucí velmoci.',
    total: 3,
    done: 0
  },
  {
    id: '3_stoleti_pr_n_l',
    era: 'Republika · Expanze',
    num: 'III.',
    title: 'Století př. n. l.',
    desc: 'Pyrrhos, sloní armády a první střet s Kartágem. Řím vstupuje na světovou scénu.',
    total: 4,
    done: 0
  },
  {
    id: '2_stoleti_pr_n_l',
    era: 'Republika · Velmoc',
    num: 'II.',
    title: 'Století př. n. l.',
    desc: 'Makedonie padá, Kartágo hoří. Řím se stává pánem Středomoří.',
    total: 6,
    done: 0
  },
  {
    id: '1_stoleti_pr_n_l',
    era: 'Republika · Krize',
    num: 'I.',
    title: 'Století př. n. l.',
    desc: 'Caesar, Spartakus, Sulla. Republika se rozpadá pod tíhou vlastní moci.',
    total: 10,
    done: 0
  },
  {
    id: '1_stoleti_n_l',
    era: 'Císařství · Principát',
    num: 'I.',
    title: 'Století n. l.',
    desc: 'Teutoburský les. Boudicca. Čtyři císaři v jednom roce. Impérium trhají trhliny.',
    total: 5,
    done: 0
  },
  {
    id: '2_stoleti_n_l',
    era: 'Císařství · Vrchol',
    num: 'II.',
    title: 'Století n. l.',
    desc: 'Traianus dobývá Dacii a Mezopotámii. Marcus Aurelius brání limes.',
    total: 4,
    done: 0
  }
]
</script>

<style scoped>
.page { background: #080808; min-height: 100vh; }

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 2rem 4rem;
  background: radial-gradient(ellipse 60% 50% at 50% 40%, rgba(155,27,27,0.08) 0%, transparent 70%);
}
.hero-inner { max-width: 600px; }
.hero-ornament {
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  color: #c22b2b;
  text-transform: uppercase;
  margin-bottom: 2rem;
}
.hero-eyebrow {
  font-family: 'Cinzel', serif;
  font-size: 0.72rem;
  letter-spacing: 0.35em;
  color: #5c5850;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
.hero-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.05;
  color: #ede8dc;
  margin-bottom: 0.5rem;
}
.hero-title em { font-style: normal; color: #c22b2b; }
.hero-subtitle {
  font-family: 'EB Garamond', serif;
  font-size: 1.25rem;
  font-style: italic;
  color: #9c9585;
  margin: 1.5rem auto 3rem;
  line-height: 1.7;
}
.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3.5rem;
}
.hero-stat { text-align: center; }
.hero-stat-num {
  font-family: 'Cinzel', serif;
  font-size: 2rem;
  font-weight: 600;
  color: #c9a84c;
  display: block;
}
.hero-stat-label {
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #5c5850;
  margin-top: 0.25rem;
}
.hero-stat-divider { width: 1px; height: 40px; background: rgba(201,168,76,0.12); }
.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: #9b1b1b;
  color: #fff;
  font-family: 'Cinzel', serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 1rem 2.5rem;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}
.hero-cta:hover { background: #c22b2b; }

.centuries-section { padding: 5rem 3rem 6rem; }
.section-header { text-align: center; margin-bottom: 4rem; }
.section-label {
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  letter-spacing: 0.3em;
  color: #c22b2b;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.section-title {
  font-family: 'Cinzel', serif;
  font-size: 1.9rem;
  font-weight: 600;
  color: #ede8dc;
  margin-bottom: 0.75rem;
}
.section-desc {
  font-family: 'EB Garamond', serif;
  font-style: italic;
  color: #9c9585;
  font-size: 1.05rem;
}

.centuries-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  border: 1px solid rgba(201,168,76,0.12);
  max-width: 1100px;
  margin: 0 auto;
}
.century-card {
  background: #141414;
  padding: 2.25rem 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.25s;
  border: 1px solid transparent;
}
.century-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: #9b1b1b;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.century-card:hover { background: #181818; border-color: rgba(201,168,76,0.3); }
.century-card:hover::before { transform: scaleX(1); }

.century-card-era {
  font-family: 'Cinzel', serif;
  font-size: 0.62rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #5c5850;
  margin-bottom: 0.6rem;
}
.century-card-num {
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #c9a84c;
  line-height: 1;
  margin-bottom: 0.25rem;
}
.century-card-title {
  font-family: 'Cinzel', serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ede8dc;
  margin-bottom: 1rem;
}
.century-card-desc {
  font-family: 'EB Garamond', serif;
  font-style: italic;
  font-size: 0.92rem;
  color: #9c9585;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}
.century-card-conflicts {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #c22b2b;
}
.conflict-dots { display: flex; gap: 3px; }
.dot { width: 5px; height: 5px; background: #9b1b1b; border-radius: 50%; opacity: 0.4; }
.dot.active { opacity: 1; }
.century-card-arrow {
  position: absolute;
  bottom: 1.75rem;
  right: 1.75rem;
  font-size: 1.1rem;
  color: #5c5850;
  transition: color 0.2s, transform 0.2s;
}
.century-card:hover .century-card-arrow { color: #c9a84c; transform: translateX(4px); }
</style>