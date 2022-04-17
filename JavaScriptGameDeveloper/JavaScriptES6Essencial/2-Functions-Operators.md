13/04/2022

---

### Operador Binário
operando1 operador operando2
1 + 2

### Operador Unário

operando1 operador (x++) = executa e depois soma
operador operando1 (++x) = soma depois executa

### Negação (-) e Adição (+)
+"3" = força a conversão para number
+true = +1
+false = +0
-true = -1

### Exponenciação
2 ** 3 = 8;

### Operador de Agrupamento

2 * (3 + 2)

### Atibuições
x = y

- x += y
- x -= y
- x *= y
- x /= y
- x %= y

### Igualdade
- Igual: ==
- Não igual: !=
- Estritamente igual ===
- Estritamente não igual !==

### Relacionais
- Maior > ou >= maior ou igual
- Menor > ou <= menor ou igual

### Condicional Ternário

Condição ? valor1 : valor 2

### Lógicos
- AND `&&`
- OR `||`

### Não Lógico
- !true
- !false
- !! = comparação booleana

### Unários

`delete` something;
`typeof` something;

## Binário

`in` 
something `in` somethingItems

```JavaScript
var arvores = new Array["pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro"];
0 in arvores;           //retorna true
3 in arvores;           //retorna true
6 in arvores;           //retorna false
"cedro" in arvores;     //retorna false (voce deve ESPECIFICAR o número de índice !)
"length" in arvores;    // retorna true (length é uma propriedade do Array)

```
`instanceof`