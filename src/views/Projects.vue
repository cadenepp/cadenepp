<script setup>
import BackButton from '../components/BackButton.vue'
import AllProjects from '../components/AllProjects.vue';
</script>


<template>
    <div>
        <div class="mt-[25px] ml-[15px] md:ml-[25px]">
            <back-button />
        </div>

        <h1 class="text-6xl md:text-8xl mt-[25px] md:mt-[50px] text-center md:text-start md:ml-[100px]">Projects</h1>

        <div 
            class="ml-[35px] md:ml-[120px] mt-[28px] md:mt-[70px] flex flex-col justify-center"
        >
            <AllProjects />
        </div>

    </div>
    
</template>