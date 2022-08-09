<template>
  <div>movie</div>
</template>

<script lang="ts" setup>
import { moviesApi } from "@/api/api.js"
import { onMounted, ref } from "vue"
onMounted(() => {
  getList()
})
const movies = ref([])
function getList() {
  moviesApi().then((res) => {
    movies.value = res.subject
  })
}
</script>

<style scoped></style>
