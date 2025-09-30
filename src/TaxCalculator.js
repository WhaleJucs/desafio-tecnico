class TaxCalculator {
    constructor() {
        this.saldo = 0
        this.custoMedio = 0
        this.taxResult = []
    }
}

processOperation(operation) {

    // Lógica para processar a operação
    if (operation.operation === 'buy') {

        // Atualiza saldo e custo médio para compra
        this.saldo += operation.quantity
        this.custoMedio = ((this.custoMedio * (this.saldo - operation.quantity))
                             + (operation.unitCost * operation.quantity))
                             / this.saldo
        this.taxResult.push(0) // Sem taxa para compra
    } 

    else if (operation.operation === 'sell') {

        // Verifica se há saldo suficiente para a venda
        if (operation.quantity > this.saldo) {
            throw new Error('Saldo insuficiente para venda')
        }

        // Atualiza saldo e custo médio para venda
        this.saldo -= operation.quantity
        const lucroTotal = (operation.unitCost - this.custoMedio) * operation.quantity

        // Calcula o valor total da venda
        const valorTotalVenda = operation.unitCost * operation.quantity

        // Impletação da regra tributária
        if (lucroTotal > 0 && valorTotalVenda > 20000) {
            const tax = lucroTotal * 0.15 // 15% de imposto sobre o lucro segundo as leis brasileiras
            this.taxResult.push(tax)
        } 

        else {
            this.taxResult.push(0) // Sem taxa para venda
        }
    }
}