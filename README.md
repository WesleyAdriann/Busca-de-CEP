Busca de CEP - Versão 2
============
[Versão 1](https://github.com/WesleyAdriann/busca_de_cep/tree/version_1)

## 📝 Descição

Site de busca de cep criado utilizando React e a api ViaCep. Criado com o objetivo de exercitar a construção de paginas React utilizando Typescript.

## 📂 Hierarquia de diretórios

- **/nginx** diretório onde fica o arquivo de configuração do nginx para produção;
- **/public** diretório onde o react injeta o javascript/typescript durante o desenvolvimento;
- **/build** diretório criado apos executar o comando *build*, onde fica localizado os arquivos para produção;
- **/src** diretório onde os arquivos do desenvolvimento ficam localizados;
  - **/assets** diretorio onde os arquivos de fontes e imagens ficam localizados;
  - **/services** diretório onde ficam localizados o uso de serviços externos ficam localizados, como requisições HTTP;
  - **/settings** diretório onde centraliza configurações e textos importantes ficam localizadas;
  - **/styles** diretorio onde ficam os estilos globais, cores e fontes ficam localizadas;
  - **/pages** diretorio onde as paginas ficam localizadas.

## 📄 Pré-requisitos

- [Node](https://nodejs.org/)
- [npm](https://www.npmjs.com) ou [yarn](https://yarnpkg.com/)

## 👨‍💻 Usando
### 💻 Sem Docker
No diretorio, instale as dependências
```bash
# se utilziar npm
npm install
# se utilziar yarn
yarn install
```
Agora inicie o servidor de desenvolvimento
```bash
# se utilziar npm
npm start
# se utilziar yarn
yarn start
```
A aplicação ficará disponivel em [http://localhost:3000](http://localhost:3000).
### 🐋 Com Docker (Recomendado)
No diretório, crie a build da imagem Docker
```bash
# docker image build -t <NOME_IMAGEM> <DIRETORIO_DOCKERFILE>
docker image build -t <NOME_IMAGEM> .
```
Agora execute o container utilizando a imagem
```bash
# docker run -p <PORTA_PC>:<PORTA_CONTAINER> <NOME_IMAGEM>
docker run -p 3000:3000 <NOME_IMAGEM>
```

## 🌐 Deploy (Produção)
### 💻 Sem Docker
No diretório, instale as dependências
```bash
# se utilziar npm
npm install
# se utilziar yarn
yarn install
```
Agora execute o comando build, para criar uma versão mimificada
```bash
# se utilziar npm
npm run build
# se utilziar yarn
yarn build
```
Será criada uma pasta chamada /build com os arquivos. Agora insira em um servidor HTTP. [Mais informações](https://create-react-app.dev/docs/deployment/).

###  🐋 Com Docker (Recomendado)
No diretório, crie a build da imagem Docker
```bash
# docker image build -t <NOME_IMAGEM>  -f <NOME_DOCKERFILE> <DIRETORIO_DOCKERFILE>
docker image build -t <NOME_IMAGEM> -f DockerfileBuild .
```
Agora execute o container utilizando a imagem
```bash
# docker run -p <PORTA_PC>:<PORTA_CONTAINER> <NOME_IMAGEM>
docker run -p 80:80 <NOME_IMAGEM>
```
Aplicação estará disponivel em [http://localhost:80](http://localhost:3000)

## 🛠 Criado com

- [Axios](https://github.com/axios/axios)
- [Create React App](https://create-react-app.dev)
- [ReactJs](https://reactjs.org)
- [Styled Components](https://www.styled-components.com)
- [Typescript](https://www.typescriptlang.org/)

## 👥 Autores
- Wesley Adriann
  - Github: [wesleyadriann](https://github.com/WesleyAdriann)
  - LinkedIn: [in/wesleyadriann](https://www.linkedin.com/in/wesleyadriann/)

## ↪ Status do projeto

- **Finalizado**

## 📍 URL do Projeto

- [https://github.com/WesleyAdriann/busca_de_cep](https://github.com/WesleyAdriann/busca_de_cep)
