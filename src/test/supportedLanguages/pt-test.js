'use strict';

var _ = require('lodash'),
    localisation = require('localisation'),
    configuredLocaliser,
    config = {};
    config.supportedTerritories = _.cloneDeep(require('supportedTerritories'));
    config.supportedLanguages = _.cloneDeep(require('supportedLanguages'));

describe('pt language test', function () {

    beforeEach(function () {
        config.territory = 'pt';
        config.language = 'pt';
        configuredLocaliser = localisation.createLocaliser(config);
    });

    afterEach(function () {
        config.territory = null;
        config.language = null;
        configuredLocaliser = null;
    });

    it('should have correct pluralization rules', function () {
        expect(config.supportedLanguages.pt.pluralization).toBeFunction();
        expect(config.supportedLanguages.pt.pluralization(0)).toEqual(["other"]);
        expect(config.supportedLanguages.pt.pluralization(1)).toEqual(["one"]);
        expect(config.supportedLanguages.pt.pluralization(2)).toEqual(["other"]);

        expect(configuredLocaliser._i18n.pluralization["pt-PT"](0)).toEqual(["other"]);
        expect(configuredLocaliser._i18n.pluralization["pt-PT"](1)).toEqual(["one"]);
        expect(configuredLocaliser._i18n.pluralization["pt-PT"](2)).toEqual(["other"]);
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
            }, 'date', 'default')).toEqual('30 de março de 2014');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'date', 'short')).toEqual('2014/03/30');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'date', 'long')).toEqual('Domingo, 30 de março de 2014');

        });

        it('dateTime', function () {

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'dateTime', 'default')).toEqual('30 de março de 2014 12:30');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 13,
                minute: 30,
                second: 0
            }, 'dateTime', 'default')).toEqual('30 de março de 2014 13:30');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'dateTime', 'short')).toEqual('2014/03/30 12:30');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'dateTime', 'long')).toEqual('Domingo, 30 de março de 2014 12:30');

        });

        it('time', function () {

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'time', 'default')).toEqual('12:30');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 13,
                minute: 30,
                second: 0
            }, 'time', 'default')).toEqual('13:30');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'time', 'short')).toEqual('12:30');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'time', 'long')).toEqual('12:30:00');
        });
    });
});
