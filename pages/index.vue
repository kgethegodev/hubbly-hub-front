<script lang="ts" setup>
import {useUserStore} from "~/store/userStore";

const userStore = useUserStore()
</script>

<template>
  <div>
    Index

    <NuxtLink @click.prevent="userStore.logout" to="/">Logout</NuxtLink>
  </div>
</template>

<style scoped></style>
