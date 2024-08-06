<template>
    <div ref="countupElement" class="countup-container">
        <div class="out-num">{{ currentNumber }} <sup>+</sup> </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    target: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        default: 10000 // Продолжительность отсчета в миллисекундах
    },
    step: {
        type: Number,
        default: 1 // Шаг отсчета
    }
});

const currentNumber = ref(0);
const interval = ref(null);
const countupElement = ref(null);

const startCountUp = () => {
    let n = 0;
    const t = Math.round(props.duration / (props.target / props.step));

    interval.value = setInterval(() => {
        n += props.step;
        if (n >= props.target) {
            n = props.target;
            clearInterval(interval.value);
        }
        currentNumber.value = n;
    }, t);
};

const observerCallback = (entries) => {
    if (entries[0].isIntersecting) {
        startCountUp();
        observer.unobserve(countupElement.value); // Прекращаем наблюдение после старта анимации
    }
};

let observer;

onMounted(() => {
    observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });
    if (countupElement.value) {
        observer.observe(countupElement.value);
    }
});

onUnmounted(() => {
    clearInterval(interval.value); // Очищаем интервал при размонтировании
    if (observer && countupElement.value) {
        observer.unobserve(countupElement.value); // Прекращаем наблюдение при размонтировании
    }
});
</script>

<style scoped>
.countup-container {
    text-align: center;
    font-family: Arial, sans-serif;
}

.out-num {
    font-size: 60px;
    font-weight: 800;
    position: relative;



}
</style>
