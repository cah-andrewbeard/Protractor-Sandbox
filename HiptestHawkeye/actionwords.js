var Actionwords = {
  var loginURL = 'https://munge.dev.cahcommtech.com/#!/login';
  var usernameInput = element(by.model('userName'));
  var passwordInput = element(by.model('password'));
  var submitButton = element(by.className('hawkeye-button'));
  var authFailure = element(by.className('authentication-failed'));

  var zeroStateURL = 'https://munge.dev.cahcommtech.com/#!/file/';
  hawkeyeLogin: function (username,password) {
    // TODO: Implement action: "Navigate to Hawkeye Login"
        browser.get(loginURL);
    // TODO: Implement action: "Enter username"
        usernameInput.sendKeys(username);
    // TODO: Implement action: "Enter password"
        passwordInput.sendKeys(password);
    // TODO: Implement action: "Select sign in"
        submitButton.click();
    throw 'Not implemented';
  }
};
