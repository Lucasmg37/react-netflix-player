# ⚛ React Netflix Player

## A React Player based in Netflix Designer

ℹ Player de video com as funcionalidades existentes no atual player da Netflix Web.

<p align="center">
    <img alt="Shield" src="https://img.shields.io/bundlephobia/min/react-netflix-player?style=flat-square"/>
    <img alt="Shield" src="https://img.shields.io/github/repo-size/lucasmg37/react-netflix-player?style=flat-square"/>
    <img alt="Shield" src="https://img.shields.io/npm/dw/react-netflix-player?style=flat-square"/>
    <img alt="Shield" src="https://img.shields.io/github/issues/lucasmg37/react-netflix-player?style=flat-square"/>
    <img alt="Shield" src="https://img.shields.io/npm/l/react-netflix-player?style=flat-square"/>
    <img alt="Shield" src="https://img.shields.io/github/stars/lucasmg37/react-netflix-player?style=flat-square"/>
    <img alt="Shield" src="https://img.shields.io/github/last-commit/lucasmg37/react-netflix-player?style=flat-square"/>    
</p>

![Anime-List (1)](https://user-images.githubusercontent.com/25160385/80926822-dbfe8c00-8d6f-11ea-8e39-c24ffc6cfb1b.gif)

<p align=center>
 <a href="#-recursos-implementados">Recursos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-como-utiliza">Como Utilizar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-propriedades">Propriedades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-estilização">Estilização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-eventos">Eventos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-modos">Modos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-controles">Controles</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-ajude-me-a-desenvolver">Como Desenvolver</a>
</p>

### 📦 Recursos implementados

1. Reprodução de vídeos com Loading e Memória temporária (Buffer);
2. Listagem de lista de reprodução com marcação do vídeo atual e auto sequência;
3. Ação para prosseguir para o próximo item;
4. Tratamento de evento de término de vídeo;
5. Recursos de Play/Pause, Avançar/Retroceder e FullScreen;
6. Suporte a múltiplos links de reprodução;
7. Informações da mídia em execução;
8. Playback Rate, Possibilitando alterar a velocidade de Reprodução;
9. Sistema de ocultação dos controles mediante tempo de espera;
10. Customização de cor e fonte;
11. Tratamento de erros;
12. Disponível em Inglês e Português.

### 🧱 Tecnologias

No desenvolvimento desse projeto foi ultilizado

- [React](https://pt-br.reactjs.org/)

- <s>[Sass](https://sass-lang.com/)</s>

- [Styled Components](https://styled-components.com/)

- [Babel](https://babeljs.io/)

- [Webpack](https://webpack.js.org/)

Qualidade de Código

- [ESlint](https://eslint.org/)

- [Prettier](https://prettier.io/)

### ⚙ Como utilizar

Adicione o react-netflix-player em seu projeto executando:

`npm install react-netflix-player`

ou

`yarn add react-netflix-player`

Após realize o _import_ do componente no arquivo que deseja adicionar o player

`import { ReactNetflixPlayer } from "react-netflix-player"`

Pronto, seu componente já está pronto para ser utililado, basta criá-lo em seu arquivo.

`<ReactNetflixPlayer/>`

## 📃 Propriedades

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

Texto localizado na barra de controles, seguindo o design da Netflix, este campo contém o Título da Mídia em reprodução ou o nome da Playlists.

Se não for enviado, nenhuma informação será apresentada na barra de controles.

### extraInfoMedia: string

Texto auxiliar ao parâmetro de _titleMedia_, sua informação será exibida ao lado do título se informada.

### playerLanguage: language

Informa em qual língua os textos do player devem ser mostrados. Por padrão os textos são apresentados em Português.

Línguas disponíveis: pt (Português) e en (Inglês)

👋 Hey! Sabe escrever em outro idioma? Vai ser um prazer receber a sua contribuição.

### overlayEnabled: true

Informa se o modo StandyBy estará ativo. (Tela com informações do vídeo no modo PAUSADO)

Informando _false_, o player não apresentará a tela.

### autoControllCloseEnabled: true

Informa se os controles do player devem se auto ocultar.

Informando _false_ os controles ficarão fixos em tela durante todo o vídeo.

### fullPlayer: true

Parâmetro informa se player deve ocupar toda a área da WebView, por padrão é setado como _true_

Observações: Esse parâmetro não se refere ao modo FullScreen do navegador. Se esse parâmetro for passado como _false_, o player ocupara a área disponível informada em seu componente pai.

### backButton: false

Informa se o botão de voltar ⬅ será visível quando os controles estiverem ativos, por padrão ele está desativado.

### autoPlay: false

Informa se o vídeo deverá iniciar automáticamente, por padrão o valor é _false_;

Obs: Funcionalidade pode apresentar problemas nas versões mas recentes do navegador Chrome, que bloqueia o autoplay de vídeos se não existir uma interação do usuário.

### startPosition: 0

Informa em qual segundo a reprodução do vídeo deverá iniciar

### playbackRateEnable: true

Informa se as opções de Playback Rate podem ser acessadas, por padrão o valor é _true_

### playbackRateOptions: []

Array com as velocidades disponíveis no player.

Valor padrão _['0.25', '0.5', '0.75', 'Normal', '1.25', '1.5', '2']_

Observação: os valores devem ser informados na ordem em que se deseja que sejem listados. O valor _Normal_ poderá ser substituído por _1_, porém, ele sempre será mostrado como **Normal**.

É necessário que o valor **playbackRateEnable** esteje ativado.

### playbackRateStart: 1

Velocidade inicial do vídeo

Valor padrão _1_

### dataNext: {}

Objeto com os dados a serem renderizados na área de _Próximo Vídeo_, este parâmetro não é obrigatório para utilizar a funcionalidade. É possível enviar somente a função a ser executada.

```
    {
        title: 'Texto a ser exibido',
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

Ela tem a mesma função do evento _onCanPlay()_ da tag `<video>`, recebendo os mesmo parâmetros da função.

### onTimeUpdate: function()

Função disparada a cada alteração de frames do vídeo.

Ela tem a mesma função do evento _onTimeUpdate()_ da tag `<video>`, recebendo os mesmo parâmetros da função.

### onEnded: function()

Função disparada ao término do vídeo

Ela tem a mesma função do evento _onEnded()_ da tag `<video>`, recebendo os mesmo parâmetros da função.

### onErrorVideo: function()

Função disparada quando um erro acontecer na reprodução/busca do vídeo.

Ela tem a mesma função do evento _onErrorVideo()_ da tag `<video>`, recebendo os mesmo parâmetros da função.

### onNextClick: function()

Função disparada ao clicar no controle de Próximo Video, sem esse parâmetro o ícone não estará disponível

### onClickItemListReproduction: function()

Função disparada ao selecionar um ítem da lista de reprodução criada com o parâmetro _reprodutionList_, será enviada a função o _id_ relacionado ao item

### onCrossClick: function()

Função disparada ao fechar o vídeo

Observações: O Fechar vídeo só estará disponível enquanto o vídeo não estiver pronto para reprodução.

Ele foi implementado como rota de fulga do usuário caso o vídeo demore muito a iniciar. O parâmetro não é obrigatório e a sua ausência não remove o ícone de fechar, sendo aconselhável a sua implementação.

### qualities: [] (BETA)

Array com as qualidades da mídia em execução.

Não deve ser implemtado na atual versão do Player

## 💅 Estilização

Para alterar as cores do Player e fontes, utilize os seguintes parâmetros.

### primaryColor '#HEX'

Cor de destaque para os intens primários, a cor padrão é a _#03dffc_ para alterar informe a cor desejada em _hexadecimal_, _rgb_ ou _rgba_.

### secundaryColor '#HEX'

Cor de destaque para os intens secundários, a cor padrão é a _#ffffff_ para alterar informe a cor desejada em _hexadecimal_, _rgb_ ou _rgba_.

### fontFamily 'Font'

Fonte informada para _todos_ os textos do player

Valor padrão:

```
-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
```

## 🧨 Eventos

### Erro

Caso ocorra algum erro com o vídeo em execução, será renderizado a informação do erro, com a listagem de outros links, para que o usuário possa tentar reproduzir o vídeo em outra qualidade.

1. O botão de fechar é exibido

2. A função _onErrorVideo_ será disparada.

### Controles

Quando o mouse não se move por mais de 5 segundos, automáticamente os controlles são ocultados em tela, voltando a aparecer ao mover o cursor.

### StandBy

O standby, é uma tela visível quando o vídeo está pausado e não existe movimentos do cursor.

Ao mover o mouse, ou executar o play pelo _space_ o modo é desativado.

### Loading

Quando o vídeo está buscando frames para reprodução e não existem frames suficientes o loading é ativado.

## 🕹 Controles

### Double Click

Ativa/Desativa o FullScreen (Tela cheia).

### Space

Dispara o evento _Pause/Play_

## 🔎 Modos

### Loading Inicial

![image](https://user-images.githubusercontent.com/25160385/80925819-4e1fa280-8d69-11ea-924f-9343af95c733.png)

Ao exibir o componente, ele inicia a busca dos dados do vídeo, até o vídeo estar pronto para reprodução.

### Controles

![image](https://user-images.githubusercontent.com/25160385/80925860-c0908280-8d69-11ea-821a-6dd569328d73.png)

Controles disponível com o vídeo em execução.

Observações: Player configurado com todas as propriedades aceitáveis, no modo FullScreen

### StandBy

![image](https://user-images.githubusercontent.com/25160385/80925937-2bda5480-8d6a-11ea-864b-496c1e52b714.png)

Player PAUSADO em estado de _standby_, as informações do título são renderizadas.

## 👩‍💻 Ajude-me a desenvolver

Para testar/desenvolver o projeto siga os seguintes passos.

### 📦 Requisitos

yarn [⬇ Baixe aqui.](https://yarnpkg.com/)

Git [⬇ Baixe aqui.](https://git-scm.com/)

Com o yarn instalado, faça o clone do projeto

```
    git clone https://github.com/Lucasmg37/react-netflix-player
```

Navegue até a pasta do projeto e instale as dependências

```
    yarn
```

Terminado, você já pode começar a desenvolver

Na pasta _example_ coontém a implementação do player para testes

Para rodar a aplicação, execute

```
    yarn start
```

Um servidor local estará disponível para visualização

Geralmente o endereço será o _http://localhost:8080/_

Caso não seja, verifique o endereço listado em seu terminal após o comando anterior.

✔ O Player será renderizado com um vídeo de teste. Se este estiver indisponível, altere no arquivo _example/index.js_ a propriedade _src_
do componente para um endereço válido.

Para fazer o build, execute

```
    yarn run build
```

O arquivo final estará disponível na pasta _dist_

## ✨ Melhorei o projeto, e agora?

Chegou a hora de virar um contribuidor! Siga estes passos.

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

Em pouco tempo você será retornado.

> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

## ✌️ Contribuidores

| [<img src="https://avatars3.githubusercontent.com/u/38473739?s=115" width="115"><br><small>@Prophetaa</small>](https://github.com/Prophetaa) | [<img src="https://avatars0.githubusercontent.com/u/32423942?s=115"><br><sub>@lfoliveir4</sub>](https://github.com/lfoliveir4) | [<img src="https://avatars0.githubusercontent.com/u/49363242?s=115"><br><sub>@romilodev</sub>](https://github.com/romilodev) | [<img src="https://avatars0.githubusercontent.com/u/1103336?s=115"><br><sub>@ridhwaans</sub>](https://github.com/ridhwaans) |
| :------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | 

## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com ❤ e ☕ por Lucas Dias. 👋🏽 [Entre em contato!](https://www.linkedin.com/in/lucas-junior/)
