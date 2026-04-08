import { ref } from 'vue'

const STORAGE_KEY = 'kronika_progress'

export function useProgress() {
  const progress = ref(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {})

  function markRead(id) {
    progress.value[id] = true
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress.value))
  }

  function isRead(id) {
    return !!progress.value[id]
  }

  function getReadCount() {
    return Object.keys(progress.value).length
  }

  return { progress, markRead, isRead, getReadCount }
}