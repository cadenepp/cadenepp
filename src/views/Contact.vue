<script setup>
import BackButton from '../components/BackButton.vue'
</script>

<template>
    <div class="mt-[25px] ml-[25px]">
        <back-button />
    </div>

    <h1 class="text-6xl md:text-8xl mt-[25px] md:mt-[50px] mb-[20px] text-center md:text-start md:ml-[100px]">Contact</h1>

    <div class="max-md:flex justify-center">
        <a href="mailto:dev@cadenepp.com" class="inline-block md:ml-[140px] hover:transition hover:delay-25 hover:duration-300 hover:ease-in-out hover:-translate-y-1 hover:scale-110">
            <img src="/Images/Icons/Email/icons8-email-50-white.png" alt="Email Me Icon">
        </a>
    </div>

    <h2 class="text-4xl text-center md:text-start max-md:mx-[8px] md:ml-[110px] mt-[20px]">for all inquires please email me</h2>
    
</template>