import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    rules: {
      semi: "error",
      quotes: ["error", "single"]
    }
  }
];
