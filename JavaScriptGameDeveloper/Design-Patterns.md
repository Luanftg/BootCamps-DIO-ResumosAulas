19/04/2022

# Introdução a Design Patterns 

Padrões de projeto, são soluções generalistas para problemas recorrentes duante o desenvolvimento de um software. Não se trata de um framework ou um código pronto, mas de uma definição de alto nível de como um problema comum pode ser solucionado

---
 ## REFERÊNCIAS
 A Pattern Language - livro que define formato de Patterns (1978, Alexander, Ishikawa, Silverstein => Nome, Exemplo, Contexto, Problema, Solução)

Using PAttern Languages for Object-Oriented-Programs(1987, Kent Becke Ward Cunninghan)
 
 Design Patterns Elements of Reusables Object-Oriented Sftware (1994, Gang of four: Gamma, Helm, Johnson Vlissides)

- Padrões de Criação
  - Abstract Factory
  - Builder
  - Factory Method
  - Prototype
  - Singleton

- Padrões Estruturais
  - Adapter
  - Bridge
  - Composite
  - Decorator
  - Facade
  - Business Delegate
  - Flyweight
  - Proxy

- Padrões comportamentais
  - Chain od Responsability
  - Command
  - Interpreter
  - Mediator
  - Observer
  - State
  - Strategy
  - Template Method
  - Visitor 

---

## PATTERNS  MAIS UTILIZADOS

- Factory
  - Todos as funções que retornam um objeto, sem a necessidade de chamá-las com o `new`, são consideradas funções Factory(fábrica)
- Singleton
  - Criar uma única instância de função construtora e retorna-la toda vez em que for necessário utilizá-la (JQuery)
- Decorator
  - Recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente
- Observer
  - A instacia Subscriber mantém uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças de estado
- Module
  - Possibilita organizar melhor o código, sem a necessidade de expor variáveis globais