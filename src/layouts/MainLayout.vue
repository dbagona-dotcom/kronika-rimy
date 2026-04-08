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
        <div class="nav-badge">
          Přečteno: {{ readCount }}/32
        </div>
      </nav>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useProgress } from 'src/composables/useProgress'
const { getReadCount } = useProgress()
const readCount = getReadCount()
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  height: 64px;
  background: rgba(8, 8, 8, 0.95);
  border-bottom: 1px solid rgba(201, 168, 76, 0.12);
}
.nav-logo {
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: #c9a84c;
  text-transform: uppercase;
}
.nav-logo span {
  color: #9c9585;
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
  color: #9c9585;
  text-decoration: none;
  transition: color 0.2s;
}
.nav-links a:hover {
  color: #e8c97a;
}
.nav-badge {
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #c22b2b;
  border: 1px solid rgba(194, 43, 43, 0.3);
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
}
</style>