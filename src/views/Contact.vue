<script setup>
    import BackButton from '../components/BackButton.vue'

    import { ref, onMounted } from 'vue'

    const imageSrc = ref('/Images/Icons/Email/icons8-email-50-black.png')


    const updateThemeImage = () => {

        const isLightMode = document.documentElement.getAttribute('data-theme') === 'light'

        imageSrc.value = isLightMode ? '/Images/Icons/Email/icons8-email-50-black.png' : '/Images/Icons/Email/icons8-email-50-white.png'

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
    <div class="mt-[25px] ml-[25px]">
        <back-button />
    </div>

    <h1 class="intro-h1 text-6xl md:text-8xl mt-[25px] md:mt-[50px] mb-[20px] text-center md:text-start md:ml-[100px]">Contact</h1>

    <div class="intro-mailto max-md:flex justify-center">
        <a href="mailto:dev@cadenepp.com" class="inline-block md:ml-[140px] hover:transition hover:delay-25 hover:duration-300 hover:ease-in-out hover:-translate-y-1 hover:scale-110">
            <img :src="imageSrc" alt="Email Me Icon">
        </a>
    </div>

    <h2 class="intro-h2 text-4xl text-center md:text-start max-md:mx-[8px] md:ml-[110px] mt-[20px]">for all inquires please email me</h2>
    
</template>



<style scoped>

    .intro-mailto {
        animation: fadeIn 0.8s 0.5s backwards;
    }

    .intro-h2 {
        animation: fadeIn 0.8s 1s backwards;
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