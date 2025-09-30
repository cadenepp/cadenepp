<script setup>
import ToggleTheme from './ToggleTheme.vue';
</script>

<!-- Fixed Right Side -->
<template>

    <div class="h-full flex flex-col justify-between">

        <div id="light-dark-toggle-container" class="flex justify-end mt-[25px] mr-[45px]">
          <ToggleTheme />
        </div>

        <div id="image-container" class="top-1/2 flex justify-center" >
          <img 
            src="/Images/maskBlack.png" 
            alt="Mask Image"
            class=" rounded-full w-1/2 bg-blue"
          >
        </div>

        <div id="copyright-container" class=" text-end mb-[5px] mr-[15px]">
          <p>© Caden Epp™</p>
        </div>

    </div>

</template>