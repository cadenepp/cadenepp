<script setup>
import BackButton from '../components/BackButton.vue'
import AllPersonals from '../components/AllPersonals.vue';
</script>

<template>

    <div class="mt-[25px] ml-[15px] md:ml-[25px]">
        <back-button />
    </div>

    <h1 class="text-6xl md:text-8xl mt-[25px] md:mt-[50px] text-center md:text-start md:ml-[100px]">Personal</h1>

    <div class="max-md:flex flex-col items-center md:ml-[130px]">
        <AllPersonals />
    </div>

</template>