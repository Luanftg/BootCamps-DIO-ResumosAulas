20/04/2022

# Classes

Classes são os tipos mais fundamentais em C#
É uma estrutura de dados que combina stado(campos) e ações (métodos)

# Objetos

São instacias de uma classe

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

