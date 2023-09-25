<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from './store'
export default {
  name: 'App',
  mounted() {
    window.onbeforeunload = function () {
      if(!store.getters.token) {
        window.localStorage.removeItem("role");
      }
    };
  }
}
</script>
