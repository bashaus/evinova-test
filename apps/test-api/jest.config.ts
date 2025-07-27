import type { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";

import { compilerOptions } from "./tsconfig.json";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}", "!**/*.d.ts"],
  moduleFileExtensions: ["js", "ts"],
  roots: ["<rootDir>/tests", "<rootDir>/src"],
  setupFiles: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  reporters: [
    "default",
    [
      "jest-junit",
      { outputDirectory: "reports/junit", outputName: "junit.xml" },
    ],
  ],
  verbose: true,
};

export default config;
