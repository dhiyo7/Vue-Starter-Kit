<script>
import SideBar from "@/components/molecules/sidebar/index.vue"

export default {
  components: {
    SideBar
  },
  data() {
    return {
      navOpen: false
    }
  },
  methods: {
    setOpen(newVal) {
      console.log("FROM CHILD ", newVal)
      this.navOpen = newVal
    }
  }
}
</script>
<template>
  <div class="flex">
    <SideBar :setOpen="setOpen"/>
    <div :class="['flex-initial w-full p-10' , !navOpen ? 'ml-0' : 'ml-52']">
      <RouterView/>
    </div>
  </div>
</template>

