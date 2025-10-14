

<script setup>

    import { onMounted } from 'vue'

    const sections = [
        {title: "Me", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin  consectetur semper diam, non convallis lacus. Morbi accumsan, est ac  porta eleifend, lectus urna luctus massa, a gravida mi libero auctor  nunc. Sed lacinia purus eu dui sagittis, eu porta eros elementum. Ut  iaculis libero vitae dui cursus lobortis. Suspendisse vel.", image: "/Images/Personal/IMG_3728.jpg"},
        {title: "My Goal", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin  consectetur semper diam, non convallis lacus. Morbi accumsan, est ac  porta eleifend, lectus urna luctus massa, a gravida mi libero auctor  nunc. Sed lacinia purus eu dui sagittis, eu porta eros elementum. Ut  iaculis libero vitae dui cursus lobortis. Suspendisse vel.", image: "/Images/Personal/IMG_3730.jpg"},
        {title: "My Life", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin  consectetur semper diam, non convallis lacus. Morbi accumsan, est ac  porta eleifend, lectus urna luctus massa, a gravida mi libero auctor  nunc. Sed lacinia purus eu dui sagittis, eu porta eros elementum. Ut  iaculis libero vitae dui cursus lobortis. Suspendisse vel.", image: "/Images/Personal/IMG_3729.jpg"},
        {title: "Other Interest", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin  consectetur semper diam, non convallis lacus. Morbi accumsan, est ac  porta eleifend, lectus urna luctus massa, a gravida mi libero auctor  nunc. Sed lacinia purus eu dui sagittis, eu porta eros elementum. Ut  iaculis libero vitae dui cursus lobortis. Suspendisse vel.", image: "/Images/Personal/IMG_3731.jpg"},
        {title: "Hobbies", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin  consectetur semper diam, non convallis lacus. Morbi accumsan, est ac  porta eleifend, lectus urna luctus massa, a gravida mi libero auctor  nunc. Sed lacinia purus eu dui sagittis, eu porta eros elementum. Ut  iaculis libero vitae dui cursus lobortis. Suspendisse vel.", image: "/Images/Personal/IMG_3732.jpg"}
    ]

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

    <div 
        v-for="(item) in sections"
        class="intro-personal hiddenOnScroll max-md:w-[90%] max-md:flex flex-col justify-center my-[55px] md:my-[85px] max-w-[500px]"
    >
        <h2 class="text-5xl my-[15px]">
            {{ item.title }}
        </h2>
        <p class="my-[15px]">
            {{ item.desc }}
        </p>
        <img :src="item.image" alt="Image">
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