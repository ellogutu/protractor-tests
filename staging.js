// at the top of the test spec:
var fs = require('fs');
var settings = require('./settings');
var username = process.env.GP_USER;
var password = process.env.GP_PASSWORD;

beforeEach(function() {
	browser.ignoreSynchronization = true;
});

afterEach(function() {
  	
});

describe('Login', function() {
  it('should have a title', function() {
  	 browser.get('https://intranet-staging.geopoll.com/Account/Login');
  	 expect(browser.getTitle()).toEqual('Login');
  });

  	it('should promt for password if left blank', function() {
		browser.driver.findElement(by.id('EmailAddress')).sendKeys(settings.fakeAccount.user);
		browser.driver.findElement(by.id('Password')).sendKeys('');
		browser.driver.findElement(by.className('ui-button-large')).click().then(function() {
	   expect(browser.driver.findElement(by.className('field-validation-error')).getText()).toEqual("The Password field is required.");
	    }, 10000);
  	});

  	it('should fail to login when wrong credentials are entered', function() {
		var emailField = browser.driver.findElement(by.id('EmailAddress'));
		emailField.clear().then(function() {
			emailField.sendKeys(settings.fakeAccount.user);
			browser.driver.findElement(by.id('Password')).sendKeys(settings.fakeAccount.password);
			browser.driver.findElement(by.className('ui-button-large')).click().then(function() {
				expect(browser.driver.findElement(by.tagName('li')).getText()).toEqual("Incorrect username or password!");
			}, 10000);
		})
  	});

  	it('should login', function() {
		var emailField = browser.driver.findElement(by.id('EmailAddress'));
		var passwordField = browser.driver.findElement(by.id('Password'));
		emailField.clear().then(function() {
			emailField.sendKeys(username);
			passwordField.sendKeys(password);
			browser.driver.findElement(by.className('ui-button-large')).click().then(function() {
			 browser.driver.sleep(2000);
			 expect(browser.driver.getCurrentUrl()).toMatch('/GeoPoll/Polls');
			}, 10000);
		})
  	}); 

  	it ('should open the recipients page - blank option', function() {
  		browser.driver.findElement(by.className('addLink sep-all-orange radiusTopRight')).click().then(function() {
  			browser.driver.sleep(2000);		
  			browser.driver.findElement(by.className('ui-button ui-widget ui-state-default ui-corner-all')).click().then(function() {
  				browser.driver.sleep(2000);
  				expect(browser.driver.getCurrentUrl()).toMatch('/GeoPoll/Polls/Create');
  			}, 20000);
  		})
  	});  

  	it ('should show error messages for required fields', function() {
  			browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() {
    			browser.driver.sleep(2000);	
    			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(1)')).getText()).toEqual("Poll Name is required!");
    			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(2)')).getText()).toEqual("Finance Option is required!");
    			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(3)')).getText()).toEqual("Country field is required!");
    			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(4)')).getText()).toEqual("Language field is required!");
    			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(5)')).getText()).toEqual("Client field is required!");
    			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(6)')).getText()).toEqual("Project Category is required!");
    			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(7)')).getText()).toEqual("Finance field is required!");
    			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(8)')).getText()).toEqual("Targeted Completes is required");
    		}, 10000);
    	});

  	it ('should select Default Language: from dropdown', function() {
  		browser.driver.findElement(by.id('languages')).click().then(function() {
  			browser.driver.sleep(4000);
  			browser.driver.findElement(by.css('[value="en"]')).click().then(function() {
  				browser.driver.sleep(4000);
  				browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() {
		  			browser.driver.sleep(4000);	
		  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(1)')).getText()).toEqual("Poll Name is required!");
		  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(2)')).getText()).toEqual("Finance Option is required!");
		  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(3)')).getText()).toEqual("Country field is required!");
		  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(4)')).getText()).toEqual("Client field is required!");
		  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(5)')).getText()).toEqual("Project Category is required!");
		  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(6)')).getText()).toEqual("Finance field is required!");
		  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(7)')).getText()).toEqual("Targeted Completes is required");
		  		}, 10000);
  			}, 10000);
  		}, 10000);
  	});

    it ('should select Default Country: from dropdown', function() {
      browser.driver.findElement(by.id('countries')).click().then(function() {
        browser.driver.sleep(4000);
        browser.driver.findElement(by.css('[value="[Location].[Country].&[Kenya]"]')).click().then(function() {
          browser.driver.sleep(4000);
          browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() {
            browser.driver.sleep(4000); 
            expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(1)')).getText()).toEqual("Poll Name is required!");
            expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(2)')).getText()).toEqual("Finance Option is required!");
            expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(3)')).getText()).toEqual("Client field is required!");
            expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(4)')).getText()).toEqual("Project Category is required!");
            expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(5)')).getText()).toEqual("Finance field is required!");
            expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(6)')).getText()).toEqual("Targeted Completes is required");
          }, 10000);
        }, 10000);
      }, 10000);
    });

    it ('should add 10 as default number of completes', function() {
      browser.driver.findElement(by.id('targetedCompletes')).clear();
      browser.driver.findElement(by.id('targetedCompletes')).sendKeys(settings.fakeTargetcompletes.targetCompletes);
        browser.driver.sleep(2000);
        browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() {
          browser.driver.sleep(2000);
          expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(1)')).getText()).toEqual("Poll Name is required!");
          expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(2)')).getText()).toEqual("Finance Option is required!");
          expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(3)')).getText()).toEqual("Client field is required!");
          expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(4)')).getText()).toEqual("Project Category is required!");
          expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(5)')).getText()).toEqual("Finance field is required!");
        }, 10000);
    });

    it ('should select default Finance: from dropdown', function() {
      browser.driver.findElement(by.css('[value="502"]')).click().then(function() {
      browser.driver.sleep(2000);
        browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() {
          browser.driver.sleep(2000);
          expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(1)')).getText()).toEqual("Poll Name is required!");
          expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(2)')).getText()).toEqual("Client field is required!");
          expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(3)')).getText()).toEqual("Project Category is required!");
        }, 10000);
      }, 10000);
    });

    it ('should select default Project Category: from dropdown', function() {
      browser.driver.findElement(by.css('[value="Testing"]')).click().then(function() {
      browser.driver.sleep(2000);
        browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() {
          browser.driver.sleep(2000);
          expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(1)')).getText()).toEqual("Poll Name is required!");
          expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(2)')).getText()).toEqual("Client field is required!");
        }, 10000);
      }, 10000);
    });
    
    it ('should add default Poll Name', function() {
      browser.driver.findElement(by.id('pollname')).sendKeys(settings.fakePollname.pollName);
      browser.driver.sleep(2000);
        browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() {
          browser.driver.sleep(2000);
          expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(1)')).getText()).toEqual("Client field is required!");
        }, 10000);
    });

    it('should add default client', function() { 
      browser.driver.sleep(2000);
      var clientName =  browser.driver.findElement(by.css('.form-group:nth-child(3)')); 
      clientName.click().then(function() {
        browser.driver.sleep(2000);
        var option =  browser.driver.findElement(by.css('.form-group:nth-child(3) option:nth-child(13)'));
        option.click().then(function() {
          browser.driver.sleep(2000);
          browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() {
            browser.driver.sleep(2000);
              expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(1)')).getText()).toEqual("Cost Per Complete required. Must be greater than -1");
              expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(2)')).getText()).toEqual("Frequency is required");
          }, 10000);
        }, 10000);
      }, 10000);
    });

    it ('should add default cost/complete', function() {
      browser.driver.findElement(by.id('costPerComplete')).clear();
      browser.driver.findElement(by.id('costPerComplete')).sendKeys(settings.costPercomplete.cost);
      browser.driver.sleep(2000);
      browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() {
        browser.driver.sleep(2000);
        expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(1)')).getText()).toEqual("Frequency is required");
      }, 10000);
    });    

    it ('should add default frequency', function() {
      browser.driver.findElement(by.css('[value="Once Off"]')).click().then(function() {
      browser.driver.sleep(5000);
      }, 10000);
    }); 

    it('should add drl', function(){ 
      browser.driver.findElement(by.css('[data-bind="click:addNewDrlConfirmation"]')).click().then(function() { 
        browser.driver.findElement(by.css('[data-bind="visible:!isCloning(),jqButton: {}, click: addNewDrl"]')).click().then(function() {
          browser.driver.sleep(2000);
          browser.driver.findElement(by.className('required txtBox')).clear();
          browser.driver.findElement(by.className('required txtBox')).sendKeys(settings.fakeTargetcompletes.targetCount);
          browser.driver.sleep(2000);
          browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() {
            browser.driver.sleep(2000);
            expect(browser.getTitle()).toEqual('Create/Update Poll');
            browser.driver.sleep(20000);
          }, 10000);
        }, 10000);
      },10000);
    });


    it('should add new group', function(){
      browser.driver.sleep(10000);
      expect(browser.getTitle()).toEqual('Questions');
      browser.driver.sleep(5000);
        browser.driver.findElement(by.css('[data-bind="click:addNewQuestionGroup"]')).click().then(function() {
          browser.driver.sleep(5000);
            browser.driver.findElement(by.css('[data-bind="click: addNewQuestion, jqButton: {}"]')).click().then(function() {
            browser.driver.sleep(2000);
          }, 10000);
      }, 10000);
    });
    
}); 