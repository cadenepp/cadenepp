<script setup>
import Nav from '../components/Nav.vue'
import Socials from '../components/Socials.vue'
</script>

<template>

    <div id="home-content" class="flex flex-col justify-center overflow-hidden lg:ml-[100px]" >

        <h1 class="intro text-7xl text-center mt-[100px] md:text-9xl lg:mt-[140px] lg:ml-[50px]" >Caden Epp</h1>

        <div class="md:ml-[35px] lg:ml-[100px] mt-[25px]" >
            <socials />
        </div>

        <div class="md:ml-[55px] lg:ml-[120px] mt-[25px]" >
            <Nav />
        </div>





    </div>


</template>


<style scoped>

    .intro {
        animation: slideIn 0.8s;
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