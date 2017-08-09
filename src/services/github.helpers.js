import axios from 'axios';

export function fetchGistsByUsername (username) {
  return axios.get(`https://api.github.com/users/${username}/gists`)
}

export function fetchGistById(id) {
  return axios.get(`https://api.github.com/gists/${id}`)
}
