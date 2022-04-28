20/04/2022

# Classes

Classes são os tipos mais fundamentais em C#
É uma estrutura de dados que combina stado(campos) e ações (métodos)

# Objetos

São instâcias de uma classe

As classes suportam herança e polimorfismo, mecanismos pelos quais as classes derivadas podem estender e especializar as classes base

```c#
public class Ponto {
    public int x,y;
    public Ponto (intx,int y) {
        this.x = x;
        this.y = y;
    }
}
```

## Acessibilidade

- `public`
- `protected`
- `internal` = só é acessado no assembly que ele está contido
- `private`

## Herança

Uma declaração de classe pode especificar uma classe base, herdando os membros: public, internal e protected da classe base.
Omitir uma especificação de classe base é o mesmo que derivar do tipo Object.

## Métodos

Os métodos podem ter uma lista de parâmetros, que representam valores ou referências de variáveis passadas para o método, e um tipo de retorno, que especifica o tipo do valor calculado e retornado pelo método.

---
21/04/2022

# Aplicando classes e objetos em projetos

`ref` / `out` = passa variáveis por referência, permitindo que o método "altere" o valor da variável (passa a apontar para este novo local de memória)

`static` = método estático permite que uma classe o chame diretamente sem a necessidade de instanciar um objeto. - NAO PERTENCE À INSTANCIA E SIM A CLASSE ("Classe.métodoStatic")

`virtual` = métodos virtuais permitem ser sobrescritos por classes filhas.
