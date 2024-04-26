import { createRouter, createWebHistory } from 'vue-router';
import hello from '@/views/hello/hello.vue';


const routes = [
    { path: '/', name: 'hello', component: hello},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;