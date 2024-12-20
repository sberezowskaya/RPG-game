module.exports = {
  env: {
    browser: true, // Для кода, выполняющегося в браузере
    es2021: true, // Включение современного синтаксиса ES6 и выше
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 12, // Версия ECMAScript для анализа (12 = ES2021)
    sourceType: 'module', // Использование модулей ES6
  },
  rules: {
    strict: ['error', 'global'], // Установить "use strict" глобально
  },
};
