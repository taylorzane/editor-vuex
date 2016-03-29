<template>
  <div class="profile" v-if="!editing">
    <div class="phones">
      <button @click="addField('phones')">New Phone</button>
      <phone-field v-for="phone in phones" :phone="phone" track-by="id"></phone-field>
    </div>
    <div class="emails">
      <button @click="addField('emails')">New Email</button>
      <email-field v-for="email in emails" :email="email" track-by="id"></email-field>
    </div>
  </div>
</template>

<script>
import PhoneField from './phone-field'
import EmailField from './email-field'
import { addField } from '../vuex/actions'

export default {
  vuex: {
    getters: {
      editing: state => state.editor.status,
      phones: state => state.profile.phones,
      emails: state => state.profile.emails
    },
    actions: {
      addField
    }
  },
  components: {
    PhoneField,
    EmailField
  }
}
</script>
