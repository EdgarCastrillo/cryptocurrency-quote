'use strict'

const quote = new API('6a538bbb818ed84b7fbb97de22f69e086465134d0f0e77d82875f7416f0a6b6a')
const ui = new Ui()

// Read form
const form = document.querySelector('#form')


// Even Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault()

  // Read selected currency
  const selectCurrency = document.querySelector('#currency')
  const selectedCurrency = selectCurrency.options[selectCurrency.selectedIndex].value

  // Read selected cryptocurrency 
  const selectCryptocurrency = document.querySelector('#cryptocurrency')
  const selectedCryptocurrency = selectCryptocurrency.options[selectCryptocurrency.selectedIndex].value

  // Check that both fields have something selected 
  if(selectedCurrency === '' || selectedCryptocurrency === '') {
    // Error alert
    ui.showMessage('Ambos campos son obligatorios', 'alert bg-danger text-center')
  } else {
    // Check API
    quote.getValues(selectedCurrency, selectedCryptocurrency)
      .then(data => {
        ui.showResult(data.result.RAW, selectedCurrency, selectedCryptocurrency )
      })
  }
  
})