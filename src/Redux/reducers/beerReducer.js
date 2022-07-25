import { BEER } from '../types'

export const beerReducer = (state = [], action) => {
  const {type, payload} = action
  switch (type) {
    case BEER:
      return payload
    default:
      return state
  }
}
