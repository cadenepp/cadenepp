

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
        {title: "Project 1", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin  consectetur semper diam, non convallis lacus. Morbi accumsan, est ac  porta eleifend, lectus urna luctus massa, a gravida mi libero auctor  nunc. Sed lacinia purus eu dui sagittis, eu porta eros elementum. Ut  iaculis libero vitae dui cursus lobortis. Suspendisse vel.", id: 1},
        {title: "Unit 2 Project 1", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin  consectetur semper diam, non convallis lacus. Morbi accumsan, est ac  porta eleifend, lectus urna luctus massa, a gravida mi libero auctor  nunc. Sed lacinia purus eu dui sagittis, eu porta eros elementum. Ut  iaculis libero vitae dui cursus lobortis. Suspendisse vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin  consectetur semper diam, non convallis lacus. Morbi accumsan, est ac  porta eleifend, lectus urna luctus massa, a gravida mi libero auctor  nunc. Sed lacinia purus eu dui sagittis, eu porta eros elementum. Ut  iaculis libero vitae dui cursus lobortis. Suspendisse vel. ", id: 2},
        {title: "Unit 2 Project 4 Exercise 3", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin  consectetur semper diam, non convallis lacus. Morbi accumsan.", id: 3}
    ]

    const project1 = [
        {url: "https://github.com/", image: gitHubURL},
        {url: "https://cadenepp.com", image: urlURL}
    ]

    const project2 = [
        {url: "https://github.com/", image: gitHubURL},
    ]

    const project3 = [
        {url: "https://cadenepp.com", image: urlURL}
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