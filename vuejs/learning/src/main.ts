// 1. CSS Framework & Animasi
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// TODO (Step 2): Import router yang sudah dibuat di folder ./router

const app = createApp(App);

// TODO (Step 2): Daftarkan router menggunakan app.use(...)
app.use(router)

app.mount('#app');
