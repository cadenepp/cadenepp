

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

    <div class="flex flex-col text-6xl" >

        <RouterLink
            v-for="(item) in paths"
            :to="{name: item.name}"
            class="my-[25px] w-fit transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
        {{ item.tag }}
        </RouterLink>
    
    </div>

    

    

</template>

