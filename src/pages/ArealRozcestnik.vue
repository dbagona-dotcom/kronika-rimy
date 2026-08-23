<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page class="areal-page">
    <section class="areal-hero">
      <div class="hero-ornament">Terra Felix</div>
      <h1 class="hero-title">Výzbroj & Historie</h1>
      <p class="hero-sub">COH VIII · Legio X Gemina · Castellum Felix</p>
    </section>

    <section class="rychla-nav">
      <div class="rychla-nav-sekce">
        <div class="sekce-label">Výstroj a výzbroj legionáře</div>
        <div class="cisla-grid">
          <a
            v-for="s in vyzboj"
            :key="s.id"
            href="#"
            @click.prevent="skocNa(s.id)"
            class="cislo-link"
          >
            <span class="cislo-num">{{ s.cislo }}</span>
            <span class="cislo-nazev">{{ s.nazev }}</span>
          </a>
        </div>
      </div>
      <div class="rychla-nav-sekce">
        <div class="sekce-label">Historie Říma</div>
        <div class="cisla-grid">
          <a
            v-for="s in historie"
            :key="s.id"
            href="#"
            @click.prevent="skocNa(s.id)"
            class="cislo-link"
          >
            <span class="cislo-num">{{ s.cislo }}</span>
            <span class="cislo-nazev">{{ s.nazev }}</span>
          </a>
        </div>
      </div>
    </section>

    <div class="hlavni-divider">
      <div class="divider-line"></div>
      <div class="divider-diamond"></div>
      <div class="divider-line"></div>
    </div>

    <section class="texty-sekce">
      <h2 class="sekce-nadpis">
        <span class="sekce-cislo">I.</span>
        Výstroj a výzbroj legionáře
      </h2>

      <div v-for="s in vyzboj" :key="s.id" :id="`st-${s.id}`" class="stanoviste-karta">
        <div class="karta-header">
          <div class="karta-num">{{ s.cislo }}</div>
          <div class="karta-info">
            <h3 class="karta-nazev">{{ s.nazev }}</h3>
            <p class="karta-podnadpis">{{ s.podnadpis }}</p>
          </div>
          <router-link :to="`/areal/${s.id}`" class="qr-link">QR stránka →</router-link>
        </div>
        <div class="karta-prepinac">
          <button
            :class="['kprep-btn', { aktivni: aktivniVerze[s.id] !== 'deti' }]"
            @click="aktivniVerze[s.id] = 'dospeli'"
          >
            Dospělí
          </button>
          <button
            :class="['kprep-btn', { aktivni: aktivniVerze[s.id] === 'deti' }]"
            @click="aktivniVerze[s.id] = 'deti'"
          >
            Děti
          </button>
        </div>
        <div class="karta-text">
          <p v-for="(o, i) in aktivniVerze[s.id] === 'deti' ? s.deti : s.dospeli" :key="i">
            {{ o }}
          </p>
        </div>
      </div>
    </section>

    <div class="hlavni-divider">
      <div class="divider-line"></div>
      <div class="divider-diamond"></div>
      <div class="divider-line"></div>
    </div>

    <section class="texty-sekce">
      <h2 class="sekce-nadpis">
        <span class="sekce-cislo">II.</span>
        Historie Říma
      </h2>

      <div v-for="s in historie" :key="s.id" :id="`st-${s.id}`" class="stanoviste-karta">
        <div class="karta-header">
          <div class="karta-num">{{ s.cislo }}</div>
          <div class="karta-info">
            <h3 class="karta-nazev">{{ s.nazev }}</h3>
            <p class="karta-podnadpis">{{ s.podnadpis }}</p>
          </div>
          <router-link :to="`/areal/${s.id}`" class="qr-link">QR stránka →</router-link>
        </div>
        <div class="karta-prepinac">
          <button
            :class="['kprep-btn', { aktivni: aktivniVerze[s.id] !== 'deti' }]"
            @click="aktivniVerze[s.id] = 'dospeli'"
          >
            Dospělí
          </button>
          <button
            :class="['kprep-btn', { aktivni: aktivniVerze[s.id] === 'deti' }]"
            @click="aktivniVerze[s.id] = 'deti'"
          >
            Děti
          </button>
        </div>
        <div class="karta-text">
          <p v-for="(o, i) in aktivniVerze[s.id] === 'deti' ? s.deti : s.dospeli" :key="i">
            {{ o }}
          </p>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { vyzboj, historie } from '../obsah_areal/areal-data.js'

