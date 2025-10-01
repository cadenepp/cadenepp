<script setup>
import BackButton from '../components/BackButton.vue'
import ProgrammingSkills from '../components/ProgrammingSkills.vue';
import OtherSkills from '../components/OtherSkills.vue';
</script>

<template>
    <div class="mt-[25px] ml-[25px]">
        <back-button />
    </div>

    <h1 class="text-6xl md:text-8xl mt-[25px] md:mt-[50px] text-center md:text-start md:ml-[100px]">Skills</h1>

    <h2 class="text-4xl text-center md:text-start md:ml-[115px] mt-[45px] mb-[20px]">Programming</h2>
    <ProgrammingSkills />

    <h2 class="text-4xl text-center md:text-start md:ml-[115px] mt-[45px] mb-[20px]">Other</h2>
    <OtherSkills />
</template>