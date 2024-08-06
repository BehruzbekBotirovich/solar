<template>

    <div class="main-container py-8 flex justify-between items-center">
        <div class=""><img src="../assets/images/logo.png" alt=""></div>
        <ul class="flex gap-6 text-lg">
            <li>Home</li>
            <li>Commercial Solar </li>
            <li>Residential Solar </li>
            <li>Contact</li>
        </ul>
        <div class="flex gap-4 ">
            <button class="bg-sky-700 text-white rounded-lg py-2 px-4">Contact Us</button>
            <div class="rounded-lg py-2 px-4 border-2 border-sky-700 w-fit flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_6_59)">
                        <path
                            d="M15.4575 12.8788L13.0838 10.5051C12.4175 9.83876 11.3372 9.83876 10.6709 10.5051L10.2995 10.8764C10.0006 11.1746 9.79295 11.5518 9.70082 11.9638C8.89623 11.9788 7.98632 11.842 7.20807 11.3371C6.73005 10.9818 6.27865 10.592 5.85748 10.1708C5.50169 9.81521 5.16808 9.4381 4.85854 9.0416C4.25201 8.22673 4.09195 7.23782 4.10814 6.3711C4.52012 6.27899 4.8973 6.07132 5.19545 5.77245L5.56682 5.40107C6.23314 4.73476 6.23314 3.65445 5.56682 2.9881L3.1931 0.614384C2.74889 0.170165 2.02867 0.170165 1.58448 0.614384L1.17695 1.02201C0.654511 1.54445 0.387073 2.22488 0.373167 2.90954C0.239386 4.35407 0.516042 5.94426 1.17326 7.50823C1.6072 8.54085 2.20298 9.54913 2.92857 10.4863C2.93773 10.4986 2.94642 10.511 2.9557 10.5232L2.95676 10.5224C3.32722 10.9976 3.72663 11.4496 4.15273 11.8756C4.5931 12.3163 5.06099 12.7287 5.55357 13.1101L5.54882 13.1164C5.63089 13.1786 5.7146 13.2386 5.79985 13.2964C7.87051 14.828 10.2109 15.6884 12.3888 15.6883C12.516 15.6883 12.6429 15.6847 12.769 15.6788C13.5802 15.7785 14.4273 15.5178 15.05 14.895L15.4576 14.4874C15.9018 14.0432 15.9018 13.323 15.4575 12.8788Z"
                            fill="#2A62FE" />
                    </g>
                    <defs>
                        <clipPath id="clip0_6_59">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                +012-345-677-890
            </div>
        </div>
    </div>

    <Carousel></Carousel>

</template>

<script setup>
import Carousel from './UI/Carousel.vue'
</script>

<style lang="scss" scoped></style>