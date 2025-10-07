

<script setup>

    import { onMounted } from 'vue'

    const skills = [
        {name: "Microsoft 365"},
        {name: "Public Speaking"},
        {name: "Adobe"},
        {name: "Podcasting"},

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

    <ul class="intro-o-skills list-disc ml-[32%] md:ml-[150px] mb-[100px]">
        <li
            v-for="(item, index) in skills"
            :key="index"
            class="hiddenOnScroll"
        >
            <div class="ml-[25px] flex flex-row items-center my-[10px]">
                <p class="text-2xl mr-[5px]">{{ item.name }}</p>
            </div>
        </li>
    </ul>


</template>



<style scoped>

    .hiddenOnScroll {
        opacity: 0;
        transform: translateX(-120px) scale(0.9);
        transition: all 0.8s 0.3s ease;
    }

    .showOnScroll {
        opacity: 1;
        transform: translateX(0) scale(1);
    }

</style>