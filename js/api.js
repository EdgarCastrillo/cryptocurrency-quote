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
    return {
      currencies
    }
  }

  async getValues(currency, cryptocurrency){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}&api_key=${this.apikey}`
    
    // Consult rest api
    const urlConvert = await fetch(url)
    const result = await urlConvert.json()

    return {
      result
    }
  }
}