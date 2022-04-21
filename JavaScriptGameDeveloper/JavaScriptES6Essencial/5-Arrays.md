20/04/2022

# Arrays

- Independe do tipo!

## Criação

- `Array.of()`
- `Array.from()` = cria uma instância de array a partir de um parâmetro array-like ou iterable object
```javascript
const divs = document.querySelectorAll('div');
const arr = Arrat.from(divs);  // NodeList
```

## Inserir e remover elementos
- `.push()` = adiciona no último índice = retorna o índice que foi inserido(ultimo)
- `.pop()` = remove o último elemento do array = retorna o valor do elemento removido
- `.unshift()` = adiciona no primeiro item do array = também retorna o length
- `shift()` = remove o primeiro índice do array - também retorna o valor do item
-  `.concat()` = concatena um ou mais arrays retornando um novo array
-  `.slice()` = retorna um novo array, "fatiando" de acordo com o início e fim. - com dois parâmetros estabelece "inicio" e "fim" , com um parametro inteiro , indica a POSIÇÃO de partida do fatiamento incluindo ela mesma
-  `.splice()` = ALTERA um array adicionando novos elementos enquanto remove elementos antigos - com um parametro funciona como o `.slice` porém ALTERA o array. com 3 parâmetros: 'remove da posição','adiciona na posição','elemento/s'

## Iterar elementos de um array

- `.forEach( () => {} );`  = Recebe até 3 parametros : valor, índice e o array de ref. NÃO ALTERA o ARRAY!
- `.map( () => {} );` =  RETORNA UM NOVO ARRAY a partir da expressão passada. NÃO ALERA A REFERÊNCIA - manipula o indice e valor
- `.flat()` = Retorna um NOVO array com todos os elementos de  um sub-array concatenados de dorma recursiva de acordo com a profundidade especificada(depth)
- `flatMap()` = Retorna um NOVO array e executa um flat de profundidade 1
- `.keys()` = Retorna um Array iterator que contém as chaves para cada elemento do array
- `.values()` = retorna os valores de cada elemento do array
- `entries()` = retorna um par de elementos ['chave','valor']

## Buscar elementos

- `.find()` = retorna o primeiro item de um array que satisfaz a condição
- `.findIndex()` = retorna o índex do primeiro valor encontrado a partir da condição
- `.filter()` = retorna um NOVO array com todos os elementos que satisfazem aquela condição
- `.indexOf` = retorna o primeiro índice em que o elemento pode ser encontrado no array
- `.lastIndexOf` = último índice
- `.includes()` = retorna um booleano verificando se aquele elemento esta dentro do array
- `.some()` = retorna um booleano verificando se pelo menos 1 item no array satisfaz a CONDIÇÃO
- `every()` = retorna um booleano verificando se TODOS os itens do array satisfazem a condição

## Ordenar elementos

- `.sort('current','next')` = ordena elementos de um array a partir de uma condição
- `.reverse()` = inverter o sentido do array

## Transformar em outro tipo de dado

- `.join()` = junta todos os elementos de um array, separados por um delimitador('REGEX') e retorna uma string
- `.reduce()` = retorna um novo tipo de dado iterando cada posição em um array