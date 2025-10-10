

<script setup>

import SplashScreen from './components/SlideShow.vue';
import RightSide from './components/RightSide.vue';


</script>


<template>

     <SplashScreen />

    <section class="w-full flex flex-row min-h-screen text-[#F2F2F2] font-jost ">

        <!-- Content App Side (Left) -->
        <section class="w-full md:w-1/2">

            <RouterView />

        </section>

        <!-- Fixed Side (Right) -->
        <section class="hidden md:block md:fixed md:w-1/2 md:h-lvh md:right-0">

            <RightSide />
            
        </section>

    </section>

</template>

<style>
    .intro-h1 {
        animation: slideIn 1.2s;
    }
    
    @keyframes slideIn {
        0% {
            opacity: 0;
            transform: translateX(-120px) scale(0.9);       
        }
        100% {
            opacity: 1;
            transform: translateX(0px) scale(1);
        }
    }

</style>

