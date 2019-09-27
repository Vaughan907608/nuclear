module.exports = {
  'presets': [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  'plugins': [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
  ],
  ignore: [/node_modules/]
};
