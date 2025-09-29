class Tax {
  constructor(tax) {

    // Valida se tax é um número válido
    const validNumber = typeof number === 'number' && isNaN(number) === false
    if (validNumber.includes(tax) === false) { 
        throw new Error('Número inválido')
    }

    this.tax = tax
  }
}