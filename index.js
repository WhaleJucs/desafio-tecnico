import Operation from './Operation.js'
import Tax from './Tax.js'
import TaxCalculator from './TaxCalculator.js'

const processOperation = (operation, unitCost, quantity, tax) => {
    const taxCalculator = new TaxCalculator()
    const operationInstance = new Operation(operation, unitCost, quantity)
    const taxInstance = new Tax(tax)
}