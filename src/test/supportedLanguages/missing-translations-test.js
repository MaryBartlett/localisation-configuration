'use strict';

var _ = require('lodash'),
    supportedLanguages = _.cloneDeep(require('supportedLanguages'), 'default');

_.forEach( _.omit(supportedLanguages,'default'), function (translationStrings, languageName ) {
    describe('Language: ' + languageName , function () {
        it('should have same structure as default translation', function () {
            var translations = supportedLanguages[languageName].translations,
                engineering = supportedLanguages['default'].translations,
                iterateTranslationObject = function ( referenceTranslation, realTranslation ) {
                    _.forOwn(referenceTranslation, function (value, prop) {
                        expect( realTranslation[prop] ).toBeDefined('missing key/context ' + prop + ' is missing from ' + languageName);
                        if ( _.isObject(value) && !_.isArray(value)) {
                            // Loop if we find sub contexts
                            iterateTranslationObject( referenceTranslation[prop], realTranslation[prop] );
                        } else if (_.isArray(value)) {
                            // if the translation property is array, check it against reference translation to be equal in size.
                            expect(realTranslation[prop].length ).toBe( value.length );
                        }
                    });
                };

            iterateTranslationObject(engineering, translations);
        });
    });
});
