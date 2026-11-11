# Modelo de dados — proposta futura

## Situação atual

Não há persistência de missões, sessões de foco ou reflexões implementada no código entregue. O modelo abaixo é uma proposta para orientar uma etapa futura, não uma descrição de banco já existente.

## Coleções sugeridas (Firestore)

### `users`
- `displayName`: nome de exibição;
- `email`: e-mail da conta;
- `createdAt`: data de criação.

### `missions`
- `userId`: identificador do usuário proprietário;
- `title`: nome da atividade;
- `description`: descrição opcional;
- `status`: estado da missão;
- `createdAt`: data de criação;
- `completedAt`: data de conclusão, quando houver.

### `focusSessions`
- `userId`: identificador do usuário proprietário;
- `activity`: atividade estudada;
- `durationMinutes`: duração da sessão;
- `startedAt`: início;
- `endedAt`: término.

### `reflections`
- `userId`: identificador do usuário proprietário;
- `text`: reflexão escrita pelo usuário;
- `createdAt`: data de registro.

## Regras de acesso previstas

Cada usuário deve poder consultar e alterar somente os próprios registros. As regras devem validar a autenticação e comparar o UID autenticado com o `userId` do documento. As regras definitivas precisam ser implementadas e testadas antes de armazenar dados reais.
