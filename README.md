# AZ-900 Pulse

Aplicação web leve para simulados do exame Microsoft AZ-900.

## Como executar

Como é uma SPA estática, basta abrir o `index.html` no navegador ou usar um servidor local:

```bash
python3 -m http.server 4173
```

Depois acesse: `http://localhost:4173`.

## O que já está pronto

- Simulados com 10 ou 15 questões.
- Perguntas com foco no escopo clássico do AZ-900.
- Feedback imediato por questão.
- Relatório final com desempenho geral e por tópico.
- Persistência de última tentativa no `localStorage`.
- Estrutura inicial de configurações para futura integração com IA (API endpoint, API key e upload de documento).

## Backbone para futura IA

A interface de configurações já permite salvar localmente:

- Endpoint da API de IA.
- API key.
- Último arquivo de upload selecionado.

Em uma próxima iteração, você pode plugar uma camada `AiQuestionService` que:

1. Faça upload de documentos para ingestão.
2. Solicite geração/validação automática de perguntas.
3. Retorne questão + opções + explicação no formato usado pelo `QUESTION_BANK`.
