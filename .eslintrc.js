module.exports = {
  env: {
    // 전역 변수 사용을 정의합니다. 추가하지 않으면 ESLint 규칙에 걸리게 됩니다.
    browser: true,
    es6: true,
    node: true
  },
  extends: ['next/core-web-vitals', 'airbnb', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser', // ESLint 파서를 지정합니다.
  parserOptions: {
    ecmaFeatures: {
      jsx: true // JSX를 파싱할 수 있습니다.
    },
    ecmaVersion: 12, // Modern ECMAScript를 파싱할 수 있습니다.
    sourceType: 'module' // import, export를 사용할 수 있습니다.
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off'
  },
  settings: {
    react: {
      version: 'detect' // 현재 사용하고 있는 react 버전을 eslint-plugin-react가 자동으로 감지합니다.
    }
  }
};
