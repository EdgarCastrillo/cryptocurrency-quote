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
      console.log(currencies)
      for(const [key, value] of Object.entries(currencies.currencies.Data)) {
        console.log(value)
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