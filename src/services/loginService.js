import axios from 'axios'
const baseUrl = '/login'

const login = async (user) => {
  const response = await axios.post(baseUrl, user)
  return response.data
}

export default {
  login,
}
