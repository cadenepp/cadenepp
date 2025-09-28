<script setup>
import BackButton from '../components/BackButton.vue'
import AllProjects from '../components/AllProjects.vue';
</script>


<template>
    <div class="mt-[25px] ml-[25px]">
        <back-button />
    </div>

    <h1 class="text-8xl mt-[50px] ml-[100px]">Projects</h1>

    <div 
        class="ml-[120px] mt-[70px]"
    >
        <AllProjects />
    </div>
</template>