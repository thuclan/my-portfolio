module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": 0,
    "no-console": ["warn", { allow: ["error"] }],
    "no-unused-vars": ["warn"],
    "no-underscore-dangle": 0,
    "arrow-body-style": ["error", "as-needed"],
    "object-curly-newline": 0,
    "operator-linebreak": 0,
    "implicit-arrow-linebreak": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react/function-component-definition": [
      "error",
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "react/jsx-indent-props": "warn",
    "react/jsx-one-expression-per-line": 0,
    "react-hooks/exhaustive-deps": 0,
    "react/display-name": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-wrap-multilines": [
      "error",
      { declaration: false, assignment: false },
    ],
    "react/jsx-curly-newline": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/interactive-supports-focus": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.js",
          "**/*.spec.js",
          "**/*.test.jsx",
          "**/*.spec.jsx",
          "**/setupTests.js",
          "**/sw.js",
        ],
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
      },
    ],
  },
};
