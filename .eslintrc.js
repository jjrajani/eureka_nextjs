module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  globals: {
    React: 'writable',
  },
  extends: [
    'next/core-web-vitals',
    // "plugin:react/recommended",
    // "plugin:react-hooks/recommended",
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    // Turning this off because next/link expects an invalid anchor
    'jsx-a11y/anchor-is-valid': 'off',

    'react/no-unused-prop-types': 'error',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'react/jsx-no-duplicate-props': [
      2,
      {
        ignoreCase: false,
      },
    ],
    'react-hooks/exhaustive-deps': 'error',

    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    // NextJs specific fix: suppress errors for missing 'import React' in files for nextjs
    'react/react-in-jsx-scope': 'off',

    // This is firing becaues of our import process, but tsc would find real issues
    'import/no-unresolved': 'off',

    // ugh; remove these all when possible
    camelcase: 'off',
    'consistent-return': 'warn',
    'import/prefer-default-export': 'warn',
    'no-nested-ternary': 'warn',
    'no-param-reassign': 'warn',
    'no-plusplus': 'warn',
    'no-return-await': 'warn',
    'no-shadow': 'warn',
    'no-undef': 'warn',
    'react/sort-comp': 'warn',
    'no-underscore-dangle': 'off',

    'no-multi-assign': 'warn',
    'react/destructuring-assignment': 'warn',
    'jsx-a11y/aria-role': 'warn',
    'react/prop-types': 'warn',
    'react/no-array-index-key': 'warn',

    'no-cond-assign': 'warn',
    'no-return-assign': 'warn',
    'global-require': 'warn',
    'import/no-dynamic-require': 'warn',
    radix: 'warn',
    'import/order': 'warn',
    'react/forbid-prop-types': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'react/no-unescaped-entities': 'warn',
    'one-var': 'warn',
    'lines-between-class-members': 'warn',
    'no-var': 'warn',
    'prefer-template': 'warn',

    'func-names': 'off',
    'object-shorthand': 'off',

    // some strange thing
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['warn'],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: [
          'node_modules',
          'src', // # <-- app root
        ],
      },
    },
  },
};
