<template>
    <div class="card">
        <div>
            <img class="object-cover w-full" :src="caseItem.image" style="height: 250px;" />
        </div>
        <div class="card-title">
            <div class="my-4 pl-4 pr-2 border-white"></div>
            <p class="text-white text-xl">{{ caseItem.title }}</p>
        </div>
        <div class="p-6 space-y-4">
            <h1 class="font-semibold text-lg">{{ caseItem.subtitle }}</h1>
            <div class="mb-4 text-sm text-gray-700">{{ caseItem.text }}</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    caseItem: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>
.card {
    border: 1px solid #e7e7e7;
    width: 32%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    min-width: 400px;
    position: relative;
    margin-bottom: 2rem;
}

.card-title {
    gap: 10px;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    top: 185px;
    left: 0;
}
</style>