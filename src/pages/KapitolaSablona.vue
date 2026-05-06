<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page class="page">

    <!-- SCROLL PROGRESS BAR -->
    <div class="progress-bar" :style="{ width: scrollProgress + '%' }"></div>

    <div v-if="kapitola">

      <!-- HERO OBRÁZEK -->
      <div v-if="kapitola.images?.hero" class="hero">
        <div class="hero-placeholder" :class="{ 'hero-placeholder--hidden': imgLoaded }"></div>
        <img
          :src="'/images/' + kapitola.images.hero"
          :alt="kapitola.title"
          class="hero-img"
          :class="{ 'hero-img--loaded': imgLoaded }"
          @load="imgLoaded = true"
        />
        <div class="hero-content">
          <div class="hero-meta">{{ kapitola.years }}</div>
          <h1 class="hero-title">{{ kapitola.title }}</h1>
          <div class="hero-divider">
            <div class="hero-divider-line"></div>
            <div class="hero-divider-gem"></div>
            <div class="hero-divider-line"></div>
          </div>
        </div>
      </div>

      <div class="kapitola-wrap">

        <!-- ZPĚT -->
        <router-link to="/" class="back-btn">← Zpět na rozcestník</router-link>

        <!-- HEADER — jen pokud není hero obrázek -->
        <div v-if="!kapitola.images?.hero" class="kap-header">
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

              <!-- PODKAPITOLY — tlačítka pod textem sekce III, před mapou -->
              <div v-if="podkapitoly.length > 0" class="podkap-btns">
                <button
                  v-for="(pk, i) in podkapitoly"
                  :key="i"
                  class="podkap-btn"
                  @click="otevritModal(pk)"
                >
                  <span class="podkap-btn-label">Podkapitola</span>
                  <span class="podkap-btn-nazev">{{ pk.subtitle }}</span>
                  <span class="podkap-btn-arrow">→</span>
                </button>
              </div>

              <!-- MAPA -->
              <div v-if="kapitola.images?.mapa" class="inline-img-wrap">
                <img :src="'/images/' + kapitola.images.mapa.src" :alt="kapitola.images.mapa.caption" class="inline-img" />
                <div class="inline-img-caption">{{ kapitola.images.mapa.caption }}</div>
              </div>

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

        <!-- NÁHODNÁ KAPITOLA -->
        <div class="nahodna-wrap">
          <span class="nahodna-label">Chcete vyzkoušet náhodnou kapitolu?</span>
          <button class="nav-btn nav-btn-gold" @click="nahodnaKapitola">↯ Náhodná kapitola</button>
        </div>

      </div>
    </div>

    <div v-else class="not-found">
      <p>Kapitola nenalezena.</p>
      <router-link to="/">← Zpět na rozcestník</router-link>
    </div>

    <!-- MODAL PODKAPITOLY -->
    <Teleport to="body">
      <div v-if="modalData" class="modal-overlay" @click.self="zavritModal">
        <div class="modal">
          <div class="modal-header">
            <div class="modal-meta">Podkapitola</div>
            <h2 class="modal-title">{{ modalData.subtitle }}</h2>
            <button class="modal-close" @click="zavritModal" aria-label="Zavřít">✕</button>
          </div>
          <div class="modal-body">
            <p v-for="(odstavec, i) in modalData.odstavce" :key="i" class="modal-text">{{ odstavec }}</p>
          </div>
        </div>
      </div>
    </Teleport>

  </q-page>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMeta } from 'quasar'
import { useProgress } from 'src/composables/useProgress'

const route = useRoute()
const router = useRouter()
const { markRead: ulozPrecteno, isRead } = useProgress()

const kapitola = ref(null)
const scrollProgress = ref(0)
const imgLoaded = ref(false)
const podkapitoly = ref([])
const modalData = ref(null)

useMeta(() => ({
  title: kapitola.value ? `${kapitola.value.title} | Kronika Říma` : 'Kronika Říma'
}))

function updateScroll() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

function handleKeydown(e) {
  if (e.key === 'Escape' && modalData.value) {
    zavritModal()
    return
  }
  if (modalData.value) return
  if (e.key === 'ArrowLeft' && predchozi.value) prejdi(predchozi.value)
  if (e.key === 'ArrowRight' && dalsi.value) prejdi(dalsi.value)
}

function otevritModal(pk) {
  modalData.value = pk
  document.body.style.overflow = 'hidden'
}

