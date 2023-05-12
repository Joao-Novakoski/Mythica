import axios from 'axios'

const DnDApi = axios.create({
  baseURL: 'http://www.dnd5eapi.co/api'
})

export default DnDApi