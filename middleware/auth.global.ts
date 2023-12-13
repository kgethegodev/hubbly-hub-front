import {useUserStore} from "~/store/userStore";
import {storeToRefs} from "pinia";

export default defineNuxtRouteMiddleware(((to) => {
    const { authenticated } = storeToRefs(useUserStore())
    const token = useCookie('token')

    if(token.value){
        // check if value exists
        authenticated.value = true
    }

    // if token exists and url is /login redirect to homepage
    if(token.value && to?.name === 'login'){
        return navigateTo('/')
    }

    // if token doesn't exist redirect to log in
    if (!token.value && to?.name !== 'login') {
        abortNavigation();
        return navigateTo('/login');
    }
}))
