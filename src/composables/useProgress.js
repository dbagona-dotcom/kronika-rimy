import { ref, computed } from 'vue'

const STORAGE_KEY = 'kronika_progress'

function loadProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : {}
  } catch (error) {
    console.warn("Nepodařilo se načíst progres:", error)
    return {}
  }
}

const progress = ref(loadProgress())

export function useProgress() {
  function markRead(id) {
    progress.value[id] = true
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress.value))
    } catch (error) {
      console.warn("Nepodařilo se uložit progres do localStorage:", error)
    }
  }

  function isRead(id) {
    return !!progress.value[id]
  }

  const readCount = computed(() => Object.keys(progress.value).length)

  return { progress, markRead, isRead, readCount }
}