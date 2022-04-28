22/04/2022

# Structs

- São estruturas de daos que podem conter membros de dados e membros de ação, != classes, structs são tipos de valor e não requerem alocação de heap (referência a memória -HEAP E STACK);
- Não aceitam herança;
- Úteis para estruturas de dados onde o interesse está no valor diretamente e não nas instâncias;
- Construtor também é chamado com  `new` , mas em vez de alocar dinamicamente um objeto no heap gerenciado e retornar uma referência a ele, um construtor struct simplesmente  retorna o próprio valor struct (normalmente em um local temporário na STACK), e esse valor é copiado conforme necessário;

23/04/2022

---
# Interfaces

- Define um contrato que pode ser implementado por uma classe e structs
- Pode conter métodos, propriedades, eventos e indexadores
- Não fornece implementações (deralmente) dos membros que define, apenas suas "ASSINATURAS"


```c#
interface IControl {
    void Paint();
}

interface IListBox {
    void SetText (string text);
}

interface IComboBox: IControl, IListBox {}

interface IDataBound {
    void Bind (Binder b);
}

public class EditBox: IComboBox, IDataBound {
    public void Paint() {}
    public void SetText(string text) {}
    public void Bind(Binder b) {}

}
```
---

# Enums

- Um tipo de valor distinto com um conjunto de constantes nomeadas
- "valores discretos"

```c# 
enum Cor {
    Vermelho,
    Verde,
    Azul
}

static void EscreverCor(Cor cor) {
    switch (cor) {
        case Cor.Vermelho:
            Console.WriteLine("Vermelho");
            break;
        case Color.Verde:
            Console.WriteLine("Verde");
            break;
    }
}

enum Alinhamento: sbyte {
    Esquerda = -1,
    Centro - 0,
    Direita = 1
}
```

---

## REFERÊNCIAS

[The Need for Speed]([https://link](https://alta-performance.net/introducao/#Um_desafio_quatro_solucoes))
[EximiaCo](https://eximia.co/)
[IOC]([https://link](https://www.tutorialsteacher.com/ioc/inversion-of-control))
[Gabriel Faraday - Instrutor - GitHub]((https://github.com/gabrielfaraday))
