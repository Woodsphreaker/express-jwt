import axios from 'axios'

const get = (url, params = {}) => {
  return axios.get(url, params)
    .then(({ data }) => data)
}

export default {
  get
}
