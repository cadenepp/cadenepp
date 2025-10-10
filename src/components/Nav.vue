

<script setup>

    const paths = [
        {name: "projects", tag: "Projects"},
        {name: "skills", tag: "Skills"},
        {name: "resume", tag: "Resume"},
        {name: "personal", tag: "Personal"},
        {name: "contact", tag: "Contact"}
    ]

</script>



<template>

    <div class="flex flex-col items-center md:items-start text-5xl lg:text-6xl" >

        <RouterLink
            v-for="(item) in paths"
            :to="{name: item.name}"
            class="intro my-[18px] lg:my-[25px] w-fit transition delay-50 duration-400 ease-in-out hover:-translate-y-1 hover:scale-115"
        >
        {{ item.tag }}
        </RouterLink>
    
    </div>

    

    

</template>


<style scoped>

    /* animation: @keyframes | duration | easing-function | delay | fill-mode */
    .intro {
        animation: fadeIn 0.8s ease-out 1s backwards;
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

