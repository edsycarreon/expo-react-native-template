module.exports = {
  extends: [
    "expo",
    "prettier",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: [
    "prettier",
    "@typescript-eslint",
    "react",
    "react-hooks",
    "import",
    "sort-destructure-keys",
    "sort-keys-fix",
  ],
  ignorePattenrs: ["babel.config.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off",
    "sort-destructure-keys/sort-destructure-keys": ["error", { caseSensitive: false }],
    "sort-keys-fix/sort-keys-fix": "warn",
    "array-bracket-spacing": ["error", "never"],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "always"],
    "brace-style": "error",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        exports: "always-multiline",
        functions: "only-multiline",
        imports: "always-multiline",
        objects: "always-multiline",
      },
    ],
    "comma-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
    curly: "error",
    "eol-last": ["error", "always"],
    eqeqeq: ["error", "always"],
    "func-names": "error",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
      },
    ],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": [
      "error",
      {
        mode: "strict",
      },
    ],
    "max-depth": ["error", 3],
    "max-len": [
      "error",
      {
        code: 125,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "max-params": ["error", 3],
    "no-alert": "error",
    "no-console": "warn",
    "no-duplicate-imports": "error",
    "no-empty-function": "warn",
    "no-extra-boolean-cast": "warn",
    "no-extra-semi": "warn",
    "no-multi-spaces": "warn",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 0,
      },
    ],
    "no-plusplus": "warn",
    "no-trailing-spaces": "warn",
    "no-unreachable": "error",
    "no-unused-expressions": "warn",
    "no-var": "error",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        next: "return",
        prev: "*",
      },
    ],
    "prefer-arrow-callback": "warn",
    "prefer-const": "error",
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
      },
    ],
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        ignoreCase: true,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    "react/prefer-stateless-function": "error",
    semi: ["error", "always"],
    "semi-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
    "sort-keys": [
      "error",
      "asc",
      {
        caseSensitive: true,
        minKeys: 2,
        natural: false,
      },
    ],
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        asyncArrow: "always",
        named: "never",
      },
    ],
    "space-in-parens": ["error", "never"],
  },
};
