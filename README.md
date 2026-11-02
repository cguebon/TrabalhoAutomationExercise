# Automation Exercise — Testes E2E

Projeto de testes automatizados para o site [Automation Exercise](https://automationexercise.com), implementando os casos de teste 1, 2, 3, 4, 5, 8, 9, 10, 15 e 16.

## Tecnologias

- [Playwright](https://playwright.dev/) — framework de testes E2E
- GitHub Actions — pipeline de integração contínua

## Casos de Teste Implementados

| Arquivo | Caso | Descrição |
|---|---|---|
| `tc01-register-user.spec.js` | TC01 | Register User |
| `tc02-login-correct.spec.js` | TC02 | Login com credenciais corretas |
| `tc03-login-incorrect.spec.js` | TC03 | Login com credenciais incorretas |
| `tc04-logout.spec.js` | TC04 | Logout User |
| `tc05-register-existing-email.spec.js` | TC05 | Cadastro com e-mail já existente |
| `tc08-products-page.spec.js` | TC08 | Verificar página de produtos e detalhe |
| `tc09-search-product.spec.js` | TC09 | Buscar produto |
| `tc10-subscription-home.spec.js` | TC10 | Verificar Subscription na home |
| `tc15-place-order-register-before.spec.js` | TC15 | Pedido: Register before Checkout |
| `tc16-place-order-login-before.spec.js` | TC16 | Pedido: Login before Checkout |

## Estrutura do Projeto

```
├── pages/           # Page Object Model
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── SignupPage.js
│   ├── ProductsPage.js
│   └── CheckoutPage.js
├── helpers/
│   ├── userData.js  # Gerador de dados de teste
│   └── actions.js   # Ações reutilizáveis (register, login, delete)
├── tests/           # Casos de teste
├── .github/workflows/ci.yml
└── playwright.config.js
```

## Como executar localmente

```bash
npm install
npx playwright install chromium
npm test
```

Para ver o relatório HTML após a execução:

```bash
npm run report
```

## Pipeline GitHub Actions

A pipeline roda automaticamente em:
- **Push** para a branch `main`
- **Execução manual** via workflow_dispatch
- **Agendado** toda segunda a sexta às 08:00 UTC

O relatório HTML é salvo como artefato por 30 dias na aba **Actions**.
