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

describe('Intra links', function() {
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

  	it('should load Dash', function() {
  	 browser.get('https://intranet.geopoll.com/GeoPoll/Dashboard');
     browser.driver.sleep(2000);     
  	 expect(browser.getTitle()).toEqual('Index');
  	});

    it('should load Create', function() {
        browser.get('https://intranet.geopoll.com/GeoPoll/Polls/Create');
        browser.driver.sleep(2000);
        expect(browser.getTitle()).toEqual('Create/Update Poll');
    });

    it('should load Subform', function() {
     browser.get('https://intranet.geopoll.com/GeoPoll/Polls/Subform');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Subform');
    });

    it('should load TestSubform', function() {
          browser.get('https://intranet.geopoll.com/GeoPoll/Polls/TestSubform');
          browser.driver.sleep(2000);
          expect(browser.getTitle()).toEqual('Subform');
    });

    it('should load PollHistory', function() {
          browser.get('https://intranet.geopoll.com/GeoPoll/PollHistoryLogs');
          browser.driver.sleep(2000);
          expect(browser.getTitle()).toEqual('Poll History');
    });

    it('should load C-Polls', function() {
          browser.get('https://intranet.geopoll.com/GeoPoll/CommunityPolls');
          browser.driver.sleep(2000);
          expect(browser.getTitle()).toEqual('Community Polls');
    });

    it('should load C-Comments', function() {
          browser.get('https://intranet.geopoll.com/GeoPoll/CommunityPolls/Comments');
          browser.driver.sleep(2000);
          expect(browser.getTitle()).toEqual('Community Polls Comments');
    });

    it('should load P-Approval', function() {
          browser.get('https://intranet.geopoll.com/GeoPoll/PictureApproval');
          browser.driver.sleep(2000);
          expect(browser.getTitle()).toEqual('Picture Approval');
    });

    it('should load Blast', function() {
        browser.get('https://intranet.geopoll.com/GeoPoll/MnoBlastLogger');
        browser.driver.sleep(2000);
        expect(browser.getTitle()).toEqual('MNO Blast Log');
    });

    it('should load Top', function() {
        browser.get('https://intranet.geopoll.com/GeoPoll/Topup');
        browser.driver.sleep(2000);
        expect(browser.getTitle()).toEqual('Top-ups');
    });

    it('should load Emulator', function() {
    	browser.get('https://intranet.geopoll.com/GeoPoll/SurveyEmulator');
      	browser.driver.sleep(2000);
      	expect(browser.getTitle()).toEqual('WAP Survey Emulator');
    });

    it('should load U-Bulk', function() {
    	browser.get('https://intranet.geopoll.com/GeoPoll/UserResponse/Bulk');
     	browser.driver.sleep(2000);
     	expect(browser.getTitle()).toEqual('User Responses');
    });

    it('should load C-Bulk', function() {
     	browser.get('https://intranet.geopoll.com/GeoPoll/Polls/PollsBulkCreate');
     	browser.driver.sleep(2000);
     	expect(browser.getTitle()).toEqual('Bulk Create Surveys');
    });

    it('should load T-Bulk', function() {
     browser.get('https://intranet.geopoll.com/GeoPoll/Polls/BulkCreateTemplate');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Bulk Create Surveys');
    });

    it('should load R-Account', function() {
     browser.get('https://intranet.geopoll.com/GeoPoll/Report/Account');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Account Data');
    });

    it('should load Report', function() {
     browser.get('https://intranet.geopoll.com/GeoPoll/Report?reportType=GeoPoll');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('GeoPoll Reports');
    });

    it('should load Messaging', function() {
     browser.get('https://intranet.geopoll.com/GeoPoll/Report?reportType=Messaging');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('GeoPoll Reports');
    }); 

    it('should load R-Users', function() {
     browser.get('https://intranet.geopoll.com/GeoPoll/Report?reportType=Users');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('GeoPoll Reports');
    });

    it('should load History 2', function() {
     browser.get('https://intranet.geopoll.com/Intranet/GeoPollUsers/PollHistory');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Poll History');
    });

    it('should load Users 1', function() {
     browser.get('https://intranet.geopoll.com/Intranet/geopollusers');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Users');
    });

    it('should load CL', function() {
     browser.get('https://intranet.geopoll.com/Intranet/GeoPollUsers/CarrierLookUp');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Details');
    });

    it('should load Ops', function() {
     browser.get('https://intranet.geopoll.com/GeoPoll/Operations');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Operations Reporting');
    });

    it('should load Accounts', function() {
     browser.get('https://intranet.geopoll.com/Intranet/Accounts');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Accounts');
    });

    it('should load Localization', function() {
     browser.get('https://intranet.geopoll.com/Intranet/Localization#prod');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Localizations');
    });

    it('should load Carriers', function() {
     browser.get('https://intranet.geopoll.com/Intranet/Carriers');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Carriers');
    });

    it('should load Messaging', function() {
     browser.get('https://intranet.geopoll.com/Intranet/Messaging');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Messaging - Binds');
    });

    it('should load Billing', function() {
     browser.get('https://intranet.geopoll.com/Intranet/Billing');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Billing');
    });

    it('should load Provider', function() {
     browser.get('https://intranet.geopoll.com/Intranet/BillingProviders');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Billing Providers');
    });

    it('should load Skills', function() {
     browser.get('https://intranet.geopoll.com/Intranet/AppSkillsConfigs');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('App Skills Configs');
    });

    it('should load Currencies', function() {
     browser.get('https://intranet.geopoll.com/Intranet/Currencies');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Currencies');
    });

    it('should load Locations', function() {
     browser.get('https://intranet.geopoll.com/Intranet/Locations');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Locations');
    });

    it('should load Languages', function() {
     browser.get('https://intranet.geopoll.com/Intranet/Languages');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Languages');
    });

    it('should load Trigger', function() {
     browser.get('https://intranet.geopoll.com/Intranet/Trigger');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Triggers');
    });

    it('should load Advanced', function() {
     browser.get('https://intranet.geopoll.com/Intranet/GeoPollUsers/AdvancedUsers');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Details');
    });

    it('should load Indicator', function() {
     browser.get('https://intranet.geopoll.com/Intranet/Indicator');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Details');
    });

    it('should load Prices', function() {
     browser.get('https://intranet.geopoll.com/Intranet/Prices');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Details');
    });

    it('should load Inventory', function() {
     browser.get('https://intranet.geopoll.com/Intranet/Inventory');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Inventory Management');
    });

    it('should load Interest', function() {
     browser.get('https://intranet.geopoll.com/Intranet/PointOfInterest');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Points of Interest (POI) - Management');
    });

    it('should load Campaigns', function() {
     browser.get('https://intranet.geopoll.com/Intranet/PointOfInterest/Campaigns');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Geofence Campaigns');
    });

    it('should load Translations', function() {
     browser.get('https://intranet.geopoll.com/Intranet/Translations');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Translations');
    });  	

    it('should load RejectionReasons', function() {
     browser.get('https://intranet.geopoll.com/Intranet/PictureApproval/RejectionReasons');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Picture Rejection Reasons');
    });

    it('should load Trans-Config', function() {
     browser.get('https://intranet.geopoll.com/Intranet/Translations/Config');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Translations Configs');
    });

});