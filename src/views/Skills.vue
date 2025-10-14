<script setup>
import BackButton from '../components/BackButton.vue'
import ProgrammingSkills from '../components/ProgrammingSkills.vue';
import OtherSkills from '../components/OtherSkills.vue';
import Certifications from '../components/Certifications.vue';
</script>

<template>
    <div class="mt-[25px] ml-[25px]">
        <back-button />
    </div>

    <h1 class="intro-h1 text-6xl md:text-8xl mt-[25px] md:mt-[50px] text-center md:text-start md:ml-[100px]">Skills</h1>

    <h2 class="intro-h2-1 text-4xl text-center md:text-start md:ml-[115px] mt-[45px] mb-[20px]">Programming</h2>
    <ProgrammingSkills />

    <h2 class="intro-h2-2 text-4xl text-center md:text-start md:ml-[115px] mt-[45px] mb-[20px]">Other</h2>
    <OtherSkills />

    <h2 class="intro-h2-3 text-4xl text-center md:text-start md:ml-[115px] mt-[45px] mb-[20px]">Certifications</h2>
    <Certifications />
</template>



<style scoped>

    .intro-h2-1 {
        animation: fadeIn 0.8s 0.2s backwards;

    }

    .intro-h2-2 {
        animation: fadeIn 0.8s 0.2s backwards;

    }

    .intro-h2-3 {
        animation: fadeIn 0.8s 0.2s backwards;

    }

    @keyframes fadeIn {
        0%{
            opacity: 0;
            transform: translateX(-120px) scale(0.9);
        }

        100%{
            opacity: 1;
            transform: translateX(0px) scale(1);
        }
    }

</style>