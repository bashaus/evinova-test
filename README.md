# evinova-test

This repository contains two end-to-end test suites:

- `test-web`: built with **Cypress** and **Cucumber (Gherkin)** to ensure high-confidence quality assurance testing for the frontend application. It follows a **Behavior-Driven Development (BDD)** approach using human-readable feature files and reusable step definitions written in **TypeScript**.
- `test-api`: an API automation framework using **Jest** for testing and **Zod** for schema validation. It features a modular design, tests the Reqres API for user retrieval, creation, and error handling and uses **faker** and **fishery** for dynamic data.

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js >= 18.x
- npm

### 📦 Install Dependencies

```bash
npm install
```

## Lint & Format

```bash
npm run lint
npm run format
```
