

<script setup>

import Home from './views/Home.vue'
import RightSide from './components/RightSide.vue'


</script>


<!-- Content App Side (Left) -->
<template>

 
    <RouterView />


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

