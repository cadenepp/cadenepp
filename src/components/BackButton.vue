

<template>
    <RouterLink :to="{name: 'home'}" class="">
        <img src="/Images/Icons/Back/icons8-back-50-white.png" alt="Back Arrow" class="intro-backbutton transition delay-25 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
    </RouterLink>
</template>


<style scoped>

    .intro-backbutton {
        animation: slideIn ease-out 0.8s;

    }

    @keyframes slideIn {

        0%{
            opacity: 0;
            transform: translateX(150px) scale(0.9) rotate(180deg);
        }
        100%{
            opacity: 1;
            transform: translateX(0px) scale(1);
        }   
        
    }

</style>