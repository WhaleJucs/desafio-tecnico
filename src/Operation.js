export class Operation {
  constructor(operation, unitCost, quantity) {

    // Valida se o operation é "buy" ou "sell"
    const validOperations = ['buy', 'sell']
    if (validOperations.includes(operation) === false) {
      throw new Error('Operation precisa ser "buy" ou "sell"')
    }

    // Valida se unitCost e quantity são números válidos
    const validUnitCost = typeof unitCost === 'number' && isNaN(unitCost) === false
    const validQuantity = typeof quantity === 'number' && isNaN(quantity) === false
    if (validUnitCost === false || validQuantity === false) { 
        throw new Error('Número inválido')
    }

    this.operation = operation
    this.unitCost = unitCost
    this.quantity = quantity
  }
}

