module.exports = {
  "parser": "@babel/eslint-parser",
  "env": {
      "browser": true,
      "node": true,
      "jest": true
  },
  "extends": [
    "airbnb"
  ],
  "rules": {
    "indent": [2, 2],
    "react/jsx-indent": ["error", 2],
    "import/prefer-default-export": "off"
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true,
      "classes": true
    }
  },
  "settings": {
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    }
};
