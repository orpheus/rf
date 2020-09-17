
export const initialState = {

}

const reducer = {

}

export default (state = initialState, action = {}) =>
  reducer[action.type] ? reducer[action.type](state, action) : state
