<template>
    <div class="flex main-container justify-between items-center py-14">
        <div class="w-1/2">
            <img src="../assets/images/about.jpg" alt="">
        </div>

        <div class="w-1/2 space-y-6 ">
            <h1>ABOUT OUR COMPANY </h1>
            <p class="text-3xl ">We Are Ready For Solar Energy,
                <span class="font-bold">All We Need Is To Use It Well!.</span>
            </p>
            <p class="leading-snug ">Seven world think timed while her. Spoil large oh he rooms on since an. Am up
                unwilling eagerness
                perceived incommode. Perceived end knowledge certainly day sweetness why cordially. Ask quick six seven
                offer see among. Handsome met debating sir dwelling age material.

                Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune day out married
                parties. Happiness remainder joy but earnestly for off. Took sold add play may none him few. If as
                increasing contrasted entreaties be.</p>
            <button class="px-4 py-2 bg-sky-700 font-bold text-white">Read More</button>
        </div>
    </div>

    <div class="bg-zinc-100 py-16">
        <div class="main-container ">
            <!-- title -->
            <div class="text-center space-y-4 mb-12">
                <h1 class="   title-blue">WHAT WE DO </h1>
                <h3 class="  title-lg">Our Services </h3>
                <p class="   title-text ">While mirth large of on front. Ye he greater related adapted
                    proceed
                    entered an. Through it examine
                    express promise no. Past add size game cold girl off how old

                </p>
            </div>
            <!-- cards -->
            <div class="flex justify-between flex-wrap mb-10 ">
                <Card v-for="( service, index) in Services" :key="index" :index="index" :service="service"
                    data-aos="fade-up" data-aos-duration="500" :data-aos-delay=timing(index)>
                </Card>
            </div>

            <!-- why us -->
            <div class="flex justify-around items-center">
                <div class="w-5/12">
                    <img src="../assets/images/panelinroof.png" alt="" height="300" class="w-full object-cover">
                </div>
                <div class="w-5/12 text-center">
                    <h1 class="font-semibold  text-3xl text-sky-600 mb-6">WHY CHOOSE US </h1>
                    <p class="text-lg  mb-6">
                        A Leading Supplier Of Solar Materials For Manufacturers, And Contractors.
                    </p>
                    <ul class=" flex flex-wrap">
                        <li class="flex  text-lg font-semibold  mb-6  gap-2 w-1/2 items-center">
                            <GalochkaIcon> </GalochkaIcon>
                            <p>Experienced</p>
                        </li>
                        <li class="flex  text-lg font-semibold  mb-6 gap-2 w-1/2  items-center">
                            <GalochkaIcon> </GalochkaIcon>
                            <p>Reliable</p>
                        </li>
                        <li class="flex text-lg font-semibold   mb-6  gap-2 w-1/2 items-center">
                            <GalochkaIcon> </GalochkaIcon>
                            <p>Sustainable</p>
                        </li>
                        <li class="flex  text-lg font-semibold  mb-6  gap-2 w-1/2 items-center">
                            <GalochkaIcon> </GalochkaIcon>
                            <p>Affordable</p>
                        </li>
                        <li class="flex  text-lg font-semibold mb-6   gap-2 w-1/2 items-center">
                            <GalochkaIcon> </GalochkaIcon>
                            <p>Trustworthy</p>
                        </li>
                        <li class="flex text-lg font-semibold  mb-6  gap-2 w-1/2  items-center">
                            <GalochkaIcon> </GalochkaIcon>
                            <p>Customizable</p>
                        </li>
                    </ul>

                    <div class="border-t-1 py-4 flex gap-10">
                        <div>
                            <p class="text-5xl font-extrabold text-left">14+</p>
                            <div class="font-semibold">Years Of Experiance </div>
                        </div>

                        <div>
                            <p class="text-5xl font-extrabold  text-left">98+</p>
                            <div class="font-semibold">Professional Agents </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </div>
</template>

<script setup>
import Card from './UI/Card.vue'
import GalochkaIcon from './icons/GalochkaIcon.vue'
const Services = [

    {
        title: 'solar instalation',
        image: 'https://demolisseursnormands.fr/landing/assets/img/services-1.jpg',
        text: 'Guest tiled he quick by so these trees am. It announcing alteration at surrounded',
        link: '#'
    },
    {
        title: 'solar instalation',
        image: 'https://demolisseursnormands.fr/landing/assets/img/services-2.jpg',
        text: 'Guest tiled he quick by so these trees am. It announcing alteration at surrounded',
        link: '#'
    },
    {
        title: 'solar instalation',
        image: 'https://demolisseursnormands.fr/landing/assets/img/services-3.jpg',
        text: 'Guest tiled he quick by so these trees am. It announcing alteration at surrounded',
        link: '#'
    },
    {
        title: 'solar instalation',
        image: 'https://demolisseursnormands.fr/landing/assets/img/services-4.jpg',
        text: 'Guest tiled he quick by so these trees am. It announcing alteration at surrounded',
        link: '#'
    },

    {
        title: 'solar instalation',
        image: 'https://demolisseursnormands.fr/landing/assets/img/services-5.jpg',
        text: 'Guest tiled he quick by so these trees am. It announcing alteration at surrounded',
        link: '#'
    },

    {
        title: 'solar instalation',
        image: 'https://demolisseursnormands.fr/landing/assets/img/services-6.jpg',
        text: 'Guest tiled he quick by so these trees am. It announcing alteration at surrounded',
        link: '#'
    },

]

const timing = (i) => {
    return (i + 1) * 200 + 200;
}
</script>

<style scoped></style>