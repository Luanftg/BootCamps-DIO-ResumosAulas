# Variáveis
- Curryng
- Hoisting
- Imutabilidade
---
## 6 Tipos Primitivos
 - string
 - number
 - boolean
 - null
 - undefined
 - symbol

## Outros tipos
- Object
- Function = é um object que pode ser "chamado"
- Array = também um object cque tem ligaões co seus itens
---

### String

`.length` = retorna o tamanho de uma string;
`.split` = retorna um array "quebrando" a string por um delimitador
`.replace` = busca e substitui um valor por outro
`.slice` = retorna a "fatia" de um valor 
`.substr` = retorna N caracters a parti de uma posição

---
### Number

`.toString` = transforma numero em string
`.toFixed` = retorna numero com um numero de casas decimais
`.parseFloat` =  transforma uma string em float(permite casas decimais)
`.parseInt` = transforma uma string em int (não permite casas decimais)

---

### Null

`typeof` = Object
**Primitivo ouObject (????!!!)

---

### Undefined
`typeof` = undefined = declarada mas nao definida.

---
### Boolean
`true` or `false`

---
### Object
`.keys` = retorna as chaves do objeto
`.values` = retorna os valores das chaves
`.entries` = retorna um array de array contendo o par chave e valor
`.assign(target, objeto a ser incluido)` = mergear propriedades de objetos
`.freeze` = não permite alterar propriedades de um object
`.seal` = permite apenas alterar o valor de uma propriedade já existente

---

### Symbol
Utilizado para criar um atributo único

#### São únicos = incomparáveis 
(symbol1('name') === symbol2('name') = retorna false!)

#### Previnem conflito entre nomes de propriedades
Não permite que elas sejam sobrescritas

`.hasOwnProperty(key)` =  Symbols criam propriedades que não são enumberaveis (nao acha com laços de repetição)

`.getOwnPropertySymbols` = exibe symbols do projeto

`.reflect` = acessa todas as propriedades do objeto

#### Permite criar um enum
```javascript
const directions ={
    UP:    Symbol('UP'),
    DOWN:  Symbol('DOWN'),
    LEFT:  Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};
```

---

13/04/2022
### Array
Objeto que permite listar outros objetos

`.length` = quantidade de itens
`.isArray` = retorna true or false 
`.forEach` = itera pelos itens do array
`.filter` = filtra o array
`.map` = retorna um novo array
`.reduce` = transforma o array em outro tipo
