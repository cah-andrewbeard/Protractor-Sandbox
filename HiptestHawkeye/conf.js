// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [ 'project_test.js, actionwords.js'],
  chromeOnly: true
}
