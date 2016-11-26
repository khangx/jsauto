login = function(){
  	expect(getElement(by.id('loginForm')).isDisplayed()).toBe(true);
    getElement(by.id('Login')).sendKeys(browser.params.user);
    getElement(by.id('PassHash')).sendKeys(browser.params.pass);
    getElement(by.css('input[type="submit"]')).click();
}