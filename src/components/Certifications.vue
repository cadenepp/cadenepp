

<script setup>

    import { ref } from 'vue'
    import { useScrollReveal } from '../composables/scrollReveal'

    const cert = [
        {name: "AWS Certified Cloud Practitioner", date: "April 2025"},
        {name: "Azure Fundaments - MS Certified", date: "August 2026"},
    ]

    const revealEls = ref([])
    useScrollReveal(revealEls)

</script>



<template>

    <ul class="intro-o-skills list-disc ml-[32%] md:ml-[150px] mb-[100px]">
        <li
            v-for="(item, index) in cert"
            :key="index"
            ref="revealEls"
            class="hiddenOnScroll"
        >
            <div class="ml-[25px] flex flex-row items-center my-[10px]">
                <p class="text-2xl mr-[5px]">{{ item.name }}</p>
                <p>- {{ item.date }}</p>
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