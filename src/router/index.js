import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function lazyLoad(view) {
    return () => import(`@/views/${view}.vue`);
}

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: lazyLoad('LandingPage'),
    },
    {
        path: '/about',
        name: 'About',
        component: lazyLoad('About'),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: lazyLoad('Contact'),
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: lazyLoad('Portfolio'),
    },
    {
        path: '/team',
        name: 'Team',
        component: lazyLoad('Team'),
    },
    // To-Do: add a 404 route/page 🧐
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { x: 0, y: 0 };
    },
});

export default router;
