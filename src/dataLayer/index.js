import axios from 'axios'

const BASE_ENDPOINT = 'https://api.github.com'

const endpoints = {
  searchUsers: searchArgument =>
    `${BASE_ENDPOINT}/search/users?q=${searchArgument}&per_page=10`,
  fetchRepos: login => `${BASE_ENDPOINT}/users/${login}/repos`
}

export const fetchUsers = async searchArgument => {
  if (!searchArgument) return null
  try {
    const result = await axios.get(endpoints.searchUsers(searchArgument))
    return result.data
  } catch (ex) {
    console.log(ex)
    return null
  }
}

export const fetchRepos = async login => {
  if (!login) return []
  try {
    const result = await axios(endpoints.fetchRepos(login))
    return result.data
  } catch (ex) {
    console.log(ex)
    return []
  }
}
