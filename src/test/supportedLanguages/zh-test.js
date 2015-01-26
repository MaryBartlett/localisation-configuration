'use strict';

var _ = require('lodash'),
    localisation = require('localisation'),
    configuredLocaliser,
    config = {};
    config.supportedTerritories = _.cloneDeep(require('supportedTerritories'));
    config.supportedLanguages = _.cloneDeep(require('supportedLanguages'));

describe('zh language test', function () {

    beforeEach(function () {
        config.territory = 'cn';
        config.language = 'zh';
        configuredLocaliser = localisation.createLocaliser(config);
    });

    afterEach(function () {
        config.territory = null;
        config.language = null;
        configuredLocaliser = null;
    });

    it('should have correct pluralization rules', function () {
        expect(config.supportedLanguages.zh.pluralization).toBeFunction();
        expect(config.supportedLanguages.zh.pluralization(0)).toEqual(["other"]);
        expect(config.supportedLanguages.zh.pluralization(1)).toEqual(["other"]);
        expect(config.supportedLanguages.zh.pluralization(2)).toEqual(["other"]);
        expect(config.supportedLanguages.zh.pluralization(3)).toEqual(["other"]);
        expect(config.supportedLanguages.zh.pluralization(11)).toEqual(["other"]);
        expect(config.supportedLanguages.zh.pluralization(99)).toEqual(["other"]);
        expect(config.supportedLanguages.zh.pluralization(1.2)).toEqual(["other"]);

        expect(configuredLocaliser._i18n.pluralization["zh-CN"](0)).toEqual(["other"]);
        expect(configuredLocaliser._i18n.pluralization["zh-CN"](1)).toEqual(["other"]);
        expect(configuredLocaliser._i18n.pluralization["zh-CN"](2)).toEqual(["other"]);
        expect(configuredLocaliser._i18n.pluralization["zh-CN"](3)).toEqual(["other"]);
        expect(configuredLocaliser._i18n.pluralization["zh-CN"](11)).toEqual(["other"]);
        expect(configuredLocaliser._i18n.pluralization["zh-CN"](1.2)).toEqual(["other"]);
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
            }, 'date', 'default')).toEqual('2014年3月30日');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'date', 'short')).toEqual('2014-03-30');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'date', 'long')).toEqual('2014年3月30日 星期日');

        });

        it('dateTime', function () {

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'dateTime', 'default')).toEqual('2014年3月30日 12:30');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 13,
                minute: 30,
                second: 0
            }, 'dateTime', 'default')).toEqual('2014年3月30日 13:30');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'dateTime', 'short')).toEqual('2014-03-30 12:30');

            expect(configuredLocaliser.formatDateTime({
                year: 2014,
                month: 3,
                day: 30,
                hour: 12,
                minute: 30,
                second: 0
            }, 'dateTime', 'long')).toEqual('2014年3月30日 星期日 12:30');

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
