<script setup>
import {useUserStore} from "~/store/userStore.js";
const userStore = useUserStore()
</script>

<template>
  <hubbly-header v-if="userStore.authenticated"/>
    <slot />
  <hubbly-footer v-if="userStore.authenticated"/>
</template>

<style scoped></style>
