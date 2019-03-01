//at the top of the test spec:
var fs = require('fs');
var settings = require('./settings');
var username = process.env.GP_USER;
var password = process.env.GP_PASSWORD;

beforeEach(function() {
	browser.ignoreSynchronization = true;
});

afterEach(function() {
  	
});

describe('Gp-U checks', function() {
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

	it('should redirect to admin', function() {
		browser.driver.findElement(by.id('my_account')).click().then(function() {
			browser.driver.sleep(2000);
			browser.driver.findElement(by.css('a[href*="/Intranet/Dashboard"]')).click().then(function() {
				browser.driver.sleep(2000);
				expect(browser.driver.getCurrentUrl()).toMatch('/Intranet/Dashboard');
				browser.driver.sleep(2000);
			}, 10000);	
		}, 10000);
	});

	it('should redirect to U', function() {
		browser.driver.findElement(by.css('a[href*="/Intranet/GeoPollUsers/AdvancedUsers"]')).click().then(function() {
			browser.driver.sleep(2000);
			expect(browser.driver.getCurrentUrl()).toMatch('/Intranet/GeoPollUsers/AdvancedUsers')
			browser.driver.sleep(2000);
		}, 10000);
	});

});