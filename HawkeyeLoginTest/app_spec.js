//this slows down the browser so it can be followed visually
describe('Protractor Test', function () {
  beforeEach(function () {
    this.listOfStuff = Object.create(ListOfStuff);
    var hawkeyeLogin = new listOfStuff.HawkeyeLogin();
    var notificationsMenu = new listOfStuff.NotificationsMenu();
  });

  describe('Logins Invalid', function() {

      beforeEach(function() {

          hawkeyeLogin.loginPage();
      });

      it('invalid password', function() {
          hawkeyeLogin.inputCredentials('protractor.test', 'INVALID');
          hawkeyeLogin.initiateLogin();
          expect(browser.getCurrentUrl()).toEqual(loginURL);
          expect(hawkeyeLogin.didAuthFail()).toBe(true);
      });

      it('invalid password and id', function() {
          hawkeyeLogin.inputCredentials('INVALID.ID', 'INVALID');
          hawkeyeLogin.initiateLogin();
          expect(browser.getCurrentUrl()).toEqual(loginURL);
          expect(hawkeyeLogin.didAuthFail()).toBe(true);
      });

      it('invalid id', function() {
          hawkeyeLogin.inputCredentials('INVALID.ID', 'password');
          hawkeyeLogin.initiateLogin();
          expect(browser.getCurrentUrl()).toEqual(loginURL);
          expect(hawkeyeLogin.didAuthFail()).toBe(true);
      });

      it('Login should FAIL to authenticate', function() {

          hawkeyeLogin.inputCredentials('', '');
          hawkeyeLogin.initiateLogin();
          expect(browser.getCurrentUrl()).toEqual(loginURL);
      });

      it('Login successfully', function() {

          hawkeyeLogin.inputCredentials('protractor.test', 'password');
          hawkeyeLogin.initiateLogin();
          expect(browser.getCurrentUrl()).toEqual(zeroStateURL);
      });

  });

  describe('Notifications: open statsus filter', function() {
      it('should open status filter dropdown', function() {
          var notificationsMenu = new NotificationsMenu();
          notificationsMenu.selectStatusFilter();

      });
  });
});

// describe('Hawkeye Login Protractor Demo', function() {
//   it('valid login', function() {
//     browser.get('https://munge.dev.cahcommtech.com/#!/login');
//     element(by.model('userName')).sendKeys("protractor.test");
//     element(by.model('password')).sendKeys("password");
//     element(by.className('hawkeye-button')).click();
//     expect(browser.getCurrentUrl()).toEqual("https://munge.dev.cahcommtech.com/#!/file/");
//   });
// });
