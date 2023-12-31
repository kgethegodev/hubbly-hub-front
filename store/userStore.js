import {defineStore, acceptHMRUpdate} from "pinia";
export const useUserStore = defineStore("user", {
    state: () => ({
        authenticated: false,
    }),
    actions: {
        /**
         * Login function
         *
         * @param email
         * @param password
         */
        async authenticateUser(email, password)  {
            const config = useRuntimeConfig().public
            const {data, error} = await useFetch(`${config.api_url}/login`, {
                    method: "POST",
                    body: {
                        'email': email,
                        'password': password
                    }
                })

            if(error.value){
                await Promise.reject(error)
                return;
            }

            if(data.value && !error.value){
                const token = useCookie('token')
                token.value = data.value?.data?.token
                this.authenticated = true
            }
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