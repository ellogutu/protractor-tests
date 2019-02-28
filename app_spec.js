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

describe('App', function() {
	it('should have a title', function() {
  		browser.get('https://intranet.geopoll.com/Account/Login');
  		expect(browser.getTitle()).toEqual('Login');
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

	it('should open the recipients page - blank option', function() {
  		browser.driver.findElement(by.className('addLink sep-all-orange radiusTopRight')).click().then(function() {
  			browser.driver.sleep(2000);		
  			browser.driver.findElement(by.className('ui-button ui-widget ui-state-default ui-corner-all')).click().then(function() {
  				browser.driver.sleep(2000);
  				expect(browser.driver.getCurrentUrl()).toMatch('/GeoPoll/Polls/Create');
  				browser.driver.sleep(10000);
  			}, 10000);
  		})
  	});  

  	it('should add the usual required fields', function() {
  		//Add default language
  		browser.driver.findElement(by.id('languages')).click().then(function() {
  			browser.driver.sleep(5000);
  			browser.driver.findElement(by.css('[value="en"]')).click().then(function() {
  			}, 10000);
  		})
  		//Add default country
  		browser.driver.findElement(by.id('countries')).click().then(function() {
        	browser.driver.sleep(2000);
        	browser.driver.findElement(by.css('[value="[Location].[Country].&[Kenya]"]')).click().then(function() {
    	}, 10000);
    	})
  		//Add default poll name
  		browser.driver.findElement(by.id('pollname')).sendKeys(settings.fakePollname.pollName);
     	browser.driver.sleep(2000);
  		//Add default finance option 
  		browser.driver.findElement(by.id('financeOption')).click().then(function() {
	        browser.driver.sleep(2000);
	  		browser.driver.findElement(by.css('[value="502"]')).click().then(function() {
	        }, 10000);
  		})
  		//Add default project 
  		browser.driver.findElement(by.id('projectCategory')).click().then(function() {
	        browser.driver.sleep(2000);
	  		browser.driver.findElement(by.css('[value="Testing"]')).click().then(function() {
	      	}, 10000);
  		})
        //Add default target completes
        browser.driver.findElement(by.id('targetedCompletes')).clear();
        browser.driver.findElement(by.id('targetedCompletes')).sendKeys(settings.fakeTargetcompletes.targetCompletes);
        browser.driver.sleep(2000);
        //Add default client 
	    var clientName =  browser.driver.findElement(by.css('.form-group:nth-child(3)')); 
      	clientName.click().then(function() {
        	browser.driver.sleep(2000);
        	var option =  browser.driver.findElement(by.css('.form-group:nth-child(3) option:nth-child(13)'));
        	option.click().then(function() {
	    	}, 10000);
	    });
	    //Add cost per complete
     	browser.driver.findElement(by.id('costPerComplete')).clear();
        browser.driver.findElement(by.id('costPerComplete')).sendKeys(settings.costPercomplete.cost);
        browser.driver.sleep(2000);
      	//Add frequency 
      	browser.driver.findElement(by.css('[value="Once Off"]')).click().then(function() {
        browser.driver.sleep(2000);
        }, 10000);

	});

	it('should select App method and check for required fields', function() { 
		browser.driver.findElement(by.id('pollmethods')).click().then(function() { 
			browser.driver.findElement(by.css('[value=App]')).click().then(function() {
			browser.driver.sleep(2000);
			browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() { 
				browser.driver.sleep(2000);
				expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(1)')).getText()).toEqual("Enable Close-Out Message is required for App surveys");
            	expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(2)')).getText()).toEqual("Public Survey Name is required");
            	browser.driver.sleep(2000);
				}, 10000);
			}, 10000);
		}, 10000);
	});

	it('should add public survey name', function() {
		browser.driver.findElement(by.id('publicname')).sendKeys(settings.fakePollname.surveyName);
     	browser.driver.sleep(2000);
     	browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() { 
     		expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(1)')).getText()).toEqual("Enable Close-Out Message is required for App surveys");
			browser.driver.sleep(2000);
		}, 10000);
	});
	
	it('should check enable close out', function() { 
        browser.driver.findElement(by.css('[data-bind="checked: IsClosePollMessageEnabled, disable:cantEdit(poll.State)"]')).click().then(function() { 
	        browser.driver.sleep(2000);
	        browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() { 
				expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(1)')).getText()).toEqual("Expire Survey Message is required for App surveys");
	            browser.driver.sleep(2000);
			}, 10000);
	    }, 10000);
	});	

	it('should add closed textbox', function() { 
        browser.driver.findElement(by.css('[data-bind=" jqButton: {}, click: addPollMessage"]')).click().then(function() { 
        	browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() {
				expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(1)')).getText()).toEqual("Message Text is required for all Close-Out messages.");
				expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(2)')).getText()).toEqual("Expire Survey Message is required form App surveys");
		        //browser.driver.sleep(5000);
		       // browser.driver.findElement(by.css('[data-bind="value: message"]')).sendKeys(settings.fakeCloseout.closed);
		        browser.driver.sleep(2000);
			}, 10000);
        }, 10000);
    });

	it('should add expired textbox', function() { 
        browser.driver.findElement(by.css('[value="Expired Survey Message"]')).click().then(function() {
        	browser.driver.findElement(by.css('[data-bind=" jqButton: {}, click: addPollMessage"]')).click().then(function() { 
	        	//browser.driver.sleep(5000);
        	//browser.driver.findElement(by.css('[data-bind="value: message"]')).sendKeys(settings.fakeCloseout.expired);
        	browser.driver.sleep(5000);
	        	browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() {
					expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(1)')).getText()).toEqual("Message Text is required for all Close-Out messages.");
					expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(2)')).getText()).toEqual("Message Text is required for all Close-Out messages.");
			        /*browser.driver.sleep(5000);
			        browser.driver.findElement(by.css('[data-bind="value: message"]')).sendKeys(settings.fakeCloseout.expired);
			        browser.driver.sleep(2000);*/
				}, 10000);
			}, 10000);	
	    }, 10000);
    });

	it('should add closed text', function() {
		browser.driver.sleep(5000);
		browser.driver.findElement(by.css('[data-bind="value: message"]')).sendKeys(settings.fakeCloseout.closed);
		
		//browser.driver.findElement(by.css('[data-bind="value: message"]')).sendKeys(settings.fakeCloseout.expired);
		browser.driver.sleep(5000);
		//browser.driver.findElement(by.css('.clearfix textarea-div:nth-child(6)')).click().then(function() {

		})
		//sendKeys(settings.fakeCloseout.expired);
		browser.driver.sleep(5000);
	});

	it('should add expired text', function() {
		browser.driver.findElement(by.className('polltable')).click().then(function() {
			browser.driver.findElement(by.css('.clearfix textarea-div:nth-child(2)')).click().then(function() {
				browser.driver.sleep(5000);
		})
		});

		
		/*browser.driver.sleep(5000);
		browser.driver.findElement(by.css('[data-bind="foreach: pollMessages"]')).click().then(function() { 
			browser.driver.sleep(5000);
			browser.driver.findElement(by.css('[data-bind="text: pollMessageEvent"]')).click().then(function() {
				browser.driver.sleep(5000);
				browser.driver.findElement(by.className('clearfix textarea-div')).sendKeys(settings.fakeCloseout.expired);
				browser.driver.sleep(5000);
			})
		})
	});*/

});