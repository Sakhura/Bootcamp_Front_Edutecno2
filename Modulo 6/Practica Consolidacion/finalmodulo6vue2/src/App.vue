<template>
  <div id="app">
    <navBar></navBar>
    <router-view/>
  </div>
</template>
<script>

import navBar from '@/components/navBar.vue'

export default {
  name: 'Home',
  components: {
    navBar
  }
}
</script>
<style>

</style>
