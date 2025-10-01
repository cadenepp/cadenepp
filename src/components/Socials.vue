

<script setup>

    import { ref } from 'vue'

    const hovered = ref(null)

    const socialObjects = [
        {linkURL: "https://www.instagram.com/cadenepp/", mainURL: "/Images/Icons/Insta/instaLogoWhite.png", hoverURL: "/Images/gifs/insta.gif"},
        {linkURL: "https://x.com/eppcaden", mainURL: "/Images/Icons/X/icons8-x-White.png", hoverURL: "Images/gifs/x.gif"},
        {linkURL: "https://github.com/cadenepp", mainURL: "/Images/Icons/GitHub/icons8-github-White.png", hoverURL: "/Images/gifs/github.gif"},
        {linkURL: "https://music.apple.com/profile/cadenepp", mainURL: "/Images/Icons/Music/icons8-apple-music-White.png", hoverURL: "/Images/gifs/icons8-music.png"},
        {linkURL: "https://www.linkedin.com/in/cadenepp/", mainURL: "/Images/Icons/LinkedIn/icons8-linkedin-White.png", hoverURL: "/Images/gifs/linkedIn.gif"}
    ]

</script>


<template>

    <div class="flex flex-row justify-center md:justify-start">
        <a 
            v-for="(item, index) in socialObjects" 
            :key="index"
            :href="item.linkURL" 
            target="_blank"
            class="bg-contain bg-no-repeat bg-center w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] mx-[12px] hover:transition hover:delay-50 hover:duration-300 hover:ease-in-out hover:-translate-y-1 hover:scale-110"
            :style="{ backgroundImage: hovered === index ? `url(${item.hoverURL})` : `url(${item.mainURL})` }"
            @mouseenter="hovered = index"
            @mouseleave="hovered = null"
        >
        </a>
    </div>
    
</template>