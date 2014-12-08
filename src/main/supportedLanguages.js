'use strict';
module.exports = {
    'default': {
        translations: require('./translations/en.js'),
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
            defaultFormat: "%H:%M",
            shortFormat: "%H:%M",
            longFormat: "%H:%M"
        }
    },
    'fr': {
        territoryOverrides: {
            'ca': {
                translations: require('./translations/ca-fr.js')
            }
        },
        translations: require('./translations/fr.js'),
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
            defaultFormat: "%H:%M",
            shortFormat: "%H:%M",
            longFormat: "%H:%M"
        }
    },
    'en': {
        translations: require('./translations/en.js'),
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
            defaultFormat: "%H:%M",
            shortFormat: "%H:%M",
            longFormat: "%H:%M"
        }
    },
    'sv': {
        translations: require('./translations/sv.js'),
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
            defaultFormat: "%H:%M",
            shortFormat: "%H:%M",
            longFormat: "%H:%M"
        }
    },
    'de': {
        translations: require('./translations/de.js'),
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
            defaultFormat: "%H:%M",
            shortFormat: "%H:%M",
            longFormat: "%H:%M"
        }
    }
};
