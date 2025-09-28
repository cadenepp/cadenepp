

<script setup>

const skills = [
    {name: "Microsoft 365"},
    {name: "Public Speaking"},
    {name: "Adobe"},
    {name: "Podcasting"},

]

</script>



<template>

    <ul class="list-disc ml-[150px] mb-[100px]">
        <li
            v-for="(item, index) in skills"
            :key="index"
            class=""
        >
            <div class="ml-[25px] flex flex-row items-center my-[10px]">
                <p class="text-2xl mr-[5px]">{{ item.name }}</p>
            </div>
        </li>
    </ul>


</template>