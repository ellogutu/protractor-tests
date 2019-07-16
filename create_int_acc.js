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
     browser.get('https://intranet.geopoll.com');
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

  it('should navigate to Acc', function() {
  	browser.driver.findElement(by.id('my_account')).click().then(function() { 
  		var aLink = element(by.xpath("//div[@id='my_account_sub']/a[@href='/Intranet/Dashboard']"));
  			aLink.click().then(function () {
  				expect(browser.getTitle()).toEqual('Dashboard')
  				browser.driver.findElement(by.xpath("//div[@id='left_nav']/ul//a[@href='/Intranet/Accounts']")).click().then(function() {
  					expect(browser.getTitle()).toEqual('Accounts')
  					var acLink = element(by.xpath("//div[@id='content']//a[@href='/Intranet/Accounts/Create']"));
  					acLink.click().then(function () {
  					expect(browser.getTitle()).toEqual('Create New Account')
  					browser.driver.sleep(2000);
  					})
  				}) 
  			})
  		})
  	})


});