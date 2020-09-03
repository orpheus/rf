// auto-generated by a js-code-template-generator
import { createErrorPayload } from './helpers'
import { CLEAR_ASYNC, SET_ERROR, SET_PENDING, SET_SUCCESS } from './types'

export const setPending = id => ({ type: SET_PENDING, id })
export const setSuccess = id => ({ type: SET_SUCCESS, id })
export const setError = (id, err) => ({ type: SET_ERROR, id, err: createErrorPayload(err) })
export const clearAsync = id => ({ type: CLEAR_ASYNC, id })