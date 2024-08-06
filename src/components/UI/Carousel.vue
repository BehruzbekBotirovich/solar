<template>
    <div class="carousel-container">
        <div class="carousel">
            <div class="carousel-slide" :style="{
                backgroundImage: `url(${items[activeIndex].src})`,
                transform: `scale(${scale})`
            }">
                <p class="carousel-caption">{{ items[activeIndex].caption }}</p>
            </div>
        </div>
        <button class="btn prev" @click="prevSlide">
            <NextIcon></NextIcon>
        </button>
        <button class="btn next" @click="nextSlide">
            <PrevIcon></PrevIcon>
        </button>
        <div class="dots">
            <span v-for="(item, index) in items" :key="index" class="dot" :class="{ active: activeIndex === index }"
                @click="goToSlide(index)"></span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PrevIcon from '../icons/PrevIcon.vue'
import NextIcon from '../icons/NextIcon.vue'

const items = [
    {
        src: 'https://plus.unsplash.com/premium_photo-1678743133487-d501f3b0696b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Resident Solar'
    },
    {
        src: 'https://images.unsplash.com/flagged/photo-1566838803980-56bfa5300e8c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Commercail Solar'
    },
    {
        src: 'https://plus.unsplash.com/premium_photo-1682148026899-d21f17c04e80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Resident solar'
    },
];

const activeIndex = ref(0);
const scale = ref(1);

const showItem = (index) => {
    activeIndex.value = index;
    scale.value = 1.1;
    setTimeout(() => scale.value = 1, 300); // Reset scale after transition
};

const prevSlide = () => {
    showItem((activeIndex.value - 1 + items.length) % items.length);
};

const nextSlide = () => {
    showItem((activeIndex.value + 1) % items.length);
};

const goToSlide = (index) => {
    showItem(index);
};

onMounted(() => {
    setInterval(nextSlide, 10000); // Adjust the interval as needed
});
</script>

<style scoped>
.carousel-container {
    width: 100%;
    /* Full width */
    position: relative;
    overflow: hidden;
    /* Hide overflowing content */
}

.carousel {
    width: 100%;
    height: 600px;
    /* Adjust height as needed */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.carousel-slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
}

.carousel-caption {
    color: #ffffff;
    font-size: 2rem;
    /* Adjust font size as needed */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    position: relative;
}

.btn {
    padding: 1em 2em;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    outline: none;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 900;
    color: #10100e;
    background-color: #2e2e2e;
    transition: transform 0.2s ease-in-out;
}

.btn:active,
.btn:focus {
    transform: translateY(-50%) scale(0.9);
}

.btn:hover {
    transform: translateY(-50%) scale(0.96);
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

.dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: absolute;
    bottom: 10px;
    width: 100%;
}

.dot {
    cursor: pointer;
    height: 10px;
    width: 10px;
    background-color: #242421;
    border-radius: 50%;
    transition: background-color 0.2s ease;
}

.dot.active,
.dot:hover {
    background-color: #ffffe6;
}
</style>