<template>
  <div id="app">
    <keep-alive exclude = "detail">
    <router-view/>
    </keep-alive>
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
