module.exports = {
	cLevel: function(){
		getElement(by.css('#menu a[href="/CLevel"]')).click();
	},

	district: function(){
		getElement(by.css('#menu a[href="/District"]')).click();
	},

	territory: function(){
		getElement(by.css('#menu a[href="/Territory"]')).click();
	},

	distributor: function(){
		getElement(by.css('#menu a[href="/Distributor"]')).click();
	},

	brand: function(){
		getElement(by.css('#menu a[href="/Brand"]')).click();
	},

	chain: function(){
		getElement(by.css('#menu a[href="/Chain"]')).click();
	},

	location: function(){
		getElement(by.css('#menu a[href="/Location"]')).click();
	},

	reports: function(){
		getElement(by.css('#menu a[href="/Reports"]')).click();
	},

	cube: function(){
		getElement(by.css('#menu a[href="/Cube"]')).click();
	},

	toggle: function(hide){
		var menuVisibility = getElement(by.css('#menu #inArrow]')).isDisplayed();
		if(hide && menuVisibility || !hide && !menuVisibility){
			getElement('hide-menu').click();
		}else{
			console.log('Warning, trying to set menu hidden:'+hide+', but menu is already:'+menuVisibility);
		}
	}
}