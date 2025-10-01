

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
            class="my-[18px] lg:my-[25px] w-fit hover:transition hover:delay-50 hover:duration-400 hover:ease-in-out hover:-translate-y-1 hover:scale-115"
        >
        {{ item.tag }}
        </RouterLink>
    
    </div>

    

    

</template>

