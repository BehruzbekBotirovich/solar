<template>
    <div class="flex main-container py-12 gap-8">
        <div class="w-1/2 ">
            <img src="../assets/images/workers.jpg" class="object-cover" style="width: 100%; height: 100%;">
        </div>
        <div class="w-1/2 space-y-4">
            <h1 class="text-3xl font-semibold">Get Free Consultation </h1>
            <p class="text-gray-600">Get a free consultation from our experts, Our customer support team help you 24/7,
                Don’t hesitate.</p>
            <form class="space-y-4">
                <div>
                    <label for="name" class="block text-gray-700">Name</label>
                    <input id="name" class="w-full p-2 border rounded" type="text" placeholder="Name" />
                </div>
                <div class="flex space-x-4">
                    <div class="w-1/2">
                        <label for="email" class="block text-gray-700 ">Email</label>
                        <input id="email" class="w-full p-2 border rounded" type="email" placeholder="Email" />
                    </div>
                    <div class="w-1/2">
                        <label for="tel" class="block text-gray-700">Phone</label>
                        <input id="tel" class="w-full p-2 border rounded" type="tel" placeholder="Phone" />
                    </div>
                </div>
                <div>
                    <label for="message" class="block text-gray-700">Tell me about your project</label>
                    <textarea id="message" class="w-full p-2  border rounded h-36"
                        placeholder="Tell me about your project"></textarea>
                </div>
                <button class="send-btn"> SEND MESSAGE<SendIcon></SendIcon> </button>
            </form>
        </div>

    </div>

</template>
<script setup>
import SendIcon from './icons/SendIcon.vue'
</script>
<style scoped>
.send-btn {
    background: transparent none repeat scroll 0 0;
    border: 2px solid #232323;
    color: #666666;
    display: flex;
    gap: 0.25rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 15px;
    padding: 10px 35px;
    text-transform: uppercase;
}
</style>
