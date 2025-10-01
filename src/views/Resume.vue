<script setup>
import BackButton from '../components/BackButton.vue'
</script>

<template>
    <div class="mt-[25px] ml-[15px] md:ml-[25px]">
        <back-button />
    </div>

    <h1 class="text-6xl md:text-8xl mt-[25px] md:mt-[50px] mb-[10px] text-center md:text-start md:ml-[100px]">Resume</h1>

    <div class=" md:ml-[110px] max-md:flex justify-center">
        <a href="/resume.pdf" download="resume.pdf" class="inline-block hover:transition hover:delay-25 hover:duration-300 hover:ease-in-out hover:-translate-y-1 hover:scale-110" >
            <img src="/Images/Icons/Downlaod/icons8-download-50-white.png" alt="Download Icon" class="">
        </a>
    </div>
    


    <div class="max-md:w-full max-md:flex flex-col md:ml-[150px] mb-[100px] md:mb-[200px] md:w-1/2">

        <div class=" max-md:flex flex-col transition delay-25 hover:transition hover:delay-25 hover:duration-300 hover:ease-in-out hover:-translate-y-1 hover:scale-105">
            <h2 class="text-4xl mt-[30px] text-center md:text-start inline-block">Front</h2>
            <a href="/resume.pdf" class="flex justify-center">
                <img
                src="/Images/resume/resume.png"
                alt="Resume Front"
                class="w-[80%] md:w-full mb-[50px]"
                >                
            </a>
        </div>
        
        <div class=" max-md:flex flex-col transition delay-25 hover:transition hover:delay-25 hover:duration-300 hover:ease-in-out hover:-translate-y-1 hover:scale-105">
            <h2 class="text-4xl mt-[20px] text-center md:text-start inline-block" >Back</h2>
            <a href="/resume.pdf#page=2" class="flex justify-center">
                <img
                    src="/Images/resume/resumeBack.png" 
                    alt="Resume Back"
                    class="w-[80%] md:w-full mb-[50px]"
                >
            </a>
        </div>

        
    </div>
    
   
</template>