# Instalação e execução

## Pré-requisitos

- Navegador atualizado
- Git
- Python 3 (apenas para abrir um servidor local) <!-- TODO: confirme como você roda hoje em localhost:8000 -->

## Passos

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
cd SEU-REPOSITORIO
python3 -m http.server 8000
```

Abra `http://localhost:8000` (página do projeto) e `http://localhost:8000/prototipo.html` (protótipo).

## Testes

<!-- TODO: se o projeto tiver testes automatizados, coloque o comando aqui. Caso contrário, apague esta seção. -->
O projeto ainda não tem testes automatizados. A verificação é manual: abrir cada tela e conferir os fluxos principais.

## Firebase (quando integrado)

1. Crie um projeto no Firebase e ative Authentication e Cloud Firestore.
2. Copie as configurações do app web para um arquivo de configuração local.
3. Aplique as regras de segurança descritas em `modelo-de-dados.md`.

Não publique senhas, tokens ou chaves privadas no repositório.
