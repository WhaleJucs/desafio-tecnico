import Tax from './Tax.js'

class TaxCalculator {

    constructor() {
        this.saldo = 0
        this.custoMedio = 0
        this.taxResult = []
        this.totalVendasMes = 0
        this.valorPrejuizo = 0
    }

    getTaxResult() {
        return this.taxResult
    }

    processOperation(operation) {
       
        // Lógica para processar a operação
        if (operation.operation === 'buy') {

            // Atualiza saldo e custo médio para compra
            this.saldo += operation.quantity
            this.custoMedio = ((this.custoMedio * (this.saldo - operation.quantity))
                                + (operation.unitCost * operation.quantity))
                                / this.saldo
            this.taxResult.push(new Tax(0)) // Sem taxa para compra
        } 

        else if (operation.operation === 'sell') {

            // Verifica se há saldo suficiente para a venda
            if (operation.quantity > this.saldo) {
                throw new Error('Saldo insuficiente para venda')
            }

            // Atualiza saldo e custo médio para venda
            this.saldo -= operation.quantity
            let lucroTotal = (operation.unitCost - this.custoMedio) * operation.quantity

            // Calcula o valor total da venda do mês
            const valorTotalVenda = operation.unitCost * operation.quantity
            this.totalVendasMes += valorTotalVenda

            // Impletação da regra tributária
            if (lucroTotal > 0) {

                const lucroAposPrejuizo = lucroTotal - this.valorPrejuizo // Abate o prejuízo acumulado

                if (lucroAposPrejuizo <= 0) {
                    this.valorPrejuizo = Math.abs(lucroTotal - this.valorPrejuizo) // Atualiza o prejuízo acumulado
                    this.taxResult.push(new Tax(0)) // Sem taxa para prejuízo
                }

                else if (lucroAposPrejuizo > 0) {
                    this.valorPrejuizo = 0 // Zera o prejuízo acumulado

                    if (this.totalVendasMes > 20000) {

                        // Calcula o imposto sobre o lucro      
                        const tax = lucroAposPrejuizo * 0.15 // 15% de imposto sobre o lucro segundo as leis brasileiras
                        this.taxResult.push(new Tax(tax))
                        lucroTotal -= tax // Abate o imposto do lucro
                    }

                    else {
                        this.taxResult.push(new Tax(0)) // Sem taxa para venda
                    }
                }
            } 

            else if (lucroTotal < 0) {

                this.valorPrejuizo += Math.abs(lucroTotal) // Acumula o prejuízo
                this.taxResult.push(new Tax(0)) // Sem taxa para prejuízo
            }

            else {
                this.taxResult.push(new Tax(0)) // Sem taxa para venda
            }
        }
    }
}