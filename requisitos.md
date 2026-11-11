# Requisitos

> Rascunho baseado na apresentação do projeto. Revise e ajuste conforme o que foi decidido.

## Escopo

O Lumiê ajuda estudantes de graduação a estudar com foco e autorregulação, usando missões, modo foco e progresso visual. Não faz parte do escopo atual substituir um ambiente virtual de aprendizagem nem entregar conteúdo de disciplinas.

## Requisitos funcionais

| ID | Requisito | Estado |
|---|---|---|
| RF01 | O usuário cria uma conta e faz login | Planejado |
| RF02 | O usuário cria uma missão e a divide em etapas | Em desenvolvimento |
| RF03 | O usuário inicia uma sessão no Modo Foco para uma etapa | Em desenvolvimento |
| RF04 | O usuário marca etapas e missões como concluídas | Em desenvolvimento |
| RF05 | O usuário vê o progresso (concluídas e pendentes) em gráfico | Em desenvolvimento |
| RF06 | O usuário registra uma autorreflexão ao concluir uma missão | Planejado |
| RF07 | Os dados do usuário ficam salvos entre sessões | Planejado |

## Requisitos não funcionais

| ID | Requisito |
|---|---|
| RNF01 | Interface responsiva (celular e computador) |
| RNF02 | Acessível: contraste adequado, navegação por teclado, textos alternativos |
| RNF03 | Cada usuário só acessa os próprios dados (regras do Firestore) |
| RNF04 | Nenhuma chave privada ou senha publicada no repositório |
| RNF05 | Dados dos estudantes nos testes só são usados com autorização |

## Histórias de usuário

- Como estudante, quero dividir um trabalho grande em etapas pequenas para saber por onde começar.
- Como estudante, quero um modo sem distrações para conseguir terminar uma etapa.
- Como estudante, quero ver meu progresso para me sentir motivado a continuar.
- Como estudante, quero refletir sobre o que aprendi para entender o que funciona melhor para mim.

## Critérios de aceitação (exemplo)

- **RF04:** ao marcar a última etapa de uma missão, a missão aparece como concluída e o progresso é atualizado sem recarregar a página.
