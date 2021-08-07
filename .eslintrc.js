require("./package.json").dependencies.react;
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "eslint:recommended", "google"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "require-jsdoc": 0,
    "react/prop-types": 0,
  },
  settings: {
    react: {
      version: "17.0.2",
    },
  },
};
