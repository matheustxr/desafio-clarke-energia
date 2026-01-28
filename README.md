# ⚡ Desafio Clarke Energia

Aplicação single-page (SPA) para comparar ofertas de fornecimento de energia. O usuário informa o estado e o consumo mensal e visualiza soluções disponíveis (Geração Distribuída e Mercado Livre), com estimativas de economia entre fornecedores.

Desenvolvido como projeto técnico para a vaga de Full Stack Developer.

---

## 🚀 Tecnologias

- Arquitetura: Monorepo
- Frontend: React (Vite) + TypeScript, Apollo Client, CSS puro
- Backend: Node.js + TypeScript, Apollo Server (GraphQL)
- Testes: Jest (unitários) e Cypress (E2E)
- Infra: Docker & Docker Compose

---

## 📦 Executando o projeto

Pré-requisitos: Docker e Docker Compose instalados (recomendado). Alternativamente, pode rodar os serviços localmente com Node.js e npm.

### Opção A — Com Docker (recomendado)
Na raiz do projeto execute:

```bash
docker compose up --build
```

- Frontend: http://localhost:5173
- Backend (GraphQL): http://localhost:4000

### Opção B — Local (sem Docker)

1) Backend

```bash
cd server
npm install
npm run dev
# servidor em http://localhost:4000
```

2) Frontend

```bash
cd client
npm install
npm run dev
# cliente em http://localhost:5173
```

---

## ✅ Testes

### Backend (Jest)

```bash
cd server
npm test
```

### Frontend (Cypress E2E)

1. Certifique-se que backend e frontend estão rodando.
2. Execute:

```bash
cd client
npx cypress run
```

Para abrir a UI do Cypress use `npx cypress open`.

---

## 📂 Estrutura do projeto (tree)

```
desafio-clarke-energia/
├── docker-compose.yml
├── README.md
├── client/
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.app.json
│	│   ├── tsconfig.json
│	│   ├── tsconfig.node.json
│	│   ├── vite.config.ts
│	│   ├── index.html
│	│   ├── cypress.config.ts
│	│   ├── eslint.config.js
│	│   ├── README.md
│	│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── App.css
│       ├── assets/
│       ├── graphql/
│       │   └── queries.ts
│       ├── lib/
│       │   └── apollo.ts
│       └── ...
│       └── cypress/
│           ├── e2e/
│           │   └── simulation.cy.ts
│           ├── fixtures/
│           │   └── example.json
│           └── support/
│               ├── commands.ts
│               └── e2e.ts
│
├── server/
│   ├── Dockerfile
│   ├── package.json
│   ├── jest.config.js
│   ├── tsconfig.json
│   └── src/
│       ├── index.ts
│       ├── db.ts
│       ├── resolvers.ts
│       ├── resolvers.test.ts
│       └── ...
```

---

## 🛠️ Observações técnicas

- O backend expõe um endpoint GraphQL; as queries do frontend estão em `client/src/graphql`.
- Os testes unitários cobrem regras de negócio importantes (filtros por estado, consumo mínimo, cálculo de economia).
