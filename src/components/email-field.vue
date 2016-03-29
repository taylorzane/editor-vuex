<template>
  <div class="email-field" @click="editField(email)">
    <div>{{ email.name }}</div>
    <div>{{ email.value }}</div>
    <small>{{ email.id }}</small>
  </div>
</template>

<script>
import { editField } from '../vuex/actions'

export default {
  props: ['email'],
  vuex: {
    actions: {
      editField
    }
  }
}
</script>
