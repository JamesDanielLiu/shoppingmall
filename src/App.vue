<template>
  <div id="app">
    <router-view/>
    <main-Tab-Bar/>
  </div>
</template>

<script>
  import mainTabBar from '@/components/content/mainTabBar.vue'

  export default {
    name: 'App',
    components: {
      mainTabBar
    }
  }
</script>

<style>
@import "assets/css/base.css";
</style>
