<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page class="page">
    <div v-if="kapitola" class="kapitola-wrap">

      <!-- ZPĚT -->
      <router-link to="/" class="back-btn">← Zpět na rozcestník</router-link>

      <!-- HEADER -->
      <div class="kap-header">
        <div class="kap-meta">{{ kapitola.years }}</div>
        <h1 class="kap-title">{{ kapitola.title }}</h1>
        <div class="kap-divider">
          <div class="kap-divider-line"></div>
          <div class="kap-divider-ornament"></div>
          <div class="kap-divider-line"></div>
        </div>
      </div>

      <!-- SEKCE -->
      <div class="kap-body">

        <div class="sekce">
          <div class="sekce-header">
            <span class="sekce-num">I.</span>
            <h2 class="sekce-title">Historický kontext</h2>
          </div>
          <div class="sekce-content">
            <p v-for="(odstavec, i) in kapitola.sections.kontext" :key="i" class="sekce-text">{{ odstavec }}</p>
          </div>
        </div>

        <div class="sekce">
          <div class="sekce-header">
            <span class="sekce-num">II.</span>
            <h2 class="sekce-title">Armáda a vojenství</h2>
          </div>
          <div class="sekce-content">
            <p v-for="(odstavec, i) in kapitola.sections.armada" :key="i" class="sekce-text">{{ odstavec }}</p>
          </div>
        </div>

        <div class="sekce">
          <div class="sekce-header">
            <span class="sekce-num">III.</span>
            <h2 class="sekce-title">Konflikt a jeho průběh</h2>
          </div>
          <div class="sekce-content">
            <p v-for="(odstavec, i) in kapitola.sections.konflikt" :key="i" class="sekce-text">{{ odstavec }}</p>
          </div>
        </div>

        <div class="sekce sekce-pribeh">
          <div class="sekce-header">
            <span class="sekce-num">IV.</span>
            <h2 class="sekce-title">Osobní příběh</h2>
          </div>
          <div class="sekce-content pribeh-content">
            <p v-for="(odstavec, i) in kapitola.sections.pribeh" :key="i" class="sekce-text pribeh-text">{{ odstavec }}</p>
          </div>
        </div>

      </div>

      <!-- NAVIGACE -->
      <div class="kap-nav">
        <button class="nav-btn" :disabled="!predchozi" @click="prejdi(predchozi)">← Předchozí</button>
        <button class="nav-btn nav-btn-primary" @click="markRead">
          {{ precteno ? '✓ Přečteno' : 'Označit jako přečtené' }}
        </button>
        <button class="nav-btn" :disabled="!dalsi" @click="prejdi(dalsi)">Další →</button>
      </div>

    </div>

    <div v-else class="not-found">
      <p>Kapitola nenalezena.</p>
      <router-link to="/">← Zpět na rozcestník</router-link>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProgress } from 'src/composables/useProgress'

const route = useRoute()
const router = useRouter()
const { markRead: ulozPrecteno, isRead } = useProgress()

const kapitola = ref(null)

const vsechnyId = [
  '01_1_samnitska_valka', '02_latinska_valka', '03_2_samnitska_valka',
  '04_3_samnitska_valka', '05_pyrrhova_valka', '06_1_punska_valka', '07_2_punska_valka',
  '08_1_makedonska_valka', '09_2_makedonska_valka', '10_syrska_valka',
  '11_3_makedonska_valka', '12_3_punska_valka', '13_numantinska_valka',
  '14_jugurthinska_valka', '15_valky_s_kimbry_a_teutony', '16_spojenecka_valka',
  '17_sullovy_obcanske_valky', '18_sertorijska_valka', '19_spartakovo_povstani',
  '20_3_mithridatska_valka', '21_caesarovy_galske_valky', '22_caesarova_obcanska_valka',
  '23_zaverecne_obcanske_valky', '24_bitva_v_teutoburskem_lese', '25_dobyti_britanie',
  '26_povstani_boudiky', '27_rok_ctyr_cisaru', '28_zidovska_valka',
  '29_1_dacka_valka', '30_2_dacka_valka', '31_parthska_valka_traiana', '32_markomanske_valky'
]

