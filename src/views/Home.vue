<script setup>
import { computed } from 'vue'
import Nav from '../components/Nav.vue'
import Socials from '../components/Socials.vue'
import { introDone, shouldAnimateHome, markHomeAnimated } from '../composables/intro'

// Entrance animations only play on the first home visit in this tab,
// and they wait for the splash intro to finish before starting.
const firstVisit = shouldAnimateHome()
if (firstVisit) markHomeAnimated()

const waitingForIntro = computed(() => firstVisit && !introDone.value)
const animating = computed(() => firstVisit && introDone.value)
</script>

<template>

    <div
        id="home-content"
        class="flex flex-col justify-center overflow-hidden lg:ml-[100px]"
        :class="{ 'home-waiting': waitingForIntro, 'home-animate': animating }"
    >

        <h1 class="intro-name text-7xl text-center mt-[50px] md:text-9xl lg:mt-[140px] lg:ml-[50px]" >Caden Epp</h1>

        <div class="md:ml-[35px] lg:ml-[100px] mt-[25px]" >
            <socials />
        </div>

        <div class="md:ml-[55px] lg:ml-[120px] mt-[25px]" >
            <Nav />
        </div>

    </div>


</template>


<style scoped>

    /* Hidden while the splash intro is still playing */
    .home-waiting .intro-name,
    .home-waiting :deep(.intro-social),
    .home-waiting :deep(.intro-nav) {
        opacity: 0;
    }

    /* animation: @keyframes | duration | easing-function | delay | fill-mode */
    .home-animate .intro-name {
        animation: slideIn 0.8s;
    }

    .home-animate :deep(.intro-social) {
        animation: slideIn 0.8s 0.5s backwards;
    }

    .home-animate :deep(.intro-nav) {
        animation: slideIn 0.8s ease-out 1s backwards;
    }

    @keyframes slideIn {
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
