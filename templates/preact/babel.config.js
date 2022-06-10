module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  'plugins': [
    ['@babel/plugin-transform-react-jsx', {
      'pragma': 'createElement',
      'pragmaFrag': 'Fragment',
    }],
  ]
};
