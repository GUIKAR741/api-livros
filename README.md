# api-livros
Exemplo de API simples de cadastro de livros

## Pré requisitos:
* Docker
    Caso não possua Docker instalado, veja sua instalação.
    * [Instalação no Windows](https://docs.microsoft.com/pt-br/virtualization/windowscontainers/manage-docker/configure-docker-daemon)
    * [Instalação no Linux](https://www.hostinger.com.br/tutoriais/install-docker-ubuntu)
* docker-compose compatível com a versão 3
    Veja aqui como instalar o docker-compose.
    * [Como instalar e executar o docker-compose](https://www.alura.com.br/artigos/compondo-uma-aplicacao-com-o-docker-compose)
* npm
    Instalação do nodeJS e npm
    * [Instalaço no Windows](https://dicasdejavascript.com.br/instalacao-do-nodejs-e-npm-no-windows-passo-a-passo/)
    * [Instalação no linux](https://www.digitalocean.com/community/tutorials/como-instalar-o-node-js-no-ubuntu-16-04-pt)
* insomnia (Realização de chamadas a api e teste)
    Instalação do Insomnia
    * [Insomnia](https://support.insomnia.rest/article/23-installation)
    
## Como executar:
  1. Faça o download do repositório.
  2. Abra o terminal no diretório __api_livros__ e execute o comando __npm install__, aguarde a instalação dos módulos da API.
  3. Vá até o diretório raiz do projeto, e execute o comando __docker-compose up__, aguarde o início dos containeres.
  4. Importe a documentação da API a partir do arquivo __requisicoes.json__ no Insomnia.
  
