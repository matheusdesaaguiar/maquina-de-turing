<h1 align="center"> Maquina de Turing</h1>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" />
</p>

## Propósito

Projeto proposto pela instituição **Programadores do Amanhã**, na turma do **Code Lab** tem o propósito de simular o funcionamento da máquina de Turing.

## O que é a Máquina de Turing?
A Máquina de Turing é um modelo teórico de computação criado por Alan Turing que define como um algoritmo pode ser executado passo a passo. Mesmo sendo um conceito abstrato, ela é capaz de representar qualquer computação realizada por um computador.

Ela funciona a partir de uma fita (que pode ser vista como uma memória), um cabeçote de leitura e escrita e um conjunto de estados e regras que determinam como os símbolos da fita são lidos, modificados e como o cabeçote se movimenta.

Neste projeto, a Máquina de Turing é simulada por meio de um array, que representa a fita, e é utilizada para realizar operações aritméticas básicas como soma, subtração, multiplicação, divisão e módulo, demonstrando na prática o funcionamento desse modelo computacional.


## Funcionamento
![Fita da máquina de Turing](images/fita.png)

No arquivo localizado em ```/src/input.js``` é possivel encontrar uma variável com nome input que possui como valor um array onde você pode alterar o valor e colocar quais operações deseja que a máquina de turing realize.

</br>

Exemplo:
```JavaScript
    const input = [2, "+", 3, 4, "*", 5, 9, "/", 3];
```

Após colocar as operações que deseja, rode o seguinte comando no terminal:

```JavaScript
    node main.js 
```
No console irá aparecer o resultado de cada operação que deseja realizar
Resultado esperado:

```JavaScript
    [5,20, 3]
```

## Tecnologias

- JavaScript
- NodeJs
- Algoritmos