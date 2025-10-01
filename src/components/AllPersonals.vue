

<script setup>

    const sections = [
        {title: "Title, This is a Title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin  consectetur semper diam, non convallis lacus. Morbi accumsan, est ac  porta eleifend, lectus urna luctus massa, a gravida mi libero auctor  nunc. Sed lacinia purus eu dui sagittis, eu porta eros elementum. Ut  iaculis libero vitae dui cursus lobortis. Suspendisse vel.", image: "/Images/Personal/IMG_3728.jpg"},
        {title: "Title, This is a Title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin  consectetur semper diam, non convallis lacus. Morbi accumsan, est ac  porta eleifend, lectus urna luctus massa, a gravida mi libero auctor  nunc. Sed lacinia purus eu dui sagittis, eu porta eros elementum. Ut  iaculis libero vitae dui cursus lobortis. Suspendisse vel.", image: "/Images/Personal/IMG_3729.jpg"},
        {title: "Title, This is a Title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin  consectetur semper diam, non convallis lacus. Morbi accumsan, est ac  porta eleifend, lectus urna luctus massa, a gravida mi libero auctor  nunc. Sed lacinia purus eu dui sagittis, eu porta eros elementum. Ut  iaculis libero vitae dui cursus lobortis. Suspendisse vel.", image: "/Images/Personal/IMG_3730.jpg"},
        {title: "Title, This is a Title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin  consectetur semper diam, non convallis lacus. Morbi accumsan, est ac  porta eleifend, lectus urna luctus massa, a gravida mi libero auctor  nunc. Sed lacinia purus eu dui sagittis, eu porta eros elementum. Ut  iaculis libero vitae dui cursus lobortis. Suspendisse vel.", image: "/Images/Personal/IMG_3731.jpg"},
        {title: "Title, This is a Title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin  consectetur semper diam, non convallis lacus. Morbi accumsan, est ac  porta eleifend, lectus urna luctus massa, a gravida mi libero auctor  nunc. Sed lacinia purus eu dui sagittis, eu porta eros elementum. Ut  iaculis libero vitae dui cursus lobortis. Suspendisse vel.", image: "/Images/Personal/IMG_3732.jpg"}
    ]

</script>


<template>

    <div 
        v-for="(item) in sections"
        class="max-md:w-[90%] max-md:flex flex-col justify-center my-[55px] md:my-[85px] max-w-[500px]"
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