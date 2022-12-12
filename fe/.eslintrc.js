module.exports = {
    root: true,
    globals: {
      defineProps: 'readonly',
      defineEmits: 'readonly',
      defineExpose: 'readonly',
      withDefaults: 'readonly',
    },
    extends: ['plugin:@typescript-eslint/recommended'],

    plugins: ['vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
      ecmaVersion: 2021,
      parser: '@typescript-eslint/parser',
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'space-before-function-paren': 0,
      'vue/no-multiple-template-root': 0,
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/no-explicit-any': [0],
      '@typescript-eslint/no-var-requires': 0,
      semi: 0,
      quotes: [2, 'single'],
      'prefer-const': 2,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-inferrable-types': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
    },
  }