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

  it('should open blast page', function() {
  	browser.driver.findElement(by.css('a[href*="/GeoPoll/MnoBlastLogger"]')).click().then(function() {
 		browser.driver.sleep(2000);		
 			expect(browser.getTitle()).toEqual('MNO Blast Log');
  			}, 15000);
  });

  it('should confirm validation', function() {
    browser.driver.findElement(by.className('addLink')).click().then(function() {
      browser.driver.sleep(2000);
      browser.driver.findElement(by.className('ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-dialog-buttons')).click().then(function(){
        browser.driver.findElement(by.className('ui-dialog-buttonpane ui-widget-content ui-helper-clearfix')).click().then(function() {
          browser.driver.sleep(2000);
          browser.driver.findElement(by.className('ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only')).click().then(function() { 
            browser.driver.sleep(5000);
          }, 10000);
        }, 10000);
      }, 10000);
    }, 10000);
  });   

  it('should add country', function() { 
      browser.driver.sleep(2000);
      browser.driver.findElement(by.className('ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-dialog-buttons')).click().then(function(){
  	   browser.driver.findElement(by.className('modal-dialog editor')).click().then(function() {
        browser.driver.findElement(by.className('row')).click().then(function() {
          browser.driver.findElement(by.css('.half:nth-child(2)')).click().then(function() {
            browser.driver.sleep(5000);
            browser.driver.findElement(by.css('[value="Kenya"]')).click().then(function() {
              browser.driver.sleep(5000);
            }, 10000);
          }, 10000);
        }, 10000);
  	  }, 10000);
    }, 10000);
  });

  it('should add carrier', function(){
    browser.driver.sleep(2000);
      browser.driver.findElement(by.className('ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-dialog-buttons')).click().then(function(){
       browser.driver.findElement(by.className('modal-dialog editor')).click().then(function() {
        browser.driver.findElement(by.className('row')).click().then(function() {
          browser.driver.findElement(by.css('.half:nth-child(4)')).click().then(function() {
            browser.driver.sleep(5000);
            browser.driver.findElement(by.css('[value="32"]')).click().then(function() {
              browser.driver.sleep(5000);
            }, 10000);
          }, 10000);
        }, 10000);
      }, 10000);
    }, 10000);
  });

  it('should add shortcode', function(){
    browser.driver.sleep(2000);
      browser.driver.findElement(by.className('ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-dialog-buttons')).click().then(function(){
       browser.driver.findElement(by.className('modal-dialog editor')).click().then(function() {
        browser.driver.findElement(by.className('row')).click().then(function() {
          browser.driver.findElement(by.css('.half:nth-child(6)')).click().then(function() {
            browser.driver.sleep(5000);
            browser.driver.findElement(by.css('[value="70555"]')).click().then(function() {
              browser.driver.sleep(5000);
            }, 10000);
          }, 10000);
        }, 10000);
      }, 10000);
    }, 10000);
  });

  it('should add no.msgs', function(){
    browser.driver.sleep(2000);
      browser.driver.findElement(by.className('ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-dialog-buttons')).click().then(function(){
       browser.driver.findElement(by.className('modal-dialog editor')).click().then(function() {
        browser.driver.findElement(by.className('row')).click().then(function() {
          browser.driver.findElement(by.css('.half:nth-child(8)')).click().then(function() {
            browser.driver.sleep(5000);
            browser.driver.findElement(by.css('[data-bind="value: Units"]')).clear();
            browser.driver.findElement(by.css('[data-bind="value: Units"]')).sendKeys(settings.fakeBlastmsgno.noofMsg);
          }, 10000);
        }, 10000);
      }, 10000);
    }, 10000);
  });

  it('should add p.id', function(){
    browser.driver.sleep(2000);
      browser.driver.findElement(by.className('ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-dialog-buttons')).click().then(function(){
                  browser.driver.findElement(by.className('select2-drop select2-display-none select2-with-searchbox select2-drop-active')).click().then(function() {
            //browser.driver.findElement(by.className('select2-search')).click().then(function(){
          
          //}, 10000);
                   
        }, 10000);
        }, 10000);
  });

});