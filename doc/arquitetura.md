# Arquitetura — Lumiê

## Visão geral

A versão atual é uma aplicação web estática composta por páginas HTML, uma folha de estilos CSS e arquivos JavaScript.

```text
Navegador
  ├── index.html
  ├── sobre.html
  ├── login.html
  ├── style.css
  ├── script.js
  └── firebase.js
        └── Firebase Authentication (SDK web importado)
```

## Componentes existentes

- **HTML:** estrutura e conteúdo das páginas.
- **CSS:** identidade visual roxo/azul, layout e regras responsivas.
- **JavaScript:** alternância entre as áreas de login e cadastro; funções iniciais de missão/foco.
- **Firebase:** o arquivo `firebase.js` inicializa o aplicativo Firebase e obtém a instância de Authentication, além de exportar funções do SDK.

## Estado da integração

A configuração do Firebase está presente no código, mas a página `login.html` ainda não chama `createUserWithEmailAndPassword` ou `signInWithEmailAndPassword`. Portanto, a autenticação pela interface não deve ser apresentada como concluída.

O Firestore e a persistência de missões, sessões e reflexões não estão implementados nesta versão.

## Evolução arquitetural prevista

1. Conectar a interface ao Firebase Authentication.
2. Definir fluxo de sessão e saída da conta.
3. Definir modelo de dados e regras de segurança antes de armazenar informações pessoais.
4. Implementar as funcionalidades de estudo.
5. Testar permissões e acesso por usuário.

## Segurança

A configuração web do Firebase identifica o projeto e não substitui regras de segurança. A proteção deve ser garantida por configuração adequada do Authentication e por regras restritivas nos serviços Firebase utilizados. Nunca publique senhas, tokens privados, chaves de serviço ou arquivos de credenciais administrativas.
