<script setup>
import {computed, onMounted} from 'vue'
import {useCounterStore} from "@/store/example";
import HelloWorld from "@/components/HelloWorld.vue";
import {useTodosStore} from "@/store/fromAPI/index.js";

const counterStore = useCounterStore()
const allTodo = useTodosStore()
const getTodos = computed(() => {
  return allTodo.getTodos
})

onMounted(() => {
  allTodo.fetchTodos()
})

const counter = computed(() => counterStore.count)
</script>
<template>
<!--  <div class="flex font-sans text-white bg-gray-900">-->
<!--    -->
<!--    <div class="flex flex-col w-16 h-screen md:border-2 md:border-text-white">-->
<!--      <SideBar />-->
<!--    </div>-->
<!--    &lt;!&ndash;    <RouterView/>&ndash;&gt;-->
<!--  </div>-->
    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <p v-if="allTodo.loading">Loading . . . .</p>
  <div v-for="todo in getTodos" :key="getTodos.id">
    <p>{{todo.name}}</p>
  </div>
  <pre class="text-lg text-red-10">{{ counter }}</pre>
  <HelloWorld/>
<!--  <SideBar/>-->
</template>

