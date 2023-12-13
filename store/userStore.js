import {defineStore, acceptHMRUpdate} from "pinia";
import {useCookie} from "#app";
export const useUserStore = defineStore("user", {
    state: () => ({
        authenticated: false
    }),
    actions: {
        /**
         * Login function
         *
         * @param email
         * @param password
         */
        login(email, password)  {
            const config = useRuntimeConfig().public
            useAsyncData('user-login', async () => {
                await $fetch(`${config.api_url}/login`, {
                    method: "POST",
                    body: {
                        'email': email,
                        'password': password
                    }
                }).then(res => {
                    const token = useCookie('token')
                    token.value = res?.data?.token
                    this.authenticated = true
                }).catch(err => {
                    // TODO: Handle Error
                    console.log('The error: ', err)
                })
            })
        },

        /**
         * Logout function
         *
         */
        logout() {
            const token = useCookie('token')
            this.authenticated = false
            token.value = null
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}