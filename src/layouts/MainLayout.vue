<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <nav class="nav">
        <div class="nav-logo">
          Kronika Říma
          <span>4. st. př. n. l. – 2. st. n. l.</span>
        </div>
        <div class="nav-links">
          <router-link to="/">Rozcestník</router-link>
          <router-link to="/casova-osa">Časová osa</router-link>
        </div>
        <div class="nav-right">
          <button class="theme-toggle" @click="toggleTheme" :title="isDark ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'">
            <span v-if="isDark">☀</span>
            <span v-else>☾</span>
          </button>
          <div class="nav-badge">
            Přečteno: {{ readCount }}/32
          </div>
        </div>
      </nav>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useProgress } from 'src/composables/useProgress'

const { getReadCount } = useProgress()
const readCount = getReadCount()

const isDark = ref(true)

function toggleTheme() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.remove('light')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.add('light')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'light') {
    isDark.value = false
    document.documentElement.classList.add('light')
  }
})
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  height: 64px;
  background: var(--nav-bg);
  border-bottom: 1px solid var(--border-gold);
  transition: background 0.3s;
}
.nav-logo {
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--text-gold);
  text-transform: uppercase;
}
.nav-logo span {
  color: var(--text-muted);
  font-weight: 400;
  font-size: 0.8rem;
  margin-left: 0.75rem;
  letter-spacing: 0.06em;
}
.nav-links {
  display: flex;
  gap: 2rem;
}
.nav-links a {
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.nav-links a:hover {
  color: var(--text-gold-hover);
}
.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.theme-toggle {
  background: none;
  border: 1px solid var(--border-gold);
  color: var(--text-gold);
  width: 32px;
  height: 32px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  padding: 0;
}
.theme-toggle:hover {
  background: var(--border-gold);
  color: var(--text-gold-hover);
}
.nav-badge {
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-red);
  border: 1px solid var(--border-red);
  padding: 0.25rem 0.75rem;
  border-radius: 2px;
}
@media (max-width: 768px) {
  .nav {
    padding: 0 1rem;
    height: auto;
    flex-wrap: wrap;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    gap: 0.5rem;
  }
  .nav-logo { font-size: 0.85rem; }
  .nav-logo span { display: none; }
  .nav-links { gap: 1rem; }
  .nav-links a { font-size: 0.7rem; }
  .nav-badge { font-size: 0.65rem; padding: 0.2rem 0.5rem; }
  .theme-toggle { width: 28px; height: 28px; font-size: 0.9rem; }
}
</style>