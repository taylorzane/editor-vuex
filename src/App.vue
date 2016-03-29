<template>
  <div id="app">
    <profile></profile>
    <editor v-if="editing"></editor>
</template>

<script>
import profile from './components/profile'
import editor from './components/editor'

export default {
  vuex: {
    getters: {
      editing: state => state.editor.status
    }
  },
  components: {
    profile,
    editor
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  margin-top: -100px;
  max-width: 600px;
  font-family: -apple-system, Helvetica, sans-serif;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
