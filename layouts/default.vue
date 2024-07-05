<template>
  <div id="app">
    <NuxtLoadingIndicator />
    <NavBar />
    <div id="page-header">
      <h1>U P P E R C A S E</h1>
    </div>
    <div id="page-section">
      <nuxt />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
}

#page-header {
  border-bottom: 1px;
  border-bottom-color: grey;
  border-bottom-style: solid;
}

#page-section {
  padding-top: 20px;
}

</style>
