import eslintConfig from "@repo/eslint-config";

const config = [
  ...eslintConfig.configs.base,
  {
    ignores: ["coverage/*", "apps/*", "packages/*"],
  },
];

export default config;
