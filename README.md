# Education Platform Hackathon - React & TypeScript

## Descrição

*Adaptive Learning - Plataforma Educacional*

Este projeto é uma plataforma educacional desenvolvida em React, TypeScript, e Node.js, com funcionalidades voltadas para o gerenciamento de disciplinas, integração com APIs e extensibilidade para futuras tecnologias. A aplicação utiliza componentes modernos, responsivos e segue as melhores práticas de desenvolvimento front-end e back-end.

Agora, o projeto conta com as seguintes atualizações:

- **Integração com a API do GPT e AuthService**: A aplicação pode consumir serviços avançados de inteligência artificial e autenticação segura.
- **Tela de Dashboard**: Uma nova tela que apresenta o desempenho individual de cada participante, funcionando como um ponto central de visualização para o MVP (Produto Mínimo Viável).

### Tecnologias Utilizadas
- **React** - Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript** - Superset de JavaScript que adiciona tipagem estática.
- **Node.js** - Ambiente para execução de código JavaScript no lado do servidor.
- **CSS (Tailwind CSS + Animações Customizadas)** - Estilos modernos e responsivos.
- **React Hooks** - Para gerenciamento de estado e manipulação de eventos.
- **Styled Components** - Para criação de estilos reutilizáveis e organizados.
- **FontAwesome** - Ícones vetoriais para enriquecer a interface.

## Gerais

- **Tela de Login**:
  - Validação de campos (e-mail e senha).
  - Indicador de força de senha.
  - Feedback visual para erros e interações.

- **Página Inicial**:
  - Exibição de informações básicas do usuário.
  - Layout adaptativo e responsivo.
 
  - - **Tela de Disciplinas**:
  - Disciplinas recomendadas de acordo com o perfil e nescessidade de cada aluno.
  - Conteúdo ultilizando componentes gamificados.

- **Tela de Dashboard**:
  - Visualização do desempenho individual de cada participante.
  - Design focado em facilitar a análise de dados essenciais.

### Novas Funcionalidades

- **Gerenciamento de Disciplinas**:
  - Cadastro e organização de disciplinas.
  - Visualização e edição de informações das disciplinas.
  - Exclusão de disciplinas.

- **Preparado para Integrações**:
  - Pronto para consumir APIs externas, incluindo GPT e AuthService.
  - Estrutura modular para adição de novos serviços.

- **Extensibilidade**:
  - Uso de Node.js para futuras implementações no back-end.
  - Potencial para adicionar serviços como autenticação OAuth, dashboards personalizados e muito mais.

## Funcionalidades

- **Campos de entrada de usuário e senha** com ícones.
- **Validação de formulário** para garantir a entrada de dados corretos.
- **Indicador de força de senha** que mostra visualmente a segurança da senha inserida.
- **Exibição de erro** com feedback claro para o usuário.
- **Botão de "Esqueci a senha"** para navegação.
- **Botão de login** com feedback visual para interação.
- **Responsividade** para diferentes tamanhos de tela (incluindo dispositivos móveis).

## Como Rodar o Projeto

Para rodar o projeto localmente, siga os seguintes passos:

1. **Clone o repositório**
   ```bash
   git clone https://github.com/usuario/repositorio.git
   ```

2. **Navegue até o diretório do projeto**
   ```bash
   cd nome-do-diretorio
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   ```

5. **Acesse a aplicação no navegador**
   Abra o navegador e vá para [http://localhost:3000](http://localhost:3000).

### Scripts Disponíveis
- `npm start`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria a versão de produção do aplicativo.
- `npm test`: Executa os testes de unidade.
- `npm run lint`: Verifica erros de estilo e formatação.

### Dependências
Este projeto utiliza as seguintes dependências:
- **react**: A biblioteca React para construir a UI.
- **react-dom**: Manipula o DOM com React.
- **typescript**: Adiciona tipagem estática ao projeto.
- **react-scripts**: Scripts do React para inicializar e empacotar o projeto.
- **tailwindcss**: Framework CSS para estilos rápidos e responsivos.
- **font-awesome**: Ícones vetoriais (opcional, se for utilizado).

## Pré-requisitos
- Node.js instalado (versão 16 ou superior recomendada).
- Gerenciador de pacotes npm ou yarn.

## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.
