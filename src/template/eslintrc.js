// 官网: https://cn.eslint.org/
// npm install --save eslint eslint-config-standard eslint-plugin-standard eslint-plugin-html eslint-plugin-markdown standard
// airbnb风格, 需要安装npm install eslint-config-airbnb
// google风格, 需要安装eslint-config-google

module.exports = {
    // extends: 'airbnb',
    extends: 'eslint:recommended',
    "plugins": [
        "html"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        node: true,
        es6: true,
        browser: true,
    },
    "rules": {
        'no-console': 'off',
        "no-multi-spaces": "error",
        "semi": [2, "always"],
        'indent': ['error', 2],
        'quotes': ['error', 'single'],
    }
};
