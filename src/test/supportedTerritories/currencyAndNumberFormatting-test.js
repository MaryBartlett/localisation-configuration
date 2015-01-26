'use strict';

var _ = require('lodash'),
    localisation = require('localisation'),
    testData = require('../fixtures/currencyAndNumberTestData'),
    configuredLocaliser,
    config = {};

config.supportedTerritories = require('supportedTerritories');
config.supportedLanguages = require('supportedLanguages');


describe('Currency and Number formatting', function () {

    _.forIn(testData.expected,  function (expected, territory) {

        describe(territory, function () {

            beforeEach(function () {
                config.territory = territory.slice(0, 2);
                config.language = territory.slice(-2);
                configuredLocaliser = localisation.createLocaliser(config);
            });

            afterEach(function () {
                config.territory = false;
                config.language = false;
                configuredLocaliser = false;
            });


            describe('currency', function () {
                it('handles whole numbers: ' + testData.actual.one + ' -> ' + expected.currency.one, function () {
                    expect(configuredLocaliser.formatCurrency(testData.actual.one)).toEqual(expected.currency.one);
                });

                it('handles numbers with decimal places: ' + testData.actual.oneHundredPointTwoFive + ' -> ' + expected.currency.oneHundredPointTwoFive, function () {
                    expect(configuredLocaliser.formatCurrency(testData.actual.oneHundredPointTwoFive)).toEqual(expected.currency.oneHundredPointTwoFive);
                });

                it('handles numbers with more than three digits: ' + testData.actual.oneThousandPointTwoFive + ' -> ' + expected.currency.oneThousandPointTwoFive, function () {
                    expect(configuredLocaliser.formatCurrency(testData.actual.oneThousandPointTwoFive)).toEqual(expected.currency.oneThousandPointTwoFive);
                });
            });

            describe('numbers', function () {
                it('handles whole numbers: ' + testData.actual.one + ' -> ' + expected.number.one, function () {
                    expect(configuredLocaliser.formatNumber(testData.actual.one)).toEqual(expected.number.one);
                });

                it('handles numbers with decimal places: ' + testData.actual.oneHundredPointTwoFive + ' -> ' + expected.number.oneHundredPointTwoFive, function () {
                    expect(configuredLocaliser.formatNumber(testData.actual.oneHundredPointTwoFive)).toEqual(expected.number.oneHundredPointTwoFive);
                });

                it('handles numbers with more than three digits: ' + testData.actual.oneThousandPointTwoFive + ' -> ' + expected.number.oneThousandPointTwoFive, function () {
                    expect(configuredLocaliser.formatNumber(testData.actual.oneThousandPointTwoFive)).toEqual(expected.number.oneThousandPointTwoFive);
                });
            });
        });
    });
});
