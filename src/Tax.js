class Tax {
  constructor(tax) {

    // Valida se tax é um número válido
    const validNumber = typeof tax === 'number' && isNaN(tax) === false
    if (validNumber === false) { 
        throw new Error('Número inválido')
    }

    this.tax = tax
  }
}