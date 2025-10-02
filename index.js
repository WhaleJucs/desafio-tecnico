import { Operation } from './src/Operation.js'
import { TaxCalculator } from './src/TaxCalculator.js'

const taxCalculator = new TaxCalculator()

window.operationProcess = () => {
    
    // Obtém os valores do formulário
    const operationType = document.querySelector('input[name="operation"]:checked').value
    const unitCost = Number(document.getElementById('unitCost').value)
    const quantity = Number(document.getElementById('quantity').value)

    // Processa a operação e atualiza o resultado
    try {
        const operation = new Operation(operationType, unitCost, quantity)
        taxCalculator.processOperation(operation)

        const result = document.getElementById('result')
        result.textContent = taxCalculator.getTaxResult()
    }

    // Exibe alertas de erro, se houver
    catch (error) {
        alert(error.message)
    }
}

// const inputOperations = [
//   new Operation('buy', 20, 200),
//   new Operation('sell', 5, 50),
//   new Operation('sell', 5, 50),
//   new Operation('sell', 10, 30),
//   new Operation('sell', 40, 70)
// ]

// const main = () => {
//     const taxCalculator = new TaxCalculator()

//     for (const operation of inputOperations) {
//       taxCalculator.processOperation(operation)
//     }

//     const result = taxCalculator.getTaxResult()
//     console.log(result)
// }

// main()