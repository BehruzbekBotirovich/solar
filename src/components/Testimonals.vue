<template>

    <div>

    </div>
    <!-- statistica facts -->
    <div class="statistic ">
        <div class="darking"> </div>
        <div class="fact  border-r-1">
            <CountUp :target="89" :duration="3000" :step="3" />
            <p class="text-lg">Satisfied customers </p>
        </div>
        <div class="fact  border-r-1">
            <CountUp :target="230" :duration="3000" :step="3" />
            <p class="text-lg">Project Finished </p>
        </div>
        <div class="fact  border-r-1">
            <CountUp :target="50" :duration="4000" :step="3" />
            <p class="text-lg">Hours support </p>
        </div>

        <div class="fact">
            <CountUp :target="2341" :duration="4000" :step="3" />
            <p class="text-lg">Professional agents </p>
        </div>
    </div>
    <div class="bg-gray-100 py-16 ">
        <div class="main-container">
            <!-- customer opinions comments -->
            <div class="space-y-4 mb-12">
                <h1 class="text-center title-blue">CUSTOMER REVIEW </h1>
                <h3 class="text-center title-lg">What People Say </h3>
            </div>
            <!-- cards -->
            <CommentCard></CommentCard>

        </div>
    </div>






</template>

<script setup>
import CommentCard from './UI/CommentCard.vue'
import CountUp from './UI/CountUp.vue';

</script>

<style scoped>
.statistic {
    z-index: -1;
    background-image: url('https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/01/18/1933751-1014662133.jpg?itok=W24ga_Sx');
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    position: relative;
    display: flex;
    justify-content: center;
}

.darking {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    background: #3c3c3c77;
}

.fact {
    z-index: 2;
    color: white;
    width: fit-content;
    padding: 50px;

}
</style>