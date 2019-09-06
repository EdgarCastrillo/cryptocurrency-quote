'use strict'

class Ui {

  constructor() {
    this.init()
  }
  init() {
    this.buildSelect()
  }

  buildSelect() {
    quote.getCurrencyAPI()
    .then(currencies => {

      // Create a select of options
      const select = document.querySelector('#cryptocurrency')

      // Iterate for API results
      for(const [key, value] of Object.entries(currencies.currencies.Data)) {
        // Add Symbol and name to options selector
        const option = document.createElement('option')
        option.value = value.Symbol
        option.appendChild(document.createTextNode(value.CoinName))
        select.appendChild(option)
      }
    }) 
  }


  showMessage(message, classes) {
    const div = document.createElement('div')
    div.className = classes
    div.appendChild(document.createTextNode(message))

    // Select messages
    const divMessage = document.querySelector('.messages')
    divMessage.appendChild(div)

    // Show content
    setTimeout(() => {
      document.querySelector('.messages div').remove()
    }, 3000)
  }
}