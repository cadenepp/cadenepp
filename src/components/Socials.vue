

<script setup>

    import { ref, onMounted } from 'vue'

    const hovered = ref(null)

    const mainURL1 = ref('/Images/Icons/Insta/instaLogoBlack.svg')
    const mainURL1Hover = ref('/Images/gifs/insta2.gif')

    const mainURL2 = ref('/Images/Icons/X/icons8-x-Black.svg')
    const mainURL2Hover = ref('/Images/gifs/x.gif')

    const mainURL3 = ref('/Images/Icons/GitHub/icons8-github-Black.svg')
    const mainURL3Hover = ref('/Images/gifs/github2.gif')

    const mainURL4 = ref('/Images/Icons/Music/icons8-apple-music-Black.svg')
    const mainURL4Hover = ref('/Images/gifs/icons8-music.png')

    const mainURL5 = ref('/Images/Icons/LinkedIn/icons8-linkedin-Black.svg')
    const mainURL5Hover = ref('/Images/gifs/linkedIn2.gif')


    const updateThemeImage = () => {
        
        const isLightMode = document.documentElement.getAttribute('data-theme') === 'light'

        mainURL1.value = isLightMode ? '/Images/Icons/Insta/instaLogoBlack.svg' : '/Images/Icons/Insta/instaLogoWhite.png'
        mainURL2.value = isLightMode ? '/Images/Icons/X/icons8-x-Black.svg' : '/Images/Icons/X/icons8-x-White.png'
        mainURL3.value = isLightMode ? '/Images/Icons/GitHub/icons8-github-Black.svg' : '/Images/Icons/GitHub/icons8-github-White.png'
        mainURL4.value = isLightMode ? '/Images/Icons/Music/icons8-apple-music-Black.svg' : '/Images/Icons/Music/icons8-apple-music-White.png'
        mainURL5.value = isLightMode ? '/Images/Icons/LinkedIn/icons8-linkedin-Black.svg' : '/Images/Icons/LinkedIn/icons8-linkedin-White.png'

        mainURL1Hover.value = isLightMode ? '/Images/gifs/insta2.gif' : '/Images/gifs/insta.gif'
        mainURL2Hover.value = isLightMode ? '/Images/gifs/x.gif' : '/Images/gifs/x.gif'
        mainURL3Hover.value = isLightMode ? '/Images/gifs/github2.gif' : '/Images/gifs/github.gif'
        mainURL4Hover.value = isLightMode ? '/Images/gifs/icons8-music.png' : '/Images/gifs/icons8-music.png'
        mainURL5Hover.value = isLightMode ? '/Images/gifs/linkedIn2.gif' : '/Images/gifs/linkedIn.gif'

    }


    onMounted(() => {

        updateThemeImage()
        
        const observer = new MutationObserver(updateThemeImage)

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        })

    })


    const socialObjects = [
        {linkURL: "https://www.instagram.com/cadenepp/", mainURL: mainURL1, hoverURL: mainURL1Hover},
        {linkURL: "https://x.com/eppcaden", mainURL: mainURL2, hoverURL: mainURL2Hover},
        {linkURL: "https://github.com/cadenepp", mainURL: mainURL3, hoverURL: mainURL3Hover},
        {linkURL: "https://music.apple.com/profile/cadenepp", mainURL: mainURL4, hoverURL: mainURL4Hover},
        {linkURL: "https://www.linkedin.com/in/cadenepp/", mainURL: mainURL5, hoverURL: mainURL5Hover}
    ]

</script>


<template>

    <div class="flex flex-row justify-center md:justify-start">
        <a
            v-for="(item, index) in socialObjects" 
            :key="index"
            :href="item.linkURL" 
            target="_blank"
            class="intro bg-contain bg-no-repeat bg-center w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] mx-[12px] transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            :style="{ backgroundImage: hovered === index ? `url(${item.hoverURL.value})` : `url(${item.mainURL.value})` }"
            @mouseenter="hovered = index"
            @mouseleave="hovered = null"
        >
        </a>
    </div>
    
</template>


<style scoped>

.intro {
        animation: fadeIn 0.8s 0.5s backwards;
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