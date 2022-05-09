import { createRouter, createWebHistory } from 'vue-router';

import pokemonView from './views/pokemonView.vue';
import aboutView from './views/aboutView.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            component: pokemonView,
            path: '/',
        },
        {
            // name:
            component: aboutView,
            path: '/about',
        },
    ],
});
