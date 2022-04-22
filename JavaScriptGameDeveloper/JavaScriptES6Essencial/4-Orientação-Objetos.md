18/04/2022
# Orientação a Objetos JavaScript
---

## HERANÇA

- Baseada em protótipos
  - constructor
  - prototype
  - __ proto __

- Operador `new`
    1. Um novo objeto é criado, herdando o prototype
    2. A função construtora é chamada com os argumentos especificados e com o `this` vinculado ao novo objeto criado
    3. Caso a função construtora tenha um retorno explícit, será respeitado o seu `return`. Senão, será retornado o objeto criado no passo 1.

## CLASSES

- ES6
- Simplificação da herança de protótipos
- palavra chave: `class`

## Modificadores de acesso

- privado/public : #

## Encapsulamento
- Ocultar detalhes do funcionamento interno

*static = permite acessar atributos sem instanciar objetos