function zavritModal() {
  modalData.value = null
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
  window.addEventListener('keydown', handleKeydown)
  nactiKapitolu(aktualniId.value)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

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

function nahodnaKapitola() {
  const ostatni = vsechnyId.filter(id => id !== aktualniId.value)
  const nahodne = ostatni[Math.floor(Math.random() * ostatni.length)]
  prejdi(nahodne)
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
  scrollProgress.value = 0
  podkapitoly.value = []
  try {
    const slozka = getSlozka(id)
    const data = await import(`../obsah_strany/${slozka}/${id}.json`)
    kapitola.value = data.default
  } catch {
    kapitola.value = null
  }
  await nactiPodkapitoly(id)
}

async function nactiPodkapitoly(id) {
  try {
    const data = await import(`../obsah_strany/podkapitoly/${id}.json`)
    const json = data.default
    if (Array.isArray(json)) {
      podkapitoly.value = json
    } else {
      podkapitoly.value = [json]
    }
  } catch {
    podkapitoly.value = []
  }
}

watch(aktualniId, (id) => {
  scrollProgress.value = 0
  imgLoaded.value = false
  modalData.value = null
  document.body.style.overflow = ''
  window.scrollTo(0, 0)
  nactiKapitolu(id)
})
</script>

<style scoped>
.progress-bar {
  position: fixed;
  top: 64px;
  left: 0;
  height: 2px;
  background: #9b1b1b;
  z-index: 1000;
  transition: width 0.1s linear;
  pointer-events: none;
}

.page { background: var(--bg-primary); min-height: 100vh; }

/* ── HERO ── */
.hero {
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 460px;
  overflow: hidden;
}

.hero-placeholder {
  position: absolute;
  inset: 0;
  background: #0d0a07;
  z-index: 1;
  transition: opacity 0.6s ease;
}
.hero-placeholder--hidden {
  opacity: 0;
  pointer-events: none;
}

.hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
  filter: brightness(0.4) saturate(0.8);
  transform: scale(1.04);
  opacity: 0;
  transition: opacity 0.6s ease;
}
.hero-img--loaded {
  opacity: 1;
  animation: heroZoom 12s ease-out forwards;
}

@keyframes heroZoom {
  from { transform: scale(1.04); }
  to   { transform: scale(1.0); }
}
.hero::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 55%;
  background: linear-gradient(to bottom, transparent, var(--bg-primary));
  pointer-events: none;
  z-index: 2;
}
.hero-content {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 0 2rem 3.5rem;
  text-align: center;
  z-index: 3;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUp 0.8s 0.3s ease-out forwards;
}
@keyframes slideUp {
  to { opacity: 1; transform: translateY(0); }
}
.hero-meta {
  font-family: 'Cinzel', serif;
  font-size: 0.72rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: #e8a0a0;
  margin-bottom: 0.75rem;
  text-shadow: 0 1px 8px rgba(0,0,0,0.9);
}
.hero-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(1.8rem, 4vw, 3.2rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  text-shadow: 0 2px 20px rgba(0,0,0,0.8);
  margin-bottom: 1rem;
}
.hero-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.hero-divider-line { width: 80px; height: 1px; background: rgba(201,168,76,0.5); }
.hero-divider-gem { width: 6px; height: 6px; background: #9b1b1b; transform: rotate(45deg); }

/* ── INLINE MAPA ── */
.inline-img-wrap { margin: 2rem 0 1rem; }
.inline-img {
  display: block;
  width: 100%;
  max-width: 460px;
  height: auto;
  border: 1px solid var(--border-gold);
  filter: sepia(0.1) brightness(0.95);
  transition: filter 0.3s;
}
.inline-img:hover { filter: sepia(0) brightness(1); }
.inline-img-caption {
  font-family: 'EB Garamond', serif;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--text-muted);
  margin-top: 0.5rem;
}

/* ── OBSAH ── */
.kapitola-wrap {
  max-width: 760px;
  margin: 0 auto;
  padding: 3rem 2rem 6rem;
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

.kap-header { text-align: center; margin-bottom: 4rem; }
.kap-meta {
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--text-red);
  margin-bottom: 1.25rem;
}
.kap-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: 2rem;
}
.kap-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
}
.kap-divider-line { flex: 1; max-width: 120px; height: 1px; background: var(--border-gold); }
.kap-divider-ornament { width: 6px; height: 6px; background: #9b1b1b; transform: rotate(45deg); }

.kap-body { display: flex; flex-direction: column; gap: 4rem; }
.sekce { position: relative; }

.sekce-header {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1.75rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-gold);
}
.sekce-num {
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  color: var(--text-red);
  flex-shrink: 0;
}
.sekce-title {
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.05em;
}

.sekce-content { padding-left: 1rem; border-left: 1px solid var(--border-red); }

.sekce-text {
  font-family: 'EB Garamond', serif;
  font-size: 1.2rem;
  color: var(--text-body);
  line-height: 2;
  margin-bottom: 1.25rem;
}
.sekce-text:last-child { margin-bottom: 0; }

.sekce-pribeh { background: var(--pribeh-bg); padding: 2.5rem; border: 1px solid var(--pribeh-border); }
.sekce-pribeh .sekce-header { border-bottom-color: var(--pribeh-border); }
.pribeh-content { border-left: 2px solid var(--pribeh-line); padding-left: 1.5rem; }
.pribeh-text {
  font-style: italic;
  color: var(--text-pribeh);
  font-size: 1.15rem;
  line-height: 2.1;
}

