'use strict';

var _ = require('lodash'),
    localisation = require('localisation'),
    configuredLocaliser,
    config = {};
    config.supportedTerritories = _.cloneDeep(require('supportedTerritories'));
    config.supportedLanguages = _.cloneDeep(require('supportedLanguages'));

describe('ar language test', function () {

    beforeEach(function () {
        config.territory = 'sa';
        config.language = 'ar';
        configuredLocaliser = localisation.createLocaliser(config);
    });

    afterEach(function () {
        config.territory = false;
        config.language = false;
        configuredLocaliser = false;
    });

    it('should have correct pluralization rules', function () {
        expect(config.supportedLanguages.ar.pluralization).toBeFunction();
        expect(config.supportedLanguages.ar.pluralization(0)).toEqual(["zero"]);
        expect(config.supportedLanguages.ar.pluralization(1)).toEqual(["one"]);
        expect(config.supportedLanguages.ar.pluralization(2)).toEqual(["two"]);
        expect(config.supportedLanguages.ar.pluralization(3)).toEqual(["few"]);
        expect(config.supportedLanguages.ar.pluralization(7)).toEqual(["few"]);
        expect(config.supportedLanguages.ar.pluralization(11)).toEqual(["many"]);
        expect(config.supportedLanguages.ar.pluralization(57)).toEqual(["many"]);
        expect(config.supportedLanguages.ar.pluralization(99)).toEqual(["many"]);
        expect(config.supportedLanguages.ar.pluralization(100)).toEqual(["other"]);
        expect(config.supportedLanguages.ar.pluralization(102)).toEqual(["other"]);
        expect(config.supportedLanguages.ar.pluralization(103)).toEqual(["few"]);
        expect(config.supportedLanguages.ar.pluralization(111)).toEqual(["many"]);
        expect(config.supportedLanguages.ar.pluralization(1.2)).toEqual(["other"]);

        expect(configuredLocaliser._i18n.pluralization["ar-SA"](0)).toEqual(["zero"]);
        expect(configuredLocaliser._i18n.pluralization["ar-SA"](1)).toEqual(["one"]);
        expect(configuredLocaliser._i18n.pluralization["ar-SA"](2)).toEqual(["two"]);
        expect(configuredLocaliser._i18n.pluralization["ar-SA"](3)).toEqual(["few"]);
        expect(configuredLocaliser._i18n.pluralization["ar-SA"](11)).toEqual(["many"]);
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
            }, 'date', 'default')).toEqual('30 مارس، 2014');

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
            }, 'date', 'long')).toEqual('الأحد، 30 مارس، 2014');

        });

        it('dateTime', function () {

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'dateTime', 'default')).toEqual('30 مارس، 2014 12:30 م');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 13,
                minute: 30,
                second: 0
            }, 'dateTime', 'default')).toEqual('30 مارس، 2014 1:30 م');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'dateTime', 'short')).toEqual('30/03/2014 12:30 م');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'dateTime', 'long')).toEqual('الأحد، 30 مارس، 2014 12:30 م');

        });

        it('time', function () {

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'time', 'default')).toEqual('12:30 م');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 13,
                minute: 30,
                second: 0
            }, 'time', 'default')).toEqual('1:30 م');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'time', 'short')).toEqual('12:30 م');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'time', 'long')).toEqual('12:30:00 م');
        });

    });
});
