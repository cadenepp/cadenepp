<script setup>
import BackButton from '../components/BackButton.vue'
import AllPersonals from '../components/AllPersonals.vue';
</script>

<template>

    <div class="mt-[25px] ml-[25px]">
        <back-button />
    </div>

    <h1 class="text-8xl mt-[50px] ml-[100px]">Personal</h1>

    <div class="ml-[130px]">
        <AllPersonals />
    </div>

</template>