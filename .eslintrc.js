module.exports = {
  "root": true,
  "env": {
    "browser": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:jsx-a11y/recommended", "plugin:storybook/recommended"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "jsx-a11y"],
  "rules": {
    "indent": ["error", 4],
    // "linebreak-style": [
    // 	"error",
    // 	"unix"
    // ],
    "quotes": ["error", "double"],
    "semi": ["error", "never"],
    "react/prop-types": 0
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
