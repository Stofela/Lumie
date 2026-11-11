# Instalação e execução

## Requisitos

- Navegador atualizado.
- Python 3 para iniciar um servidor local simples (opcional).

## Executar localmente

Na pasta raiz do repositório, execute:

```bash
python3 -m http.server 8000
```

Acesse:
- Página pública do projeto: `http://localhost:8000/`
- Aplicação Lumiê: `http://localhost:8000/app/`
- Página Sobre: `http://localhost:8000/app/sobre.html`
- Interface de login: `http://localhost:8000/app/login.html`

## Identidade visual

Os arquivos `lumie-logo-t.png` e `lumie_simbolo_circular.png` são referenciados pelas páginas da aplicação. Eles não estavam disponíveis no pacote revisado. Se estiverem no repositório original, mantenha-os e coloque-os dentro de `app/`, sem renomeá-los.

## Firebase

O arquivo `app/firebase.js` inicializa o Firebase e importa funções do Firebase Authentication. Os formulários ainda precisam ser conectados a essas funções e testados. Não inclua senhas, tokens privados ou credenciais administrativas no repositório.

## Publicação no GitHub Pages

A página de apresentação está na raiz do repositório. Para publicá-la, nas configurações do GitHub Pages selecione a branch `main` e a pasta `/ (root)`. A aplicação fica na pasta `app/` e é acessada pelo endereço `https://stofela.github.io/Lumie/app/`.
