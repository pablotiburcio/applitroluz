<div align="center">
 <img src="/assets/icon.png" width="100"/>
 
 <h1>App Litro de Luz</h1>
</div>
Projeto do aplicativo para a gerência de soluções da Litro de Luz Brasil em parceria com o IFAL através do Oficinas 4.0.<br/>
Aplicativo será desenvolvido em [React Native](https://reactnative.dev). Siga as intruções a baixo para instalar, configurar e executar o aplicativo do projeto.

## Instalação e Configuração
Siga o passo a passo descrito [neste link](https://www.notion.so/Configura-es-do-ambiente-79e0e4c3e992462a9b11f2745b0f2785).<br/>

## Como Executar

Realize esses comandos em um terminal a parte, ou no próprio terminal integrado do VS Code.
1. Faça um clone desse repositório na sua máquina:
``` sh
 $ git clone https://github.com/pablotiburcio/applitroluz
``` 
2. Instale as dependências do projeto, com o seguinte comando:
``` sh
 $ yarn
```

  **Observação:** não utilize os comandos do NPM, vamos utilizar desde o início o Yarn. 
  Caso você rode algum comando com o NPM vai aparecer um arquivo chamado **package-look.json**. 
  Dentro deste arquivo vão estar os pacotes que foram instalados com o NPM. 
  Copie os nomes dos pacotes, apague o arquivo e instale usando o Yarn. 

3. Abra o aplicativo do Expo no telefone:
4. Execte o comando no terminal:
``` sh
 $ yarn start #OU expo start
```
5. No terminal vai começar a executar o build do Expo e em seguida iniciar o navegador.<br/>
  5.1 Eu acho que demora demais ficar esperando o navegador, então quando você rodar a primeira vez, abra o terminal onde o expo está rodando e tecle **d**, assim ele vai parar de executar no navegador e você pode escanear o QR Code direto do terminal.
6. Então, no aplicativo do Expo toque em Scanear QR Code e escaneie o QR Code que aparece na tela do terminal.
7. Vai iniciar o carregamento do aplicativo, aparecerá a splash screen do Expo. Depois de um tempo vai mostrar que está carregando o bandle JavaScript. No início isso demora um pouco, mas depois fica mais rápido.
8. Pronto, será apresentada a tela inicial com o nome: "Open up App.tsx to start working on your app!" ou traduzindo "Abra o arquivo App.tsx para começar a trabalhar no seu app!". Pronto, **working on!**

## Dicas para a sprint 1
1. Para entender os principais componentes do React Native acesse a [página dos componentes principais](https://reactnative.dev/docs/components-and-apis).
2. Para saber como fazer navegação entre telas, olhe [esse tutorial](https://reactnative.dev/docs/navigation#react-navigation).
Acho que esses dois primeiros pontos serão muito úteis para fazer os desafios da sprint 1.
3. O tutorial que tem na documentação do **Expo** traz um processo mais **step by step** que pode ser útil quando tiver alguma dúvida.[clique aqui](https://docs.expo.io/get-started/installation).
4. Se quiser entender mais a teoria do React Native pode dar uma olhada na [documentação inicial deles](https://reactnative.dev/docs/getting-started).
