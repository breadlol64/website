export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('token');
    if (!token.value && to.name !== 'login' && to.name !== 'callback') {
        return navigateTo('/login');
    }
})
