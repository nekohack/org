module.exports = {
  // jsx-a11y や react (react-hooks) が eslint-config-next に含まれる
  // extends: [
  //   'plugin:jsx-a11y/recommended',
  //   'plugin:react/recommended',
  //   'plugin:react-hooks/recommended',
  // ],
  // plugins: ['jsx-a11y', 'react', 'react-hooks'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2015,
  },
  rules: {
    // react
    'react/jsx-boolean-value': 'warn',
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-curly-spacing': 'warn',
    'react/jsx-equals-spacing': 'warn',
    'react/jsx-first-prop-new-line': 'warn',
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-max-props-per-line': ['warn', { when: 'multiline' }],
    'react/jsx-no-bind': 'off', // 関数の bind を許容する
    'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
    'react/jsx-pascal-case': ['warn', { allowAllCaps: true }],
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-tag-spacing': [
      'warn',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
    'react/jsx-wrap-multilines': 'warn',
    'react/jsx-no-useless-fragment': 'off', // Fragment のみを許容する
    'react/no-unused-state': 'warn',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': [
      'warn',
      {
        order: ['everything-else', 'lifecycle', 'render', 'static-methods', 'type-annotations'],
      },
    ],

    // react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // jsx-a11y
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/autocomplete-valid': 'error',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/interactive-supports-focus': 'error',
    'jsx-a11y/label-has-associated-control': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-autofocus': 'error',
    'jsx-a11y/no-distracting-elements': 'error',
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],
    'jsx-a11y/no-redundant-role': 'off',
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
