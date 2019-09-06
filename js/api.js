'use strict'

class API {
  constructor(apikey) {
    this.apikey = apikey
  }
  // Get all the coins
  async getCurrencyAPI() {
    const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`

    // Fetch to api
    const getUrlCurruency = await fetch(url)

    // Response in JSON
    const currencies = await getUrlCurruency.json()
    console.log(currencies)
    return {
      currencies
    }
  }
}