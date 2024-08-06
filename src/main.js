import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/main.css';
import './assets/tailwind.css';
// import Vue3GoogleMap from 'vue3-google-map';

const app = createApp(App);

// app.use(Vue3GoogleMap, {
//     load: {
//         key: 'YOUR_API_KEY',
//         libraries: 'places',
//     },
// });

AOS.init({
    once: true,
});

app.mount('#app');
