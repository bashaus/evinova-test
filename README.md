# evinova-test

This repository serves as a comprehensive quality assurance testing suite for the Evinova testing interview assessment. It covers both **frontend** and **API** layers with dedicated frameworks and follows best practices in test automation.

## Overview

This monorepo includes two end-to-end test suites:

### Part 1. `test-web`

- Framework: **Cypress**, **Cucumber**, **TypeScript**
- Pattern: **BDD** (Behavior-Driven Development)
- Directory: [./test-web](./test-web)
- Features:
  - Feature files in **Gherkin** syntax
  - Reusable and composable step definitions

### Part 2. `test-api`

- Framework: **Jest**, **Zod**
- Pattern: Modular structure with dynamic mock data
- Directory: [./test-api](./test-api)
- Features:
  - Tests the **Reqres API** for user retrieval, creation, and error handling.
  - Schema validation with **Zod**
  - Utilizes **faker** and **fishery** for dynamic test data generation.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.org/) 11.4.2

### Install Dependencies

```bash
npm install
```

### Additional Features

- Monorepo structure built with **turborepo**.
- Keeps relevant code files clean with **prettier**.
- Uses **eslint** to ensure high quality coding.
- Implements **husky** for pre-commit hooks.
- Uses commitlint to check the quality of git commit messages.
- Contains a list of vscode extensions.
- Utilises **.editorconfig** to ensure consistent code formatting.
