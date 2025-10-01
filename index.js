import { Operation } from './src/Operation.js'
import { TaxCalculator } from './src/TaxCalculator.js'

const inputOperations = [
  new Operation('buy', 20, 200),
  new Operation('sell', 5, 50),
  new Operation('sell', 5, 50),
  new Operation('sell', 10, 30),
  new Operation('sell', 40, 70)
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