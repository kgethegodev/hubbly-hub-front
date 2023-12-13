import {defineStore, acceptHMRUpdate} from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        _user: null
    }),
    getters: {
        user: this._user
    },
    actions: {
        login(user) {
            this._user = user
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}