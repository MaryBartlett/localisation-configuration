#Localisation configuration [![!Build Status](http://btdevapsrvjenkins05.brislabs.com:8080/job/localisation-configuration-CI/badge/icon)](http://btdevapsrvjenkins05.brislabs.com:8080/job/localisation-configuration-CI/)

The configuration objects required for <a href="https://github.brislabs.com/web/localisation">localisation<a/>

## Install with NPM

Add the following line to package.json using the required release version

```js
"localisation-configuration": "https://github.brislabs.com/web/localisation-configuration/archive/v0.3.0.tar.gz"
```

Returns an object containing supportedTerritories and supportedLanguages objects.

The supportedTerritories[territory] object contains the territory specific information:
 - currencyFormat
 - currencySymbol
 - currencyPrecision
 - currencySeparator
 - currencyDelimiter
 - numberPrecision
 - numberSeparator
 - numberDelimiter
 - territoryDefaultLanguage
 - any language overrides 


The supportedLanguages[language] object contains the language specific information:
 - translations
 - pluralization
 - dateTranslations
 - dateFormat
 - timeFormat
 - any territory overrides 


## Grunt

Uses grunt to lint, test and package the assets.

```command
    grunt             // process_js and then watch
    grunt process_js  // run jshint, jscs, bundle using webpack, then test with jasmine
    grunt test        // run jshint, jscs, bundle using webpack, then test with jasmine
```
`grunt test` exists to allow the package.json to reference it so you can also run

```command
    npm test
```

### Releasing a new version

To release a new version when you are happy with the code, run:

```command
    grunt release
```
This will lint, bundle and test increment the version number in the package.json file and upload to github.
