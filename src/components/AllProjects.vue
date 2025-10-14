

<script setup>

    import { onMounted, ref } from 'vue'

    const gitHubURL = ref('/Images/Icons/GitHub/icons8-github-Black.svg')
    const urlURL = ref('/Images/Icons/URL/icons8-url-50-black.png')

    const updateThemeImage = () => {

        const isLightMode = document.documentElement.getAttribute('data-theme') === 'light'

        gitHubURL.value = isLightMode ? '/Images/Icons/GitHub/icons8-github-Black.svg' : '/Images/Icons/GitHub/icons8-github-White.png'
        urlURL.value = isLightMode ? '/Images/Icons/URL/icons8-url-50-black.png' : '/Images/Icons/URL/icons8-url-50-white.png'

    }


    onMounted(() => {

        updateThemeImage()
        
        const observer = new MutationObserver(updateThemeImage)

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        })

    })


    const projectDetails = [
        {title: "GMA Medical", desc: "This project was developed during my internship at GMA Medical. The goal was to design and build a modern, responsive website to showcase GMA Medical’s products, provide search and browsing capabilities for customers, and give administrators the ability to manage catalog content.", id: 1},
        {title: "IHCC CSD Club Website", desc: "The Computer Software Development Club Website is a collaborative project designed to showcase the club’s mission, events, and member projects through a modern, responsive interface. Built with Next.js (TypeScript) and Tailwind CSS, and hosted on Vercel, the site emphasizes clean design, usability, and efficient performance while reflecting the collaborative spirit and technical focus of the club.", id: 2},
        {title: "Underground Barbell", desc: "Underground Barbell is a front-end web project built with Next.js and Tailwind CSS, featuring a clean, single-page layout focused on modern design and intuitive UI/UX. Inspired by a gym that lacked an online presence, this project was created collaboratively with a fellow developer to provide the gym with a professional, user-friendly website that reflects its brand and community. The design emphasizes bold visuals, smooth navigation, and responsive performance across all devices.", id: 3}
    ]

    const project1 = [
        {url: "https://github.com/GMAMedical/GMAMedicalWebsite", image: gitHubURL},
        {url: "https://www.gmamedical.com", image: urlURL}
    ]

    const project2 = [
        {url: "https://github.com/sorrymint/ihcc-csd", image: gitHubURL},
        {url: "https://ihcc-csd.vercel.app/", image: urlURL}
    ]

    const project3 = [
        {url: "https://github.com/Underground-Barbell", image: gitHubURL}
    ]

    const whichArray = (id) => {
        switch (id) {
            case 1:
                return project1
            case 2:
                return project2
            case 3:
                return project3
            default:
                return project1
        }
    }

    onMounted(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('showOnScroll')
                } else {
                    entry.target.classList.remove('showOnScroll')
                }
            })
        })

        const hiddenElements = document.querySelectorAll('.hiddenOnScroll')

        hiddenElements.forEach((el) => observer.observe(el))
    })


</script>



<template>

    <div v-for="(item) in projectDetails"
        class="intro-projects hiddenOnScroll min-h-[400px] max-w-[90%] md:max-w-[450px] border-1 border-white theme-light:border-black my-[25px] flex flex-col justify-between"
    >
        <div>
            <h2 class="text-4xl m-[15px]" > {{ item.title }}</h2>
            <p class="m-[15px]"> {{ item.desc }}</p>
        </div>
        
        <div class="flex justify-items-start m-[15px]">
            <a v-for="(item) in whichArray(item.id)" :href="item.url" target="_blank">
                <img :src="item.image.value" alt="Icon" />
            </a>
        </div>
    </div>

</template>



<style scoped>

    .hiddenOnScroll {
        opacity: 0;
        transform: translateX(-120px) scale(0.9);
        transition: all 0.8s .5s ease;
    }

    .showOnScroll {
        opacity: 1;
        transform: translateX(0) scale(1);
    }

</style>