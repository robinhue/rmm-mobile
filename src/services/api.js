/**
 * AXIOS
 * --------------------------------------
 * axios.request(config)
 * axios.get(url[, config])
 * axios.delete(url[, config])
 * axios.head(url[, config])
 * axios.options(url[, config])
 * axios.post(url[, data[, config]])
 * axios.put(url[, data[, config]])
 * axios.patch(url[, data[, config]])
 */

import axios from 'axios'

class API {
  constructor(token = null) {
    this.api = axios.create({
      baseURL: 'https://2-server-example.vauxgomes.repl.co',
    })

    this.token(token)
  }

  /** Set Token */
  token(token) {
    this.config = {
      headers: {
        Authorization: token,
      },
    }

    return this
  }

  /** System */
  async getSystemInfo() {
    const response = await this.api.get(`/sys`)
    return response.data
  }

  /*Login */
  async login(username, password) {
    const response = await this.api.post('/login', {username, password})
    return response.data
  }



}

export default new API()
