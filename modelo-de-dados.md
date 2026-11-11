# Modelo de dados (proposta)

Estrutura sugerida para o Cloud Firestore. Ainda não implementada.

```
usuarios/{uid}
  nome, email, criadoEm

usuarios/{uid}/missoes/{missaoId}
  titulo, criadaEm, concluida (bool)
  etapas: [ { texto, concluida } ]

usuarios/{uid}/sessoesFoco/{sessaoId}
  missaoId, inicio, duracaoMin, concluida (bool)

usuarios/{uid}/reflexoes/{reflexaoId}
  missaoId, texto, criadaEm
```

Regra de segurança: o usuário autenticado só lê e grava documentos dentro de `usuarios/{seu uid}`.

```
match /usuarios/{uid}/{documento=**} {
  allow read, write: if request.auth != null && request.auth.uid == uid;
}
```
