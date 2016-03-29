import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'

Vue.use(Vuex)

function guid () {
  function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4()
}

const state = {
  editor: {
    status: false,
    action: false
  },
  clone: false,
  stubs: {
    phones: {
      id: false,
      name: '',
      type: 'phones',
      value: ''
    }
  },
  profile: {
    phones: [
      {
        id: 'f9e025d7-3d27-c788-c2b3-77df7ca245dd',
        name: 'Personal Cell',
        type: 'phones',
        value: '(239) 222-5512'
      },
      {
        id: '22dc64d9-28b6-afa9-b9d8-1b7e6c35786a',
        name: 'Lab',
        type: 'phones',
        value: '(352) 444-2121'
      }
    ],
    emails: [
      {
        id: '44a11528-36a7-373d-dd3d-933461547419',
        name: 'Lab',
        type: 'emails',
        value: 'yum@ta.co'
      }
    ]
  }
}

const mutations = {
  ADD_FIELD (state, type) {
    state.editor.action = 'add'
    state.clone = $.extend({}, state.stubs[type])
    state.clone.id = guid()
  },
  SAVE_FIELD (state, field) {
    if (state.editor.action === 'add') state.profile[field.type].push(field)
    else state.profile[field.type].$set(field.id, field)
    state.clone = false
    state.editor.action = false
  },
  EDIT_FIELD (state, field) {
    state.editor.action = 'edit'
    state.clone = field
  },
  DELETE_FIELD (state, field) {
    state.profile[field.type].$remove(field)
  },
  TOGGLE_EDITING (state) {
    state.editor.status = !state.editor.status
  }
}

export default new Vuex.Store({
  state,
  mutations
})
