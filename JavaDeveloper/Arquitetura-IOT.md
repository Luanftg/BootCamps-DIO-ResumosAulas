18/04/2022

# Arquitetura da internet das coisas e protocolo de comunicação

---

## Escolha de sensores para coletar dados (escolher "Devices")

- Baixo consumo de energia
- Rede de dados limitado
- Resiliencia
- Segurança
- Customização
- Baixo custo

### ARDUÍNO

- Plataforma de prototipagem
- Com entradas/saídas
- Desenvolvedor escreve em C/C++
- Iterface serial ou USB
- Shields : conectividade (bluetooh, wireless)

### EMBARCADOS - MCUS (Micro controladores)

- Microcontrolador de chip único
- Sistema operacional real time
- Embarcado
- Uso industrial, médico, militar, transporte

### MINICOMPUTADORES

- Raspberry Pi
- Computador completo
- Hardware integrado em uma única placa
- Roda SO Linux e Windows
- Uso doméstico e comercial

## Protocolo de Comunicação 

- MQTT - Message queue telemetric transport
  - Base na pilha do TCP/IP
  - Protocolo de mensagem assíncrona(M2M - Machine to MAchine)
  - Criado pela IBM para conectar sensores de pipelines de petróleo a satélites
  - Padrão OASIS supotado pelas linguagens de programação mais populares

## Modelo Cliente Servidor

Request =>
CLIENT - HTTP - SERVER
Responde <=

*Servidor não reconhece o client 
*Modelo Síncrono: aguarda a resposta do request

## Modelo Public/Subscribe

- MQTT Broker - roteador de mensagem
- Publish : `pub mqtt://"TÓPICOS"{dados}`


*Maior escalabilidade
*Modelo Assíncrono
