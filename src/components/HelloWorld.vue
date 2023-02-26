<script setup>
import {useCounterStore} from "@/store/example";

const counter = useCounterStore()
const increment = () => {
  counter.$patch((state) => {
    state.count++
  })
}
const decrement = () => {
  counter.$patch((state) => {
    state.count--
  })
}
</script>

<template>
  <button class="bg-red-400 radius-2" @click="increment">INCREMENT</button>
  <button @click="decrement">DECREMENT</button>
</template>
