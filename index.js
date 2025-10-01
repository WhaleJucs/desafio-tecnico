import { Operation } from './src/Operation.js'
import { TaxCalculator } from './src/TaxCalculator.js'

const inputOperations = [
  new Operation('buy', 10, 2000),
  new Operation('sell', 20, 500),
  new Operation('sell', 5, 500),
  new Operation('sell', 20, 500),
]

const main = () => {
    const taxCalculator = new TaxCalculator()

    for (const operation of inputOperations) {
        taxCalculator.processOperation(operation)
    }

    const result = taxCalculator.getTaxResult()
    console.log(result)
}

main()