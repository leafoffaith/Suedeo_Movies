import axios from 'axios'

export default axios.create ({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: "application/json"
  },
  params: {
    api_key: "dbe4608d19182e24de51d5d4e342e8df", 
  }
})