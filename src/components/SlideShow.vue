<script setup>
  import { ref, onMounted } from 'vue'

  const slides = ["Hello", "I build", "I am"]
  const currentText = ref(slides[0])
  const currentDots = ref("")
  let index = 0
  const visible = ref(true)

  if (sessionStorage.getItem('splashPlayed')) {
    visible.value = false
  }

  onMounted(() => {
    if (!visible.value) return

    sessionStorage.setItem('splashPlayed', 'true')

    const showDots = () => {
      currentDots.value = ""
      let dotCount = 0

      const dotInterval = setInterval(() => {
        dotCount++
        currentDots.value = ".".repeat(dotCount)
        if (dotCount === 3) {
          clearInterval(dotInterval)
        }
      }, 300)
    }

    showDots()

    const slideInterval = setInterval(() => {
      index++
      if (index >= slides.length) {
        clearInterval(slideInterval)
        setTimeout(() => {
          visible.value = false
        }, 800)
        return
      }
      currentText.value = slides[index]
      showDots()
    }, 1200)

  })

</script>

<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-[#121212] text-[#F2F2F2]"
    >
      <h1 class="text-6xl md:text-8xl font-bold">
        {{ currentText }}<span class="dots">{{ currentDots }}</span>
      </h1>
    </div>
  </transition>
</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.dots {
  display: inline-block;
  width: 2ch;
  animation: fadeDots 0.3s ease-in-out;
}

@keyframes fadeDots {
  0% { 
    opacity: 0; transform: translateY(-4px); 
  }
  100% { 
    opacity: 1; transform: translateY(0); 
  }
}

</style>
