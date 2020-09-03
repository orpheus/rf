// auto-generated by a js-code-template-generator

export const ERROR = 'ERROR'
export const SUCCESS = 'SUCCESS'
export const PENDING = 'PENDING'

export function createAsyncState (type, payload) {
  switch (type) {
    case SUCCESS:
      return {
        pending: false,
        success: true,
        error: false,
        errorMessage: undefined,
        errorStatus: undefined
      }
    case PENDING:
      return {
        pending: true,
        success: false,
        error: false,
        errorMessage: undefined,
        errorStatus: undefined
      }
    case ERROR:
      return {
        pending: false,
        success: false,
        error: true,
        errorMessage: payload.message,
        errorStatus: payload.status
      }
    default:
      return {
        pending: false,
        success: false,
        error: false,
        errorMessage: undefined,
        errorStatus: undefined
      }
  }
}

export function createErrorPayload (err) {
  let message = err.message
  if (typeof err?.response?.data === 'string') {
    message = err?.response?.data
  } else if (err?.response?.data?.message) {
    message = err.response.data.message
  }

  return { message, status: err.response?.status }
}