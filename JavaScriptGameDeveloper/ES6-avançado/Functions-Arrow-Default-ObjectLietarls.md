22/04/2022

# Funções

- ANÔNIMAS = primeira classe = em javaScript as funções podem ser passadas como parâmetros de outras funções e atribuídas a variáveis e o funcionamento continua idêntico

## ARROW FUNCTION (=>) 

- Com ES6 podemos omitir o `return` 
- Se não houver statment : declarar variaveis, condicionais, ...

- ANÔNIMAS = só podemos atribuir a uma variável ou passar como  parâmetro;
- para um único argumento na função, é possível omitir os `()`;
- é possível retornar objetos em funções com a utilizaçõ de `() => ({teste: 123});`
- Função construtora NÃO pode ser utilizada com ARROWFUNCTION: `functionCAr() {this.foo = 'bar'; }`
- NÃO FAZEM HOISTING
- CONTEXTO DE BLOCO da function que a envolve

## Default

- Trtamento dos argumentos quando se cria uma função

24/03/2022

## Object Literals

- ECMA 6 trouxe "SHORT HAND" = uma propriedade ou método de um objeto podem ser passados por variáveis ou funções, omitindo-se o lado direito da declaração.
- É possível tambem atribuir uma variável para definir o nome de uma propriedade noa to da declaração do objeto.