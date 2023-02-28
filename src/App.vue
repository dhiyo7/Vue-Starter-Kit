<script setup>
import {RouterView} from "vue-router";
import SideBar from "@/components/molecules/sidebar/index.vue"
</script>
<template>
  <div class="flex h-screen">
    <SideBar />
    <div class="flex-initial w-full p-10">
      <RouterView/>
    </div>
  </div>
</template>

