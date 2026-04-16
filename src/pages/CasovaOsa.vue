<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page class="page">

    <div class="osa-wrap">
      <router-link to="/" class="back-btn">← Zpět na rozcestník</router-link>

      <div class="osa-header">
        <p class="osa-label">Chronologický přehled</p>
        <h1 class="osa-title">Časová osa</h1>
        <p class="osa-desc">Všech 32 konfliktů od republiky po císařství.</p>
      </div>

      <div v-for="skupina in skupiny" :key="skupina.century" class="skupina">
        <div class="skupina-header">
          <div class="skupina-line"></div>
          <div class="skupina-label">{{ skupina.nazev }}</div>
          <div class="skupina-line"></div>
        </div>

        <div class="kapitoly-list">
          <div
            v-for="kapitola in skupina.kapitoly"
            :key="kapitola.id"
            class="kapitola-row"
            :class="{ precteno: isRead(kapitola.slug) }"
            @click="$router.push('/kapitola/' + kapitola.slug)"
          >
            <div class="kapitola-num">{{ String(kapitola.id).padStart(2, '0') }}</div>
            <div class="kapitola-info">
              <div class="kapitola-nazev">{{ kapitola.title }}</div>
              <div class="kapitola-roky">{{ kapitola.years }}</div>
            </div>
            <div class="kapitola-status">
              <span v-if="isRead(kapitola.slug)" class="status-precteno">✓</span>
              <span v-else class="status-arrow">→</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { useProgress } from 'src/composables/useProgress'

const { isRead } = useProgress()

const skupiny = [
  {
    century: '4_stoleti_pr_n_l',
    nazev: 'IV. století př. n. l. · Republika · Rané období',
    kapitoly: [
      { id: 1, slug: '01_1_samnitska_valka', title: '1. samnitská válka', years: '343–341 př. n. l.' },
      { id: 2, slug: '02_latinska_valka', title: 'Latinská válka', years: '340–338 př. n. l.' },
      { id: 3, slug: '03_2_samnitska_valka', title: '2. samnitská válka', years: '326–304 př. n. l.' }
    ]
  },
  {
    century: '3_stoleti_pr_n_l',
    nazev: 'III. století př. n. l. · Republika · Expanze',
    kapitoly: [
      { id: 4, slug: '04_3_samnitska_valka', title: '3. samnitská válka', years: '298–290 př. n. l.' },
      { id: 5, slug: '05_pyrrhova_valka', title: 'Pyrrhova válka', years: '280–275 př. n. l.' },
      { id: 6, slug: '06_1_punska_valka', title: '1. punská válka', years: '264–241 př. n. l.' },
      { id: 7, slug: '07_2_punska_valka', title: '2. punská válka', years: '218–201 př. n. l.' }
    ]
  },
  {
    century: '2_stoleti_pr_n_l',
    nazev: 'II. století př. n. l. · Republika · Velmoc',
    kapitoly: [
      { id: 8, slug: '08_1_makedonska_valka', title: '1. makedonská válka', years: '214–205 př. n. l.' },
      { id: 9, slug: '09_2_makedonska_valka', title: '2. makedonská válka', years: '200–196 př. n. l.' },
      { id: 10, slug: '10_syrska_valka', title: 'Syrská válka', years: '192–188 př. n. l.' },
      { id: 11, slug: '11_3_makedonska_valka', title: '3. makedonská válka', years: '171–168 př. n. l.' },
      { id: 12, slug: '12_3_punska_valka', title: '3. punská válka', years: '149–146 př. n. l.' },
      { id: 13, slug: '13_numantinska_valka', title: 'Numantinská válka', years: '143–133 př. n. l.' }
    ]
  },
  {
    century: '1_stoleti_pr_n_l',
    nazev: 'I. století př. n. l. · Republika · Krize',
    kapitoly: [
      { id: 14, slug: '14_jugurthinska_valka', title: 'Jugurthinská válka', years: '112–105 př. n. l.' },
      { id: 15, slug: '15_valky_s_kimbry_a_teutony', title: 'Války s Kimby a Teutony', years: '113–101 př. n. l.' },
      { id: 16, slug: '16_spojenecka_valka', title: 'Spojenecká válka', years: '91–87 př. n. l.' },
      { id: 17, slug: '17_sullovy_obcanske_valky', title: 'Sullovy občanské války', years: '88–81 př. n. l.' },
      { id: 18, slug: '18_sertorijska_valka', title: 'Sertorijská válka', years: '80–72 př. n. l.' },
      { id: 19, slug: '19_spartakovo_povstani', title: 'Spartakovo povstání', years: '73–71 př. n. l.' },
      { id: 20, slug: '20_3_mithridatska_valka', title: '3. mithridatská válka', years: '73–63 př. n. l.' },
      { id: 21, slug: '21_caesarovy_galske_valky', title: 'Caesarovy galské války', years: '58–50 př. n. l.' },
      { id: 22, slug: '22_caesarova_obcanska_valka', title: 'Caesarova občanská válka', years: '49–45 př. n. l.' },
      { id: 23, slug: '23_zaverecne_obcanske_valky', title: 'Závěrečné občanské války', years: '44–31 př. n. l.' }
    ]
  },
  {
    century: '1_stoleti_n_l',
    nazev: 'I. století n. l. · Císařství · Principát',
    kapitoly: [
      { id: 24, slug: '24_bitva_v_teutoburskem_lese', title: 'Bitva v Teutoburském lese', years: '9 n. l.' },
      { id: 25, slug: '25_dobyti_britanie', title: 'Dobytí Británie', years: '43 n. l.' },
      { id: 26, slug: '26_povstani_boudiky', title: 'Povstání Boudiky', years: '60–61 n. l.' },
      { id: 27, slug: '27_rok_ctyr_cisaru', title: 'Rok čtyř císařů', years: '69 n. l.' },
      { id: 28, slug: '28_zidovska_valka', title: 'Židovská válka', years: '66–73 n. l.' }
    ]
  },
  {
    century: '2_stoleti_n_l',
    nazev: 'II. století n. l. · Císařství · Vrchol',
    kapitoly: [
      { id: 29, slug: '29_1_dacka_valka', title: '1. dacká válka', years: '101–102 n. l.' },
      { id: 30, slug: '30_2_dacka_valka', title: '2. dacká válka', years: '105–106 n. l.' },
      { id: 31, slug: '31_parthska_valka_traiana', title: 'Parthská válka Traiana', years: '113–117 n. l.' },
      { id: 32, slug: '32_markomanske_valky', title: 'Markomanské války', years: '166–180 n. l.' }
    ]
  }
]
</script>
@media (min-width: 769px) and (max-width: 1024px) {
  .osa-wrap { padding: 4rem 3rem 5rem; }
  .skupina-label { font-size: 0.58rem; }
  .kapitola-row { padding: 0.9rem 1rem; }
}

