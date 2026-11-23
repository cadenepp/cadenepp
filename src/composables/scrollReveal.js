import { onMounted, onBeforeUnmount } from 'vue'

// Reveals elements as they scroll into view, but only on the way down.
// - Entering the viewport: shown (animates in).
// - Leaving through the top: stays shown, so scrolling back up doesn't replay it.
// - Below the viewport (you scrolled back up past it): reset, so it animates in
//   again the next time you scroll down to it.
//
// `elementsRef` is a template ref holding an element or an array of elements
// (e.g. a ref used inside v-for).
export function useScrollReveal(elementsRef) {
  let observer

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          entry.target.classList.add('showOnScroll')
        } else {
          entry.target.classList.remove('showOnScroll')
        }
      })
    })

    const els = [].concat(elementsRef.value ?? [])
    els.forEach((el) => el && observer.observe(el))
  })

  onBeforeUnmount(() => observer?.disconnect())
}
