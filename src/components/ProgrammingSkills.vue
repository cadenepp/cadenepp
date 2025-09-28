
<script setup>

    const skills = [
        {name: "HTML", image: "/Images/Icons/Skills/icons8-html5.svg"},
        {name: "CSS", image: "/Images/Icons/Skills/icons8-css3.svg"},
        {name: "JavaScript", image: "/Images/Icons/Skills/icons8-javascript.svg"},
        {name: "TypeScript", image: "/Images/Icons/Skills/icons8-typescript.svg"},
        {name: "Next.js", image: "/Images/Icons/Skills/icons8-next-64-white.png"},
        {name: "React.js", image: "/Images/Icons/Skills/icons8-react.svg"},
        {name: "Node.js", image: "/Images/Icons/Skills/icons8-node-js.svg"},
        {name: "C#", image: "/Images/Icons/Skills/icons8-c.svg"},
        {name: "Java", image: "/Images/Icons/Skills/icons8-java.svg"},
        {name: "Spring Boot", image: "/Images/Icons/Skills/icons8-spring-boot.svg"},
        {name: "Kafka", image: "/Images/Icons/Skills/icons8-apache-kafka.svg"},
        {name: "PHP", image: "/Images/Icons/Skills/icons8-php.svg"},
        {name: "git", image: "/Images/Icons/Skills/icons8-git.svg"},
        {name: "Python", image: "/Images/Icons/Skills/icons8-python.svg"},
        {name: "Docker", image: "/Images/Icons/Skills/icons8-docker.svg"},
    ]

</script>


<template>

    <ul class="list-disc ml-[150px]">
        <li
            v-for="(item, index) in skills"
            :key="index"
            class=""
        >
            <div class="ml-[25px] flex flex-row items-center my-[10px]">
                <p class="text-2xl mr-[5px]">{{ item.name }}</p>
                <img 
                    :src=" item.image"
                    :alt="item.name"
                    class="w-[50px]"
                >
            </div>
            
        </li>
    </ul>


</template>