# evinova-test

This repository contains two end-to-end test suites:

- `test-web`: built with **Cypress** and **Cucumber (Gherkin)** to ensure high-confidence quality assurance testing for the frontend application.
- `test-api`: ...

It follows a **Behavior-Driven Development (BDD)** approach using human-readable feature files and reusable step definitions written in **TypeScript**.

# 🚀 Getting Started

## 🔧 Prerequisites

- Node.js >= 18.x
- npm

## 📦 Install Dependencies

npm install

# 🧪 Running the Tests

## ✅ Run Cypress in Interactive Mode (UI)

```bash
npx cypress open
```

This will open the Cypress Test Runner, allowing you to select and run feature files in an interactive browser window.

## ⚙️ Run Tests in Headless Mode (CI / Terminal)

```bash
npx cypress run
```

# Lint & Format

```
npm run lint
npm run format
```
