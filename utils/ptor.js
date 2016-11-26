var ec = ExpectedConditions;
getElement = function(by){
	if(browser.isElementPresent(element(by))){
		return element(by);
	}
	console.log('element not found');
}