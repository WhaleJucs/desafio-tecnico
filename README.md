Neste deasafio Tecnico foi solicitado que fosse preparado um setup de código básico na minha linguagem de programação preferida, escolhi JavaScript, para inclusão foi também solicitado:

- Scripts para executar o método principal da sua aplicação.
  
- A definição das seguintes estruturas de dados:
  - Tipo operation com os seguintes campos:
    - operation: Valor enumerado: buy ou sell
    - unitCost: number
    - quantity: number
  - Tipo Tax com o seguinte campo:
    - tax: number
      
- Também me senti à vontade para criar (construtores) e atualizar (getters/setters) essas estruturas de dados.

Baseado nesses requisitos, apresento aqui o resumo do projeto e minha interpretação do que foi proposto:

Resumo do Projeto: Calculadora de Imposto de Renda para Operações.

1. Objetivo do Projeto:

O objetivo deste projeto foi desenvolver uma solução em JavaScript para calcular o imposto de renda sobre ganho de capital em uma série de operações de compra e venda de ações. A solução processa uma lista de transações e retorna o imposto devido para cada operação, seguindo um conjunto de regras de negócio predefinidas.

2. Arquitetura e Estrutura do Código:

Ele é composto por quatro componentes principais:

Operation.js: Uma classe que representa uma única operação. Ela armazena os dados essenciais de uma transação (operation, unitCost, quantity) e inclui validações em seu construtor para garantir a integridade dos dados (ex: a operação só pode ser 'buy' ou 'sell').

Tax.js: Uma classe simples que representa o resultado do imposto para uma operação. Seu objetivo é encapsular o valor do imposto (tax), garantindo que o resultado final do programa seja uma lista de objetos bem definidos, conforme solicitado no desafio.

TaxCalculator.js: O coração do projeto. Esta classe é responsável por toda a lógica de negócio. Ela mantém o estado da carteira ao longo do tempo (saldo, custo médio e prejuízo acumulado) e processa as operações sequencialmente para calcular os impostos.

index.js: O script de execução (ponto de entrada). Ele define um cenário de teste com uma lista de operações, instancia a TaxCalculator, processa as operações e exibe o resultado final de forma formatada no console (Terminal).

3. Lógica de Negócio Implementada:

A TaxCalculator implementa regras fiscais para o cálculo do imposto:

Custo Médio: A cada nova compra, o custo médio das ações em carteira é recalculado. Este custo é a base para determinar o lucro ou prejuízo em uma venda futura, garantindo um cálculo preciso do ganho de capital.

Acúmulo e Abatimento de Prejuízos: A calculadora rastreia prejuízos de vendas anteriores. Se uma operação futura gerar lucro, o prejuízo acumulado é utilizado para abater esse lucro antes que qualquer imposto seja calculado. O saldo do prejuízo é atualizado a cada operação.

Regra de Isenção: O imposto sobre o lucro só é devido se o valor total de vendas acumulado ultrapassar um limite predefinido (R$ 20.000,00). O sistema monitora esse volume e só aplica a alíquota de imposto quando o limite é excedido.
