module.exports = {
  sourceType: 'unambiguous',
  presets: ['@vue/cli-plugin-babel/preset'],
  overrides: [
    {
       test: 'node_modules/some-package/**/*',
       sourceType: 'module'
    }
  ]
};