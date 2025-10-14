<script setup lang="ts">
    import { SwitchRoot, SwitchThumb } from 'radix-vue'
    import { ref } from 'vue'

    const switchState = ref(false)

    const toggleTheme = () => {

      if (switchState.value == false) {
        document.documentElement.setAttribute('data-theme', 'light')
      } else {
        document.documentElement.removeAttribute('data-theme')
      }
        
    }



</script>

<template>
  <div class="flex gap-2 items-center">
    <SwitchRoot
      @click="toggleTheme"
      id="theme-mode"
      v-model:checked="switchState"
      class="w-[42px] h-[25px] outline outline-white flex bg-black shadow-sm rounded-full relative cursor-default data-[state=checked]:bg-black data-[state=unchecked]:bg-white"
    >
      <SwitchThumb
        class="block w-[21px] h-[21px] my-auto bg-white focus:bg-black shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px] data-[state=checked]:bg-white data-[state=unchecked]:bg-black"
      />
    </SwitchRoot>
  </div>
</template>