import { ref } from 'vue'

// Shared state for the once-per-tab intro sequence.
// sessionStorage is scoped to the tab, so a new tab starts fresh.

// true once the splash screen has finished (or already played this tab)
export const introDone = ref(!!sessionStorage.getItem('splashPlayed'))

export function markIntroDone() {
  introDone.value = true
}

// Home page entrance animations should only run on the first home visit per tab
export function shouldAnimateHome() {
  return !sessionStorage.getItem('homeAnimated')
}

export function markHomeAnimated() {
  sessionStorage.setItem('homeAnimated', 'true')
}
