# React Netflix Player
## Player baseado no designer da Netflix

Player de video com as funcionalidades existentes no atual player da Netflix Web.

Componente desenvolvido para projetos react ⚛.


![Anime-List (1)](https://user-images.githubusercontent.com/25160385/80926822-dbfe8c00-8d6f-11ea-8e39-c24ffc6cfb1b.gif)


### Este player pode abstrair  toda parte de reprodução de vídeos, com os seguites recursos suportados:

1. Reprodução de vídeos com loading e Buffer
2. Listagem de lista de reprodução com marcação do vídeo em atual
3. Ação para prosseguir para o proxímo item
4. Ação definida oa fim do vídeo
5. Recursos de Play/Pause, Avançar/Retroceder e FullScreen
6. Suporte a múltiplos links de reprodução
7. Informações da mídia em execução
5. Sistema de ocultação do controles mediante tempo de espera
6. Cusomizaçõo de cor (Feature)
7. Tratamento de erros

### Como utilizar

Em seu projeto react, execute o comando ```npm install react-netflix-player``` para adicionar o react-netflix-player em seu projeto.

Após realize o _import_ do componente no arquivo que deseja adicionar o player

```import ReactNetflixPlayer from "react-netflix-player"```

Pronto, seu componente já está pronto para ser utililado, basta criá-lo em seu arquivo.

```<ReactNetflixPlayer/>```

### Observações

Atualmente o componente não trata propriedades filhas (_props.children_).

## Propriedades

### src: string | vídeo

Parâmetro Obrigatório

Vídeo ou endereço do vídeo a ser reproduzido

Ao alterar esse parâmetro todo o estado do componente é restaurado para o inicial, como informações de posição, buffer e controles.

### title: string,

Texto ao ser exibido como título do vídeo em execução, este texto aparece quando o vídeo fica em situação PAUSADO por muito tempo.

Se essa informação não for informada, nenhuma informação será exibida na tela.

### subTitle: string

Texto auxiliar ao parâmetro de _title_, sua informação será exibida abaixo do título se informada.


### titleMedia: string

Texto localizado na barra de controles, seguindo o design da Netflix, este campo contém o Título da Produção em andamento, pode ser usado para inserir o nome da lista de reprodução.

Se não for enviado, nenhuma informação será apresentada na barra de controles

### extraInfoMedia: string

Texto auxiliar ao parâmetro de _titleMedia_, sua informação será exibida ao lado do título se informada.

### fullPlayer: true

Parâmetro informa se player deve ocupar toda a área da WebView, por padrão é setado como _true_

Observações: Esse parâmetro não se refere ao modo FullScreen do navegador. Se esse parâmetro for passado como _false_, o player ocupara a área disponível informada em seu componente pai.

### backButton: false

Informa se o botão de voltar será visível quando os controles estiverem ativos, por padrão ele está desativado.

### autoPlay: false

Informa se o vídeo deverá iniciara automáticamente, por padrão o valor é _false_

### startPosition: 0

Informa em qual segundo a reprodução do vídeo deverá iniciar

### dataNext: {}

Objeto com os dados a serem redenizados na área de *Próximo Vídeo*, este parâmetro não é obrigatório para utilizar a funcionalidade. É possível enviar somente a função a ser executada.

```
    {
        title: 'Texto a ser exebido',
        description: 'Descrição'
    }
```
### reprodutionList: []

Array com itens que compõem a lista de reprodução, devem ser informados já ordenados

Os itens devem ser informados como objetos

```
    {
        id: int // Identificador, será enviado a função informada,
        playing: boolean // Utilizado para diferenciar o item que está em reprodução no momento
    }
```

### onCanPlay: function()

Função disparada no momento em que o vídeo se tornar pronto para reprodução.

Ela tem a mesma função do evento _onCanPlay()_ da tag <video/>, recebendo os mesmo parâmetros da função.

### onTimeUpdate: function()

Função disparada a cada alteração de frames do vídeo.

Ela tem a mesma função do evento _onTimeUpdate()_ da tag <video/>, recebendo os mesmo parâmetros da função.

### onEnded: function()

Função disparada ao término do vídeo

Ela tem a mesma função do evento _onEnded()_ da tag <video/>, recebendo os mesmo parâmetros da função.

### onErrorVideo:  function()

Função disparada quando um erro acontecer na reprodução/busca do vídeo.

Ela tem a mesma função do evento _onErrorVideo()_ da tag <video/>, recebendo os mesmo parâmetros da função.

### onNextClick: function()

Função disparada ao clicar no controle de Próximo Video, sem esse parâmetro o ícone não estará disponível

### onClickItemListReproduction: function()

Função disparada ao selecionar um ítem da lista de reprodução criada com o parâmetro *reprodutionList*, será enviada a função o _id_ relacionado ao item 

### onCrossClick: function()

Função disparada ao fechar o vídeo

Observações: O Fechar vídeo só estará disponível enquanto o vídeo não estiver pronto para reprodução.

Ele foi implementado como fulga do usuário caso o vídeo demore muito a iniciar. O parâmetro não é obrigatório e a sua ausência não remove o ícone de fechar, sendo aconselhável a sua implementação.

### qualities: [] (BETA)

Array com as qualidades da mídia em execução.

Não deve ser implemtado na atual versão do Player


## Eventos

### Erro

Caso ocorra algum erro com o vídeo em execução, será redenizado a informação do erro, com a listagem de outros links, para que o usuário possa tentar reproduzir o vídeo em outra qualidade.

O botão de fechar é exibido

A função _onErrorVideo_ será disparada.

### Controles

Quando o mouse não se move por mais de 5 segundos, automáticamente os controlles são ocultados em tela, voltando a aparecer ao mover o cursor do mouse.

### StandBy

O standby, é uma tela visível quando o vídeo está pausado e não existe moviementos do cursor de mouse.

Ao mover o mouse, ou executar o play pelo *space* o modo é desativado

### Loading

Quando o vídeo está a buscando frames para reprodução e não existem frames suficientes o loading é ativado

## Controles

### Double Click

Coloca player em modo de Tela Cheia ou Sai do modo de tela cheia

### Space

Pausa o vídeo em reprodução ou pausa o vídeo em reprodução

## Modos

### Loading Inicial

![image](https://user-images.githubusercontent.com/25160385/80925819-4e1fa280-8d69-11ea-924f-9343af95c733.png)

Ao exibir o componente, ele inicia a busca dos dados do vídeo, até que o vídeo esteje pronto para reprodução.


### Controles

![image](https://user-images.githubusercontent.com/25160385/80925860-c0908280-8d69-11ea-821a-6dd569328d73.png)

Controles disponível com o vídeo em execução.

Observações: Player configurado com todos os atributos aceitáveis, no modo FullScreen

### StandBy

![image](https://user-images.githubusercontent.com/25160385/80925937-2bda5480-8d6a-11ea-864b-496c1e52b714.png)

Player PAUSADO em estado de standby, as informações do título são redenizadas.