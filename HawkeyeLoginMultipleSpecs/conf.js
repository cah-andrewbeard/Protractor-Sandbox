// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['app_spec.js, ListOfStuff.js'],
  chromeOnly: true
}
