<template>
  <div class="editor">
    <input type="text" v-model="field.name">
    <input type="text" v-model="field.value">
    <button @click="saveField(field)">Save</button>
    <button @click="deleteField(field)">Delete</button>
  </div>
</template>

<script>
import { saveField, deleteField } from '../vuex/actions'

export default {
  vuex: {
    getters: {
      field: state => state.clone
    },
    actions: {
      saveField,
      deleteField
    }
  }
}
</script>
