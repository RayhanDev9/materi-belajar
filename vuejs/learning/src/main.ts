// 1. CSS Framework & Animasi
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';
// TODO (Step 2): Import router yang sudah dibuat di folder ./router

const app = createApp(App);
const pinia = createPinia()

// TODO (Step 2): Daftarkan router menggunakan app.use(...)
app.use(router)
app.use(VueQueryPlugin)
app.use(pinia)

app.mount('#app');
