<script setup>
import { ref, onMounted } from 'vue'
import ToggleTheme from './ToggleTheme.vue'

const imageSrc = ref('/Images/masks/maskWhite.png')

const updateThemeImage = () => {
  const isLightMode = document.documentElement.getAttribute('data-theme') === 'light'
  imageSrc.value = isLightMode ? '/Images/masks/maskWhite.png' : '/Images/masks/maskBlack.png'
}

onMounted(() => {

  updateThemeImage()
  
  const observer = new MutationObserver(updateThemeImage)

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  })

})
</script>

<!-- Fixed Right Side -->
<template>

    <div class="h-full flex flex-col justify-between">

        <div id="light-dark-toggle-container" class="flex justify-end mt-[25px] mr-[45px]">
          <ToggleTheme />
        </div>

        <div id="image-container" class="top-1/2 flex justify-center" >
          <img 
            :src="imageSrc"
            alt="Mask Image"
            class=" rounded-full w-1/2 bg-blue"
          >
        </div>

        <div id="copyright-container" class=" text-end mb-[5px] mr-[15px]">
          <p>© Caden Epp™</p>
        </div>

    </div>

</template>