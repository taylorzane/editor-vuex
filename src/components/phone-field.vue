<template>
  <div class="phone-field" @click="editField(phone)">
    <div>{{ phone.name }}</div>
    <div>{{ phone.value }}</div>
    <small>{{ phone.id }}</small>
  </div>
</template>

<script>
import { editField } from '../vuex/actions'

export default {
  props: ['phone'],
  vuex: {
    actions: {
      editField
    }
  }
}
</script>

<style>
  .phone-field {
    margin-bottom: 25px;
  }
  small {
    color: #aaa;
    font-size: 10px;
  }
</style>
