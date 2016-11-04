describe('Protractor Test', function () {
  beforeEach(function () {
    this.actionwords = Object.create(Actionwords);
  });

  it('Login to Hawkeye (uid:ace28161-b12a-4bb1-b75d-cb0802b215bd)', function () {
    this.actionwords.hawkeyeLogin('protractor.test', 'password');
    expect(browser.getCurrentUrl()).toEqual(actionwords.lszeroStateURL);
  });
});
