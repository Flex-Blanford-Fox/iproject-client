import axios from 'axios'

const tembak = axios.create({
  baseURL: 'http://localhost:3000'
})

export default tembak
