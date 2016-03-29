export const addField = ({ dispatch }, type) => {
  dispatch('TOGGLE_EDITING')
  dispatch('ADD_FIELD', type)
}

export const saveField = ({ dispatch }, field) => {
  dispatch('SAVE_FIELD', field)
  dispatch('TOGGLE_EDITING')
}

export const editField = ({ dispatch }, field) => {
  dispatch('TOGGLE_EDITING')
  dispatch('EDIT_FIELD', field)
}

export const deleteField = ({ dispatch }, field) => {
  dispatch('DELETE_FIELD', field)
  dispatch('TOGGLE_EDITING')
}
