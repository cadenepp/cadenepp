<script setup>

    import { ref, onMounted } from 'vue'

    const imageSrc = ref('/Images/Icons/Back/icons8-back-50-black.png')


    const updateThemeImage = () => {

        const isLightMode = document.documentElement.getAttribute('data-theme') === 'light'

        imageSrc.value = isLightMode ? '/Images/Icons/Back/icons8-back-50-black.png' : '/Images/Icons/Back/icons8-back-50-white.png'

    }


    onMounted(() => {

        updateThemeImage()
        
        const observer = new MutationObserver(updateThemeImage)

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        })

    })

</script>

<template>
    <RouterLink :to="{name: 'home'}" class="">
        <img :src="imageSrc" alt="Back Arrow" class="intro-backbutton transition delay-25 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
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