class Operation {
  constructor(operation, unitCost, quantity) {

    // Valida se o operation é "buy" ou "sell"
    const validOperations = ['buy', 'sell']
    if (validOperations.includes(operation) === false) {
      throw new Error('Operation precisa ser "buy" ou "sell"')
    }

    // Valida se unitCost e quantity são números válidos
    const validNumber = typeof number === 'number' && isNaN(number) === false
    if (validNumber.includes(unitCost) === false || validNumber.includes(quantity) === false) { 
        throw new Error('Número inválido')
    }

    this.operation = operation
    this.unitCost = unitCost
    this.quantity = quantity
  }
}

