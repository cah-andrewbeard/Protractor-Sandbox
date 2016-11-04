var ListOfStuff = {
  var loginURL = 'https://munge.dev.cahcommtech.com/#!/login';
  var usernameInput = element(by.model('userName'));
  var passwordInput = element(by.model('password'));
  var submitButton = element(by.className('hawkeye-button'));
  var authFailure = element(by.className('authentication-failed'));

  var zeroStateURL = 'https://munge.dev.cahcommtech.com/#!/file/';
  var statusFilter = element(by.id('notification-filter-btn'));

    var HawkeyeLogin = function() {
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
        this.didAuthFail = function() {
            return authFailure.isDisplayed();
        };
    };

    var NotificationsMenu = function() {
        this.selectStatusFilter = function() {
            statusFilter.click();
        };

    };s
};
