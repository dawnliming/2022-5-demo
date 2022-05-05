<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style lang="scss">
@import "src/styles/index.scss";
#app {
  margin: 14px;
  min-width: 1030px;
}
</style>
