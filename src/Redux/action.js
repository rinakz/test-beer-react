import axios from "axios"
import { BEER } from './types'

export const beer = (data) => ({
  type: BEER,
  payload: data
})


export const getBeer = (page) =>  async (dispatch) => {
  const response = await axios(`https://api.punkapi.com/v2/beers?page=1&per_page=${page}`)
  dispatch(beer(response.data))
}


