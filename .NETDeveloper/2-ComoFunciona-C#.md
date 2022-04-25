18/04/2022
# Como Funciona o C#
---
## O que é o C#?

- Linguagem de programação criada no final da década de 90.
  - Elegante
  - orientada a objetos
  - fortemente tipada
  - similar ao Java
- Desenvolvida junto com .NET
- Programas C# são executados no .NET, que inclui:
  - CLR - Common Language Runtime
  - Conjunto unificado de bibliotecas de classes
- Atualmente o compilador do C# é o Roslyn

---
## Como funciona ?

O código fonte esrito em C# é complilado em uma linguagem intermediária (IL).
O código e os recursos de IL são armazenados no disco em um arquivo executável chamado assembly, geralmente com uma extensão .exe ou .dll.
Quando o programa C# é executado, o assembly é carregado no CLR.
Em seguida, o CLR executará a compilação just in time (JIT) para converter o código IL em instruções de máquina nativas.

- CLR fornece outras ferramentas:
  - Garbage Collector
  - Exception Handler
  - Resources Manager

---
