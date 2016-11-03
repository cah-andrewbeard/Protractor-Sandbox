
//this slows down the browser so it can be followed visually

var origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  var args = arguments;

  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};

var loginURL = 'https://munge.dev.cahcommtech.com/#!/login';
var zeroStateURL = 'https://munge.dev.cahcommtech.com/#!/file/';

var HawkeyeLogin = function() {
  var usernameInput = element(by.model('userName'));
  var passwordInput = element(by.model('password'));
  var submitButton = element(by.className('hawkeye-button'));
  var authFailure = element(by.className('authentication-failed'));
  this.loginPage = function() {
    browser.get(loginURL);
  };

  this.inputCredentials = function(username, password) {
    usernameInput.sendKeys(username);
    passwordInput.sendKeys(password);
  };

  this.initiateLogin = function() {
    submitButton.click();
  };

  this.didAuthFail = function(){
    return authFailure.isDisplayed();
  };

};

var NotificationsMenu = function(){
  var statusFilter = element(by.id('notification-filter-btn'));

  this.selectStatusFilter = function() {
    statusFilter.click();
  };

};

describe('Login VALID ID, INVALID PASSWORD', function(){
  it('Login should FAIL to authenticate', function(){
    var hawkeyeLogin = new HawkeyeLogin();
    hawkeyeLogin.loginPage();
    hawkeyeLogin.inputCredentials('protractor.test','INVALID');
    hawkeyeLogin.initiateLogin();
    expect(browser.getCurrentUrl()).toEqual(loginURL);
    expect(hawkeyeLogin.didAuthFail()).toBe(true);
  });
});

describe('Login INVALID ID, INVALID PASSWORD', function(){
  it('Login should FAIL to authenticate', function(){
    var hawkeyeLogin = new HawkeyeLogin();
    hawkeyeLogin.loginPage();
    hawkeyeLogin.inputCredentials('INVALID.ID','INVALID');
    hawkeyeLogin.initiateLogin();
    expect(browser.getCurrentUrl()).toEqual(loginURL);
    expect(hawkeyeLogin.didAuthFail()).toBe(true);
  });
});

describe('Login INVALID ID, VALID PASSWORD', function(){
  it('Login should FAIL to authenticate', function(){
    var hawkeyeLogin = new HawkeyeLogin();
    hawkeyeLogin.loginPage();
    hawkeyeLogin.inputCredentials('INVALID.ID','password');
    hawkeyeLogin.initiateLogin();
    expect(browser.getCurrentUrl()).toEqual(loginURL);
    expect(hawkeyeLogin.didAuthFail()).toBe(true);
  });
});

describe('Login EMPTY FIELDS', function(){
  it('Login should FAIL to authenticate', function(){
    var hawkeyeLogin = new HawkeyeLogin();
    hawkeyeLogin.loginPage();
    hawkeyeLogin.inputCredentials('','');
    hawkeyeLogin.initiateLogin();
    expect(browser.getCurrentUrl()).toEqual(loginURL);
  });
});

describe('Login VALID ID, VALID PASSWORD', function(){
  it('Login successfully', function(){
    var hawkeyeLogin = new HawkeyeLogin();
    hawkeyeLogin.loginPage();
    hawkeyeLogin.inputCredentials('protractor.test','password');
    hawkeyeLogin.initiateLogin();
    expect(browser.getCurrentUrl()).toEqual(zeroStateURL);
  });
});

describe('Notifications: open statsus filter', function(){
  it('should open status filter dropdown', function(){
    var notificationsMenu = new NotificationsMenu();
    notificationsMenu.selectStatusFilter();

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
