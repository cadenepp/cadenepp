
<script setup>

    import { onMounted } from 'vue'

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
        {name: "COBOL", image: "/Images/Icons/Skills/cobol.png"},
        {name: ".NET", image: "/Images/Icons/Skills/icons8-.net-framework.svg"},
        {name: "Flask", image: "/Images/Icons/Skills/icons8-flask-64.png"},
        {name: "Android Studios", image: "/Images/Icons/Skills/icons8-android-studio.svg"},
        {name: "Kotlin", image: "/Images/Icons/Skills/icons8-kotlin.svg"},
        {name: "MySQL", image: "/Images/Icons/Skills/icons8-my-sql.svg"},
        {name: "SQL", image: "/Images/Icons/Skills/icons8-sql-48.png"},
        {name: "MongoDB", image: "/Images/Icons/Skills/icons8-mongodb.svg"},
        {name: "AWS", image: "/Images/Icons/Skills/icons8-aws.svg"},

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

    <ul class="intro-p-skills list-disc ml-[32%] flex flex-col md:ml-[150px]">
        <li
            v-for="(item, index) in skills"
            :key="index"
            class="hiddenOnScroll"
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