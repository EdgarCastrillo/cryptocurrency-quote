'use strict'

class Ui {

  constructor() {
    this.init()
  }
  init() {
    this.buildSelect()
  }

  // Create cryptocurrency selector
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

  // Show messages
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

  // Print quote result
  showResult(result, currency, cryptocurrency) {
    console.log(result[cryptocurrency][currency])

    const dataCurrency = result[cryptocurrency][currency]
    
    // Build the template
    let templateHTML = `
      <div class="bg-warning">
        <div class="card-body text-light"
          <h2 class="card-title">Resultado:</h2>
          <p>El precio de ${dataCurrency.FROMSYMBOL} a moneda ${dataCurrency.TOSYMBOL} es de : ${dataCurrency.PRICE}</p>
        </div>
      </div>
    `
    // Insert the result
    document.querySelector('#results').innerHTML = templateHTML
  }
}