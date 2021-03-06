<div align="center">
 <img src="/assets/litro-de-luz-icon.png" width="100"/>
 
 <h1>App Litro de Luz</h1>
</div>
Repositório o aplicativo para a gerência de soluções da Litro de Luz Brasil em parceria com o IFAL através do Oficinas 4.0.<br/>
Aplicativo será desenvolvido em [React Native](http://reactnative.dev). Siga as intruções a baixo para instalar, configurar e executar o aplicativo do projeto.

## Instalação e Configuração
Siga o passo a passo descrito [neste link](https://www.notion.so/Configura-es-do-ambiente-79e0e4c3e992462a9b11f2745b0f2785).<br/>

## Como Executar

Realize esses comandos em um terminal aparte, ou no próprio terminal integrado do VS Code.
1. Faça um clone desse repositório na sua máquina:
``` sh
 $ git clone https://github.com/pablotiburcio/applitroluz
``` 
2. Instale as dependências do projeto, com o seguinte comando:
``` sh
 $ yarn
```

  **Observação:** **_não utilize_** os comandos com NPM, vamos utilizar desde o início o Yarn. 
  Caso você rode algum comando com o NPM vai aparecer um arquivo chamado **package-look.json**. 
  Dentro deste arquivo vão estar os pacotes que foram instalados com o NPM. 
  Copie os nomes dos pacotes, apague o arquivo e instale usando o Yarn. 
  
  **Observação 2:** decidimos por ejetar o Expo do projeto devido as limitações das imagens (quando estamos no managed workflow, não temos acesso as pastas android e ios do aplicativo). Então agora usamos o projeto puro (Bare Workflow) do React Native e continuamos utilizando as vantagens do Expo através do Unimodules. **Então como exectuar o aplicativo agora?**

3. Pode-se rodar no dipostivo físico emulando diretamente pelo cabo USB ou utilizar o mesmo aplicativo Expo Go que utilizávamos no Managed.
4. **Usando o Expo Go:** rode o comando `expo start` e escaneie o QR Code como o costume.
5. **Usando o cabo USB:** rode o comando `yarn start` para se conectar ao dispositivo. Link para melhores explicações [aqui](http://reactnative.dev/docs/running-on-device)

## Patterns
Padrões definidos em reunião:
1. Sempre dar um pull quando for começar a trabalhar.
2. Sempre dar um pull quando for dar um push na sua branch de trabalho.
3. Sempre utilizar o Yarn ao invés do NPM. Quando vir um npm install .... pode substituir por yarn add … que geralmente dá certo. Se não der certo é sinal que o nome do pacote no yarn pode está diferente.
4. Nome de `variáveis`, `funções`, `arquivos` e `componentes` sempre em inglês e corretamente escritos.
5. Componentes como constantes:
```tsx
import React from 'react';
import {
   View,
} from 'react-native'

import { styles } from './styles';

interface Props {
   
}
export const Component = ({}: Props) => {
  
  return (
    <View>

    </View>
  );
}
```
6. Pages como funções:
```tsx
import React from 'react';
import {
   View,
} from 'react-native'

import { styles } from './styles';

export function Screen() {
  
  return (
    <View>

    </View>
  );
}
```
7. Styles como objeto StyleSheet:
```tsx
import { StyleSheet } from 'react-native';
 
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
```
**Dica:** use os snippets disponíveis [aqui](https://github.com/LucasBarbosaSilva/snippets) para facilitar na hora de construir os componentes.

8. Variáveis booleanas em forma de pergunta: 
```tsx
const [isNotKnow, setIsNotKnow] = useState(false);
```
9. Todo componente/página deve ser criado com uma pasta separada, dentro dela há um arquivo **index.tsx** e um arquivo **styles.ts**.

![image](https://user-images.githubusercontent.com/58981172/131723093-bbf5712e-0f8f-4877-8e11-89f0717344d4.png)
