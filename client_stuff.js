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
	it('should load landing page then redirect to login page', function() {
  		browser.get('https://geopoll.com');	
  		expect(browser.getTitle()).toEqual('Research Services and Mobile Surveys in Emerging Markets');
  		browser.driver.sleep(2000);
  		browser.driver.findElement(by.className('menu-item menu-item-type-custom menu-item-object-custom has-mega-menu')).click().then(function() {
			expect(browser.driver.getCurrentUrl()).toMatch('https://research.geopoll.com/Account/Login');
			}, 10000);
  	});

	it('should login', function() {
		var emailField = browser.driver.findElement(by.id('username'));
		var passwordField = browser.driver.findElement(by.id('password'));
		emailField.clear().then(function() {
			emailField.sendKeys(username);
			passwordField.sendKeys(password);
			browser.driver.findElement(by.css('[type="submit"]')).click().then(function() {
				browser.driver.sleep(5000);
				expect(browser.driver.getCurrentUrl()).toMatch('/SubscriptionServices');
			}, 10000);
		})
  	});

	it('should load my products ', function() {
		browser.driver.sleep(5000);
  		browser.driver.findElement(by.css('a[href*="/SubscriptionServices/MyProducts"]')).click().then(function() {
  			expect(browser.getTitle()).toEqual('Survey Research through Mobile - GeoPoll');
  			20000;
  		}, 10000);
  	});
  			
  	/*it('should load one', function() {
		browser.driver.sleep(5000);
  		browser.driver.findElement(by.css('a[href*="/SubscriptionServices/Info?selection=nicka8d4e0af1c01f1f42488ed001317"]')).click().then(function() {
  			//expect(browser.getTitle()).toEqual('Survey Research through Mobile - GeoPoll');
  			browser.driver.sleep(5000);
  		}, 10000);
  	});*/

  	it('should load Ke', function() {
  		browser.driver.sleep(5000);
  		browser.driver.findElement(by.css('a[href*="/SubscriptionServices/Media?selection=Kenya-Ratings&type=Radio"]')).click().then(function() {
  		//expect(browser.driver.getCurrentUrl()).toMatch('/SubscriptionServices/Media?selection=Kenya-Ratings&type=Radio');
  		browser.driver.sleep(5000);
  	}, 10000)
  	});	
  			
}); 	