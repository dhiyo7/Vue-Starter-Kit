import {createRouter, createWebHistory} from "vue-router";
import {HomeView, Page, PageTwo, LoginView} from "@/layouts";

const routes = [
    {path: '/login', component: LoginView},
    {path: '/', component: HomeView},
    {path: '/page', component: Page},
    {path: '/page-two', component: PageTwo}
]
export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes
})

// router.beforeEach(async (to) => {
//     // redirect to login page if not logged in and trying to access a restricted page
//     const publicPages = ['/login', '/'];
//     // const authRequired = !publicPages.includes(to.path);
//     // const auth = useAuthStore();
//
//     // if (authRequired && !auth.user) {
//     //     auth.returnUrl = to.fullPath;
//     //     return '/login';
//     // }
// });