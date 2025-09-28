<script setup>
import BackButton from '../components/BackButton.vue'
</script>

<template>
    <div class="mt-[25px] ml-[25px]">
        <back-button />
    </div>

    <h1 class="text-8xl mt-[50px] mb-[10px] ml-[100px]">Resume</h1>

    <div class=" inline-block ml-[110px] hover:transition hover:delay-25 hover:duration-300 hover:ease-in-out hover:-translate-y-1 hover:scale-110">
        <a href="/resume.pdf" download="resume.pdf" class="" >
            <img src="/Images/Icons/Downlaod/icons8-download-50-white.png" alt="Download Icon" class="">
        </a>
    </div>
    


    <div class="ml-[150px] mb-[200px] w-1/2">
        <div class=" transition delay-25 hover:transition hover:delay-25 hover:duration-300 hover:ease-in-out hover:-translate-y-1 hover:scale-105">
            <h2 class="text-4xl mt-[30px]">Front</h2>
            <a href="/resume.pdf">
                <img 
                    src="/Images/resume/resume.png"
                    alt="Resume Front"
                    class="w-full mb-[50px]"
                >
            </a>
        </div>
        
        <div class=" transition delay-25 hover:transition hover:delay-25 hover:duration-300 hover:ease-in-out hover:-translate-y-1 hover:scale-105">
            <h2 class="text-4xl mt-[20px]" >Back</h2>
            <a href="/resume.pdf#page=2">
            <img
                src="/Images/resume/resumeBack.png" 
                alt="Resume Back"
                class="w-full mb-[50px]"
            >
        </a>
        </div>

        
    </div>
    
   
</template>