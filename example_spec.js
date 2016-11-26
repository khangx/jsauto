describe('Territory tests', function() {

  beforeAll(function(){
    sync(false);
    console.log("Jasmin version: "+jasmine.version);
    browser.get('http://demo.re-sight.com');
    login();
  });

  it('Navigate to Territory page', function() {
    browser.params.navTo.district();
    browser.params.navTo.territory();
    expect(getElement(by.css('.main-content h2')).getText()).toBe('Please select a territory below...');
  });

  describe('id column data',function(){
    it('should not be null or empty',function(){
      var cells = element.all(by.css('#contenttableterritoryGrid .jqx-grid-cell:nth-of-type(1) div'))
      .each(function(cell){
        expect(cell.getText()).toBeTruthy();
      })
      
    });
  });

});


