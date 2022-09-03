<template>
    <div class=" flex flex-col sx:w-11/12 w-10/12 mt-36  text-left m-auto">
    <div class=" text-5xl  font-bold tracking-wide text-header">Look-Up</div>
    <div class=" sx:flex flex-col grid grid-cols-2 gap-2 mt-5">
        <div class="">
            <div class=" text-white text-sm leading-7 tracking-wide font-light">My work-shelf, A cross-section of things i have built, Web Apps and Others</div>
            <div class=" mt-4">
            <router-link class=" bg-work px-6 py-3 text-white text-xs  font-normal " to="/projects">Work Shelf</router-link>
            </div>
        </div>
         <div class="sx:mt-6 w-full flex flex-col justify-end items-end">
            <div class=" text-white text-sm leading-7 tracking-wide font-light">Read my blog, you may find something useful there</div>
            <div class=" mt-4 ">
            <router-link to="/blog" class=" bg-work px-6 py-3 text-white text-xs  font-normal " >Blog</router-link>
            </div>
         </div>
        </div>
        
    </div>
</template> 