export default defineNuxtPlugin(() => {
    addRouteMiddleware((to, from) => {
        // if (to.path === '/') {
        //     return navigateTo('/profile')
        // }
        // console.log('I dunno what to log')
    })
})