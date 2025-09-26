

<script setup>
</script>



<template>

    <div class="flex flex-col text-6xl" >
        <RouterLink :to="{name: 'projects'}" class="my-[25px] w-fit" >Projects</RouterLink>
        <RouterLink :to="{name: 'skills'}" class="my-[25px] w-fit">Skills</RouterLink>
        <RouterLink :to="{name: 'resume'}" class="my-[25px] w-fit">Resume</RouterLink>
        <RouterLink :to="{name: 'personal'}" class="my-[25px] w-fit">Personal</RouterLink>
        <RouterLink :to="{name: 'contact'}" class="my-[25px] w-fit">Contact</RouterLink>
    </div>

    

</template>

