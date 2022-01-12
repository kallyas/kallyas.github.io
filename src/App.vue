<template>
  <div id="app">
    <AppHeader />
    <routerView />
  </div>
</template>
<script>
import AppHeader from '@/components/layout/AppHeader.vue'

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style>
@import '~@/assets/css/global.css';
</style>