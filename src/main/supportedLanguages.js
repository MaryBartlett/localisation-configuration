'use strict';
module.exports = {
    'default': {
        translations: require('./translations/en.json'),
        dateFormat: {
            defaultFormat: "%-d %B %Y",
            shortFormat: "%d/%m/%Y",
            longFormat: "%-d %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%A, %d %B %Y, %H:%M h",
            shortFormat: "%d/%m, %H:%M h",
            longFormat: "%A, %d %B %Y, %H:%M h"
        },
        timeFormat: {
            defaultFormat: "H:%M h",
            shortFormat: "%H:%M h",
            longFormat: "%H:%M h"
        }
    },
    'fr': {
        territoryOverrides: {
            'ca': {
                translations: require('./translations/ca-fr.json'),
            }
        },
        translations: require('./translations/fr.json')
    },
    'en': {
        translations: require('./translations/en.json')
        dateFormat: {
            defaultFormat: "%-d %B %Y",
            shortFormat: "%d/%m/%Y",
            longFormat: "%-d %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%A, %d %B %Y, %H:%M h",
            shortFormat: "%d/%m, %H:%M h",
            longFormat: "%A, %d %B %Y, %H:%M h"
        },
        timeFormat: {
            defaultFormat: "H:%M h",
            shortFormat: "%H:%M h",
            longFormat: "%H:%M h"
        }
    }
};

