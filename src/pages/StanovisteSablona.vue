<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page class="st-page">
    <div v-if="data" class="st-wrap">
      <router-link to="/areal" class="zpet-link">← Všechna stanoviště</router-link>

      <header class="st-header">
        <div class="st-meta">{{ data.skupinaNazev }}</div>
        <h1 class="st-nazev">{{ data.nazev }}</h1>
        <p class="st-podnadpis">{{ data.podnadpis }}</p>
        <div class="st-divider">
          <div class="divider-line"></div>
          <div class="divider-diamond"></div>
          <div class="divider-line"></div>
        </div>
      </header>

      <div class="prepinac">
        <button :class="['prep-btn', { aktivni: !proDeti }]" @click="proDeti = false">
          Pro dospělé
        </button>
        <button :class="['prep-btn', { aktivni: proDeti }]" @click="proDeti = true">
          Pro děti
        </button>
      </div>

      <div class="st-text" :class="{ 'text-deti': proDeti }">
        <p v-for="(odstavec, i) in proDeti ? data.deti : data.dospeli" :key="i">{{ odstavec }}</p>
      </div>

      <div class="st-nav">
        <button class="nav-btn" :disabled="!maPredchozi" @click="prejdiNa(-1)">← Předchozí</button>
        <router-link to="/areal" class="nav-btn nav-btn-stred">Přehled</router-link>
        <button class="nav-btn" :disabled="!maDalsi" @click="prejdiNa(1)">Další →</button>
      </div>
    </div>

    <div v-else class="st-error">
      <p>Stanoviště nenalezeno.</p>
      <router-link to="/areal">← Zpět na přehled</router-link>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { vyzboj, historie } from '../obsah_areal/areal-data.js'

const route = useRoute()
const router = useRouter()
const proDeti = ref(false)

const vsechna = [...vyzboj, ...historie]

function najdi(id) {
  return vsechna.find((s) => s.id === String(id).padStart(2, '0')) || null
}

const data = computed(() => najdi(route.params.id))
const aktualniIndex = computed(() =>
  vsechna.findIndex((s) => s.id === String(route.params.id).padStart(2, '0')),
)
const maPredchozi = computed(() => aktualniIndex.value > 0)
const maDalsi = computed(() => aktualniIndex.value < vsechna.length - 1)

function prejdiNa(smer) {
  const novyIdx = aktualniIndex.value + smer
  if (novyIdx >= 0 && novyIdx < vsechna.length) {
    router.push(`/areal/${vsechna[novyIdx].id}`)
  }
}

watch(
  () => route.params.id,
  () => {
    proDeti.value = false
  },
)
watch(
  data,
  (val) => {
    if (val) document.title = `${val.nazev} | Terra Felix`
  },
  { immediate: true },
)
</script>

<style scoped>
.st-page {
  min-height: 100vh;
  padding: 2rem 1rem 4rem;
}
.st-wrap {
  max-width: 720px;
  margin: 0 auto;
}

.zpet-link {
  display: inline-block;
  font-family: 'Cinzel', serif;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted, #9c9585);
  text-decoration: none;
  margin-bottom: 2.5rem;
  transition: color 0.2s;
}
.zpet-link:hover {
  color: var(--text-gold, #c9a84c);
}

.st-header {
  text-align: center;
  margin-bottom: 2.5rem;
}
.st-meta {
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-red, #c22b2b);
  margin-bottom: 0.75rem;
}
.st-nazev {
  font-family: 'Cinzel', serif;
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--text-primary, #ede8dc);
  margin: 0 0 0.4rem;
}
.st-podnadpis {
  font-family: 'EB Garamond', serif;
  font-size: 1.1rem;
  color: var(--text-muted, #9c9585);
  font-style: italic;
  margin: 0 0 1.5rem;
}
.st-divider {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
}
.divider-line {
  flex: 1;
  max-width: 80px;
  height: 1px;
  background: var(--border-gold, rgba(201, 168, 76, 0.25));
}
.divider-diamond {
  width: 6px;
  height: 6px;
  background: var(--dark-crimson, #9b1b1b);
  transform: rotate(45deg);
}

.prepinac {
  display: flex;
  gap: 0;
  margin: 0 auto 2rem;
  max-width: 320px;
  border: 1px solid var(--border-gold, rgba(201, 168, 76, 0.25));
}
.prep-btn {
  flex: 1;
  padding: 0.65rem 1rem;
  font-family: 'Cinzel', serif;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: transparent;
  color: var(--text-muted, #9c9585);
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}
.prep-btn:first-child {
  border-right: 1px solid var(--border-gold, rgba(201, 168, 76, 0.25));
}
.prep-btn.aktivni {
  background: var(--text-gold, #c9a84c);
  color: var(--bg-primary, #080808);
}
.prep-btn:not(.aktivni):hover {
  color: var(--text-gold, #c9a84c);
}

.st-text {
  font-family: 'EB Garamond', serif;
  font-size: 1.15rem;
  line-height: 2;
  color: var(--text-body, #b8b0a0);
  border-left: 2px solid var(--border-red, rgba(194, 43, 43, 0.3));
  padding-left: 1.5rem;
  margin-bottom: 3rem;
}
.st-text p {
  margin: 0 0 1.2rem;
}
.st-text p:last-child {
  margin-bottom: 0;
}
.text-deti {
  font-size: 1.2rem;
  line-height: 1.9;
  border-left-color: var(--text-gold, #c9a84c);
}

.st-nav {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}
.nav-btn {
  font-family: 'Cinzel', serif;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--border-gold, rgba(201, 168, 76, 0.25));
  background: transparent;
  color: var(--text-muted, #9c9585);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
  display: inline-block;
}
.nav-btn:hover:not(:disabled) {
  border-color: var(--text-gold, #c9a84c);
  color: var(--text-gold, #c9a84c);
}
.nav-btn:disabled {
  opacity: 0.3;
  cursor: default;
}
.nav-btn-stred {
  border-color: var(--text-red, #c22b2b);
  color: var(--text-red, #c22b2b);
}

.st-error {
  text-align: center;
  padding: 4rem 1rem;
  color: var(--text-muted, #9c9585);
  font-family: 'EB Garamond', serif;
  font-size: 1.1rem;
}
.st-error a {
  color: var(--text-gold, #c9a84c);
  text-decoration: none;
  margin-top: 1rem;
  display: inline-block;
}
</style>
