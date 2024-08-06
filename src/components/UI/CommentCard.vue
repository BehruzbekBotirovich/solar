<template>
    <div class="carousel-container">
        <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div class="carousel-slide" v-for="(slide, index) in slides" :key="index">
                <div class="card" v-for="(item, idx) in slide" :key="idx">
                    <div class="w-1/3 flex items-center">
                        <img class="rounded-full object-cover" :src="item.image" alt=""
                            style="height: 150px; width: 150px;" />
                    </div>
                    <div class="w-2/3 border-l-1 pl-4">
                        <p class="text-gray-600">{{ item.text }}</p>
                        <h3 class="text-gray-800 text-xl">{{ item.name }}</h3>
                        <h5 class="text-sky-900 text-lg">{{ item.title }}</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="dots">
            <span v-for="(slide, index) in slides" :key="index" class="dot" :class="{ active: currentIndex === index }"
                @click="goToSlide(index)"></span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = [
    {
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6IGUSUFfJXY6nNiCrGf58TbJ9ufQc3j5tfDjW9mqrIkx8Lles3zGK4cSn2nws0hR4SQ&usqp=CAU',
        text: 'Awesome so many in hung easy find well up. So of exquisite my an explained remainder. Dashwood denoting securing be on perceive my laughing so.',
        name: 'Ahel Sashka',
        title: 'Programmer',
    },
    {
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6IGUSUFfJXY6nNiCrGf58TbJ9ufQc3j5tfDjW9mqrIkx8Lles3zGK4cSn2nws0hR4SQ&usqp=CAU',
        text: 'Awesome so many in hung easy find well up. So of exquisite my an explained remainder. Dashwood denoting securing be on perceive my laughing so.',
        name: 'Ahel Sashka',
        title: 'Programmer',
    },
    {
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6IGUSUFfJXY6nNiCrGf58TbJ9ufQc3j5tfDjW9mqrIkx8Lles3zGK4cSn2nws0hR4SQ&usqp=CAU',
        text: 'Awesome so many in hung easy find well up. So of exquisite my an explained remainder. Dashwood denoting securing be on perceive my laughing so.',
        name: 'Ahel Sashka',
        title: 'Programmer',
    },
    {
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6IGUSUFfJXY6nNiCrGf58TbJ9ufQc3j5tfDjW9mqrIkx8Lles3zGK4cSn2nws0hR4SQ&usqp=CAU',
        text: 'Awesome so many in hung easy find well up. So of exquisite my an explained remainder. Dashwood denoting securing be on perceive my laughing so.',
        name: 'Ahel Sashka',
        title: 'Programmer',
    },
];

const slides = ref([]);
for (let i = 0; i < items.length; i += 2) {
    slides.value.push(items.slice(i, i + 2));
}

const currentIndex = ref(0);

const goToSlide = (index) => {
    currentIndex.value = index;
};
</script>

<style scoped>
.carousel-container {
    position: relative;
    margin: auto;
    overflow: hidden;
}

.carousel {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-slide {
    display: flex;
    min-width: 100%;
    gap: 10px;
}

.card {
    border: 1px solid #e7e7e7;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    flex: 1;
    background: white;
    display: flex;
    align-items: center;
    padding: 30px;
}

.dots {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.dot {
    cursor: pointer;
    height: 14px;
    width: 14px;
    background-color: #bbb;
    border-radius: 50%;
    margin: 0 5px;
    transition: background-color 0.3s ease;
}

.dot.active {
    background-color: #717171;
}
</style>