<template>


  
    <div class="main-container mt-10">
        <!-- title -->
        <div class="space-y-4 mb-12">
            <h1 class="text-center title-blue">RECENT WORK</h1>
            <h3 class="text-center title-lg">Complete Cases</h3>
            <p class="text-center title-text">
                A Leading Supplier Of Solar Materials For Manufacturers, And Contractors.
            </p>
        </div>
        <!-- carousel card -->
        <div class="flex justify-between">
            <CaseCard v-for="(caseItem, index) in Cases" :caseItem="caseItem" :key="index" />
        </div>
    </div>
</template>

<script setup>
import CaseCard from './UI/CaseCard.vue';

const Cases = [
    {
        link: '#',
        image: 'https://demolisseursnormands.fr/landing/assets/img/project-6.jpg',
        title: 'Solar installation',
        subtitle: 'Solar energy',
        text: 'Attempt joy excited ten carried manners talking how.Suspicion neglected he resolving agreement perceived at an.',
    },
    {
        link: '#',
        image: 'https://demolisseursnormands.fr/landing/assets/img/project-6.jpg',
        title: 'Solar installation',
        subtitle: 'Solar energy',
        text: 'Attempt joy excited ten carried manners talking how.Suspicion neglected he resolving agreement perceived at an.',
    },
    {
        link: '#',
        image: 'https://demolisseursnormands.fr/landing/assets/img/project-6.jpg',
        title: 'Solar installation',
        subtitle: 'Solar energy',
        text: 'Attempt joy excited ten carried manners talking how.Suspicion neglected he resolving agreement perceived at an.',
    },
];
</script>

<style scoped></style>