const aktualniId = computed(() => route.params.id)
const aktualniIndex = computed(() => vsechnyId.indexOf(aktualniId.value))
const predchozi = computed(() => vsechnyId[aktualniIndex.value - 1] || null)
const dalsi = computed(() => vsechnyId[aktualniIndex.value + 1] || null)
const precteno = computed(() => isRead(aktualniId.value))

function prejdi(id) {
  router.push('/kapitola/' + id)
}

function markRead() {
  ulozPrecteno(aktualniId.value)
}

function getSlozka(id) {
  const num = parseInt(id)
  if (num <= 3) return '4_stoleti_pr_n_l'
  if (num <= 7) return '3_stoleti_pr_n_l'
  if (num <= 13) return '2_stoleti_pr_n_l'
  if (num <= 23) return '1_stoleti_pr_n_l'
  if (num <= 28) return '1_stoleti_n_l'
  return '2_stoleti_n_l'
}

async function nactiKapitolu(id) {
  kapitola.value = null
  try {
    const slozka = getSlozka(id)
    const data = await import(`../obsah_strany/${slozka}/${id}.json`)
    kapitola.value = data.default
  } catch {
    kapitola.value = null
  }
}

onMounted(() => nactiKapitolu(aktualniId.value))
watch(aktualniId, (id) => nactiKapitolu(id))
</script>

<style scoped>
.page { background: #080808; min-height: 100vh; }

.kapitola-wrap {
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
  color: #5c5850;
  text-decoration: none;
  margin-bottom: 3rem;
  transition: color 0.2s;
}
.back-btn:hover { color: #c9a84c; }

.kap-header { text-align: center; margin-bottom: 4rem; }
.kap-meta {
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: #c22b2b;
  margin-bottom: 1.25rem;
}
.kap-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #ede8dc;
  line-height: 1.2;
  margin-bottom: 2rem;
}
.kap-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
}
.kap-divider-line {
  flex: 1;
  max-width: 120px;
  height: 1px;
  background: rgba(201, 168, 76, 0.2);
}
.kap-divider-ornament {
  width: 6px;
  height: 6px;
  background: #9b1b1b;
  transform: rotate(45deg);
}

.kap-body {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.sekce { position: relative; }

.sekce-header {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1.75rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(201, 168, 76, 0.1);
}
.sekce-num {
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  color: #c22b2b;
  flex-shrink: 0;
}
.sekce-title {
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  font-weight: 600;
  color: #ede8dc;
  letter-spacing: 0.05em;
}

.sekce-content { padding-left: 1rem; border-left: 1px solid rgba(155, 27, 27, 0.3); }

.sekce-text {
  font-family: 'EB Garamond', serif;
  font-size: 1.2rem;
  color: #b8b0a0;
  line-height: 2;
  margin-bottom: 1.25rem;
}
.sekce-text:last-child { margin-bottom: 0; }

.sekce-pribeh { background: rgba(155, 27, 27, 0.04); padding: 2.5rem; border: 1px solid rgba(155, 27, 27, 0.12); }
.sekce-pribeh .sekce-header { border-bottom-color: rgba(155, 27, 27, 0.2); }
.pribeh-content { border-left: 2px solid rgba(155, 27, 27, 0.5); padding-left: 1.5rem; }
.pribeh-text {
  font-style: italic;
  color: #d4ccc0;
  font-size: 1.15rem;
  line-height: 2.1;
}

.kap-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(201, 168, 76, 0.12);
  gap: 1rem;
}
.nav-btn {
  font-family: 'Cinzel', serif;
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #9c9585;
  background: none;
  border: 1px solid rgba(201, 168, 76, 0.15);
  padding: 0.7rem 1.4rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.nav-btn:hover:not(:disabled) { color: #c9a84c; border-color: rgba(201, 168, 76, 0.4); }
.nav-btn:disabled { opacity: 0.25; cursor: default; }
.nav-btn-primary {
  color: #c22b2b;
  border-color: rgba(194, 43, 43, 0.3);
}
.nav-btn-primary:hover { color: #e84040 !important; border-color: rgba(194, 43, 43, 0.6) !important; }

.not-found {
  text-align: center;
  padding: 8rem 2rem;
  font-family: 'Cinzel', serif;
  color: #5c5850;
}
.not-found a { color: #c22b2b; text-decoration: none; }
</style>