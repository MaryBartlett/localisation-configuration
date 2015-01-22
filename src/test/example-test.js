'use strict';

var localisation = require('localisation'),
    configuredLocaliser,
    config = {};
    config.supportedTerritories = require('supportedTerritories');
    config.supportedLanguages = require('supportedLanguages');

describe('fake test', function () {

    afterEach(function () {
        config.territory = false;
        config.language = false;
        configuredLocaliser = false;
    });

    it('should have some functions off it that we will use later...', function () {
        config.territory = 'gb';
        config.language = 'en';
        configuredLocaliser = localisation.createLocaliser(config);
        expect(configuredLocaliser.translate).toBeFunction();
        expect(configuredLocaliser.translate('helloWorld')).toEqual('hello world!');
    });
});