<style scoped>
.page { background: var(--bg-primary); min-height: 100vh; }

.osa-wrap { max-width: 760px; margin: 0 auto; padding: 5rem 2rem 6rem; }

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

.osa-header { text-align: center; margin-bottom: 4rem; }
.osa-label {
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--text-red);
  margin-bottom: 1rem;
}
.osa-title {
  font-family: 'Cinzel', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}
.osa-desc {
  font-family: 'EB Garamond', serif;
  font-style: italic;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.skupina { margin-bottom: 3rem; }

.skupina-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.skupina-line { flex: 1; height: 1px; background: var(--border-gold); }
.skupina-label {
  font-family: 'Cinzel', serif;
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-subtle);
  white-space: nowrap;
}

.kapitoly-list { display: flex; flex-direction: column; }

.kapitola-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border-gold);
  cursor: pointer;
  transition: background 0.2s;
}
.kapitola-row:hover { background: var(--bg-card); }
.kapitola-row.precteno { opacity: 0.6; }

.kapitola-num {
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  color: var(--text-red);
  min-width: 24px;
}
.kapitola-info { flex: 1; }
.kapitola-nazev {
  font-family: 'Cinzel', serif;
  font-size: 0.9rem;
  color: var(--text-primary);
  margin-bottom: 0.2rem;
  text-transform: none;
}
.kapitola-roky {
  font-family: 'EB Garamond', serif;
  font-size: 0.85rem;
  color: var(--text-subtle);
  font-style: italic;
}
.kapitola-status { min-width: 20px; text-align: right; }
.status-precteno { color: var(--text-gold); font-size: 0.9rem; }
.status-arrow { color: var(--text-subtle); font-size: 0.9rem; transition: color 0.2s; }
.kapitola-row:hover .status-arrow { color: var(--text-gold); }

@media (max-width: 768px) {
  .osa-wrap { padding: 4rem 1.25rem 4rem; }
  .skupina-label { font-size: 0.55rem; }
  .kapitola-row { padding: 0.875rem 0.75rem; }
}
</style>