function skocNa(id) {
  const el = document.getElementById(`st-${id}`)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const aktivniVerze = reactive(
  Object.fromEntries([...vyzboj, ...historie].map((s) => [s.id, 'dospeli'])),
)
</script>

<style scoped>
.areal-page {
  padding-bottom: 5rem;
}

.areal-hero {
  text-align: center;
  padding: 4rem 1rem 3rem;
}
.hero-ornament {
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--text-red, #c22b2b);
  margin-bottom: 1rem;
}
.hero-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 700;
  color: var(--text-primary, #ede8dc);
  letter-spacing: 0.05em;
  margin: 0 0 0.5rem;
}
.hero-sub {
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  color: var(--text-muted, #9c9585);
  font-style: italic;
  margin: 0;
}

.rychla-nav {
  max-width: 900px;
  margin: 0 auto 3rem;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
@media (max-width: 600px) {
  .rychla-nav {
    grid-template-columns: 1fr;
  }
}

.sekce-label {
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-gold, #c9a84c);
  margin-bottom: 1rem;
}
.cisla-grid {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.cislo-link {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  text-decoration: none;
  padding: 0.2rem 0;
  transition: color 0.15s;
}
.cislo-link:hover .cislo-nazev {
  color: var(--text-gold, #c9a84c);
}
.cislo-num {
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  color: var(--text-red, #c22b2b);
  min-width: 1.5rem;
}
.cislo-nazev {
  font-family: 'EB Garamond', serif;
  font-size: 0.95rem;
  color: var(--text-muted, #9c9585);
}

.hlavni-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto 3rem;
  padding: 0 1rem;
}
.divider-line {
  flex: 1;
  height: 1px;
  background: var(--border-gold, rgba(201, 168, 76, 0.2));
}
.divider-diamond {
  width: 6px;
  height: 6px;
  background: var(--dark-crimson, #9b1b1b);
  transform: rotate(45deg);
  flex-shrink: 0;
}

.texty-sekce {
  max-width: 760px;
  margin: 0 auto 4rem;
  padding: 0 1rem;
}
.sekce-nadpis {
  font-family: 'Cinzel', serif;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted, #9c9585);
  margin: 0 0 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.sekce-nadpis::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border-gold, rgba(201, 168, 76, 0.2));
}
.sekce-cislo {
  color: var(--text-red, #c22b2b);
}

.stanoviste-karta {
  margin-bottom: 3.5rem;
  padding-bottom: 3.5rem;
  border-bottom: 1px solid var(--border-gold, rgba(201, 168, 76, 0.12));
  scroll-margin-top: 80px;
}
.stanoviste-karta:last-child {
  border-bottom: none;
}

.karta-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
}
.karta-num {
  font-family: 'Cinzel', serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-red, #c22b2b);
  min-width: 2.2rem;
  line-height: 1;
  padding-top: 0.15rem;
}
.karta-info {
  flex: 1;
}
.karta-nazev {
  font-family: 'Cinzel', serif;
  font-size: 1.05rem;
  letter-spacing: 0.06em;
  color: var(--text-primary, #ede8dc);
  margin: 0 0 0.2rem;
}
.karta-podnadpis {
  font-family: 'EB Garamond', serif;
  font-size: 0.95rem;
  color: var(--text-muted, #9c9585);
  font-style: italic;
  margin: 0;
}
.qr-link {
  font-family: 'Cinzel', serif;
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-gold, #c9a84c);
  text-decoration: none;
  white-space: nowrap;
  padding-top: 0.2rem;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}
.qr-link:hover {
  border-color: var(--text-gold, #c9a84c);
}

.karta-prepinac {
  display: flex;
  gap: 0;
  margin-bottom: 1.25rem;
  width: fit-content;
  border: 1px solid var(--border-gold, rgba(201, 168, 76, 0.25));
}
.kprep-btn {
  padding: 0.4rem 1rem;
  font-family: 'Cinzel', serif;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: transparent;
  color: var(--text-muted, #9c9585);
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}
.kprep-btn:first-child {
  border-right: 1px solid var(--border-gold, rgba(201, 168, 76, 0.25));
}
.kprep-btn.aktivni {
  background: rgba(201, 168, 76, 0.12);
  color: var(--text-gold, #c9a84c);
}

.karta-text {
  font-family: 'EB Garamond', serif;
  font-size: 1.1rem;
  line-height: 1.95;
  color: var(--text-body, #b8b0a0);
  border-left: 1px solid var(--border-red, rgba(194, 43, 43, 0.3));
  padding-left: 1.25rem;
}
.karta-text p {
  margin: 0 0 1rem;
}
.karta-text p:last-child {
  margin: 0;
}
</style>