/* ── PODKAPITOLA TLAČÍTKA ── */
.podkap-btns {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
}

.podkap-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border-gold);
  padding: 1rem 1.25rem;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
  text-align: left;
  position: relative;
  overflow: hidden;
}
.podkap-btn::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 2px;
  background: #9b1b1b;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.25s ease;
}
.podkap-btn:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-gold-hover);
}
.podkap-btn:hover::before { transform: scaleY(1); }

.podkap-btn-label {
  font-family: 'Cinzel', serif;
  font-size: 0.62rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--text-red);
  flex-shrink: 0;
  min-width: 80px;
}
.podkap-btn-nazev {
  font-family: 'Cinzel', serif;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-primary);
  flex: 1;
  letter-spacing: 0.04em;
}
.podkap-btn-arrow {
  font-size: 1rem;
  color: var(--text-subtle);
  transition: color 0.2s, transform 0.2s;
  flex-shrink: 0;
}
.podkap-btn:hover .podkap-btn-arrow {
  color: var(--text-gold);
  transform: translateX(4px);
}

/* ── MODAL ── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 2000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 1rem;
  overflow-y: auto;
}

.modal {
  background: var(--bg-primary);
  border: 1px solid var(--border-gold);
  width: 100%;
  max-width: 720px;
  position: relative;
  animation: modalIn 0.25s ease-out;
  flex-shrink: 0;
}

@keyframes modalIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.modal-header {
  padding: 2rem 2rem 1.5rem;
  border-bottom: 1px solid var(--border-gold);
  position: relative;
}
.modal-meta {
  font-family: 'Cinzel', serif;
  font-size: 0.62rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--text-red);
  margin-bottom: 0.6rem;
}
.modal-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  padding-right: 3rem;
}
.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: 1px solid var(--border-gold);
  color: var(--text-muted);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
  flex-shrink: 0;
}
.modal-close:hover {
  background: var(--bg-card);
  color: var(--text-gold);
  border-color: var(--border-gold-hover);
}

.modal-body {
  padding: 2rem;
  max-height: 70vh;
  overflow-y: auto;
}
.modal-text {
  font-family: 'EB Garamond', serif;
  font-size: 1.15rem;
  color: var(--text-body);
  line-height: 2;
  margin-bottom: 1.25rem;
}
.modal-text:last-child { margin-bottom: 0; }

/* NAVIGACE */
.kap-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-gold);
  gap: 1rem;
}
.nav-btn {
  font-family: 'Cinzel', serif;
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  background: none;
  border: 1px solid var(--border-gold);
  padding: 0.7rem 1.4rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.nav-btn:hover:not(:disabled) { color: var(--text-gold); border-color: var(--border-gold-hover); }
.nav-btn:disabled { opacity: 0.25; cursor: default; }
.nav-btn-primary { color: var(--text-red); border-color: var(--border-red); }
.nav-btn-primary:hover { color: #e84040 !important; border-color: rgba(194, 43, 43, 0.6) !important; }
.nav-btn-gold { color: var(--text-gold); border-color: var(--border-gold); }
.nav-btn-gold:hover { color: var(--text-gold-hover) !important; border-color: var(--border-gold-hover) !important; }

.nahodna-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-gold);
}
.nahodna-label {
  font-family: 'EB Garamond', serif;
  font-style: italic;
  font-size: 1rem;
  color: var(--text-subtle);
}

.not-found {
  text-align: center;
  padding: 8rem 2rem;
  font-family: 'Cinzel', serif;
  color: var(--text-subtle);
}
.not-found a { color: var(--text-red); text-decoration: none; }

@media (min-width: 769px) and (max-width: 1024px) {
  .hero { height: 65vh; }
  .kapitola-wrap { padding: 3rem 3rem 6rem; max-width: 680px; }
  .sekce-pribeh { padding: 2rem 1.5rem; }
  .kap-nav { gap: 0.75rem; }
  .nav-btn { padding: 0.6rem 1rem; }
}

@media (max-width: 768px) {
  .progress-bar { top: 0; }
  .hero { height: 55vh; min-height: 320px; }
  .kapitola-wrap { padding: 3rem 1.25rem 4rem; }
  .kap-title { font-size: 1.6rem; }
  .sekce-content { padding-left: 0.75rem; }
  .sekce-pribeh { padding: 1.5rem 1rem; }
  .kap-nav { flex-direction: column; gap: 0.75rem; }
  .nav-btn { width: 100%; text-align: center; }
  .nahodna-wrap { flex-direction: column; gap: 0.75rem; text-align: center; }
  .modal-overlay { padding: 0; align-items: flex-end; }
  .modal { max-height: 90vh; border-bottom: none; }
  .modal-body { max-height: 60vh; }
}
</style>