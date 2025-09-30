<script setup lang="ts">
    import { SwitchRoot, SwitchThumb } from 'radix-vue'
    import { ref } from 'vue'

    const switchState = ref(false)
</script>

<template>
  <div class="flex gap-2 items-center">
    <SwitchRoot
      id="airplane-mode"
      v-model:checked="switchState"
      class="w-[42px] h-[25px] outline outline-white flex bg-black shadow-sm rounded-full relative cursor-default data-[state=checked]:bg-white"
    >
      <SwitchThumb
        class="block w-[21px] h-[21px] my-auto bg-white focus:bg-black shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px] data-[state=checked]:bg-black "
      />
    </SwitchRoot>
  </div>
</template>