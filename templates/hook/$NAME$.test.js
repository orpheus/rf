import { renderHook } from '@testing-library/react-hooks'
import $NAME$ from './$NAME$'

beforeAll(() => {
  jest.useFakeTimers()
})

beforeEach(() => {

})

afterEach(() => {

})

describe('$NAME$', () => {
  it('run without initial data', () => {
    const { result } = renderHook(() => $NAME$())
    expect(result).not.toBeUndefined()
  })
})
