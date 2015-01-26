'use strict';

var _ = require('lodash'),
    localisation = require('localisation'),
    configuredLocaliser,
    config = {};
    config.supportedTerritories = _.cloneDeep(require('supportedTerritories'));
    config.supportedLanguages = _.cloneDeep(require('supportedLanguages'));

describe('ms language test', function () {

    beforeEach(function () {
        config.territory = 'my';
        config.language = 'ms';
        configuredLocaliser = localisation.createLocaliser(config);
    });

    afterEach(function () {
        config.territory = null;
        config.language = null;
        configuredLocaliser = null;
    });

    it('should have correct pluralization rules', function () {
        expect(config.supportedLanguages.ms.pluralization).toBeFunction();
        expect(config.supportedLanguages.ms.pluralization(0)).toEqual(["other"]);
        expect(config.supportedLanguages.ms.pluralization(1)).toEqual(["other"]);
        expect(config.supportedLanguages.ms.pluralization(2)).toEqual(["other"]);

        expect(configuredLocaliser._i18n.pluralization["ms-MY"](0)).toEqual(["other"]);
        expect(configuredLocaliser._i18n.pluralization["ms-MY"](1)).toEqual(["other"]);
        expect(configuredLocaliser._i18n.pluralization["ms-MY"](2)).toEqual(["other"]);
    });

    describe('should correctly format', function () {

        it('date', function () {

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'date', 'default')).toEqual('30 Mac 2014');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'date', 'short')).toEqual('30/03/2014');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'date', 'long')).toEqual('Ahad, 30 Mac 2014');

        });

        it('dateTime', function () {

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'dateTime', 'default')).toEqual('30 Mac 2014 12:30 pm');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 13,
                minute: 30,
                second: 0
            }, 'dateTime', 'default')).toEqual('30 Mac 2014 1:30 pm');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'dateTime', 'short')).toEqual('30 Mac 2014 12:30 pm');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'dateTime', 'long')).toEqual('Ahad, 30 Mac 2014 12:30 pm');

        });

        it('time', function () {

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'time', 'default')).toEqual('12:30 pm');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 13,
                minute: 30,
                second: 0
            }, 'time', 'default')).toEqual('1:30 pm');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'time', 'short')).toEqual('12:30 pm');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'time', 'long')).toEqual('12:30:00 pm');
        });
    });
});
