'use strict';

// Object containing functions for determining the two most common plural forms
// amongst the currently supported languages.
var pluralForms = {

    // 0 -> Other
    // 1 -> One
    // 2 -> Other
    singularOneElseOther: function (count) {
        return (count === 1) ? ['one'] : ['other'];
    },

    // 0 -> Other
    // 1 -> Other
    // 2 -> Other
    other: function () {
        return ["other"];
    }
};

module.exports = {
    'default': {
        translations: require('./translations/en.js'),
        pluralization: pluralForms.singularOneElseOther,
        dateFormat: {
            defaultFormat: "%-d %B %Y",
            shortFormat: "%-d/%-m/%Y",
            longFormat: "%A %-d %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d %B %Y %-I:%M %p",
            shortFormat: "%-d/%-m/%Y %-I:%M %p",
            longFormat: "%A %-d %B %Y %-I:%M %p"
        },
        timeFormat: {
            defaultFormat: "%-I:%M %p",
            shortFormat: "%-I:%M %p",
            longFormat: "%-I:%M:%S %p"
        }
    },
    'en': {
        translations: require('./translations/en.js'),
        pluralization: pluralForms.singularOneElseOther,
        dateFormat: {
            defaultFormat: "%-d %B %Y",
            shortFormat: "%-d/%m/%Y",
            longFormat: "%A %-d %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d %B %Y %-I:%M %p",
            shortFormat: "%-d/%m/%Y %-I:%M %p",
            longFormat: "%A %-d %B %Y %-I:%M %p"
        },
        timeFormat: {
            defaultFormat: "%-I:%M %p",
            shortFormat: "%-I:%M %p",
            longFormat: "%-I:%M:%S %p"
        },

        territoryOverrides: {
            'au': {
                dateFormat: {
                    defaultFormat: "%B %-d, %Y",
                    shortFormat: "%m/%-d/%Y",
                    longFormat: "%A, %B %-d, %Y"
                },
                dateTimeFormat: {
                    defaultFormat: "%B %-d, %Y %-I:%M %p",
                    shortFormat: "%m/%-d/%Y %-I:%M %p",
                    longFormat: "%A, %B %-d, %Y %-I:%M %p"
                }
            },
            'ca': {
            },
            'in': {
            },
            'ie': {
                dateTimeFormat: {
                    defaultFormat: "%-d %B %Y %-H:%M",
                    shortFormat: "%-d/%m/%Y %-H:%M",
                    longFormat: "%A %-d %B %Y %-H:%M"
                },
                timeFormat: {
                    defaultFormat: "%-H:%M",
                    shortFormat: "%-H:%M",
                    longFormat: "%-H:%M:%S"
                }
            },
            'ae': {
                dateFormat: {
                    defaultFormat: "%-d %B, %Y",
                    longFormat: "%A, %-d %B, %Y"
                },
                dateTimeFormat: {
                    defaultFormat: "%-d %B, %Y %-I:%M %p",
                    longFormat: "%A, %-d %B, %Y %-I:%M %p"
                }
            },
            'sg': {
                dateFormat: {
                    defaultFormat: "%B %-d, %Y",
                    shortFormat: "%-m/%-d/%Y",
                    longFormat: "%A, %B %-d, %Y"
                },
                dateTimeFormat: {
                    defaultFormat: "%B %-d, %Y %-I:%M %p",
                    shortFormat: "%-m/%-d/%Y %-I:%M %p",
                    longFormat: "%A, %B %-d, %Y %-I:%M %p"
                }
            },
            'za': {
                dateFormat: {
                    shortFormat: "%Y/%m/%-d"
                },
                dateTimeFormat: {
                    defaultFormat: "%-d %B %Y %-H:%M",
                    shortFormat: "%Y/%m/%-d %-H:%M",
                    longFormat: "%A %-d %B %Y %-H:%M"
                },
                timeFormat: {
                    defaultFormat: "%-H:%M",
                    shortFormat: "%-H:%M",
                    longFormat: "%-H:%M:%S"
                }
            },
            'us': {
                dateFormat: {
                    defaultFormat: "%B %-d %Y",
                    shortFormat: "%m/%-d/%Y",
                    longFormat: "%A %B %-d %Y"
                },
                dateTimeFormat: {
                    defaultFormat: "%B %-d %Y %-I:%M %p",
                    shortFormat: "%m/%-d/%Y %-I:%M %p",
                    longFormat: "%A %B %-d %Y %-I:%M %p"
                }
            }

        }
    },
    'de': {
        translations: require('./translations/de.js'),
        pluralization: pluralForms.singularOneElseOther,
        dateFormat: {
            defaultFormat: "%-d. %B %Y",
            shortFormat: "%-d.%m.%Y",
            longFormat: "%A, %-d. %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d. %B %Y %-H:%M",
            shortFormat: "%-d.%m.%Y %-H:%M",
            longFormat: "%A, %-d. %B %Y %-H:%M"
        },
        timeFormat: {
            defaultFormat: "%-H:%M",
            shortFormat: "%-H:%M",
            longFormat: "%-H:%M:%S"
        },

        territoryOverrides: {
            'at': {
            },
            'ch': {
            }
        }
    },
    'pt': {
        translations: require('./translations/pt.js'),
        pluralization: pluralForms.singularOneElseOther,
        dateFormat: {
            defaultFormat: "%-d de %B de %Y",
            shortFormat: "%Y/%m/%-d",
            longFormat: "%A, %-d de %B de %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d de %B de %Y %-H:%M",
            shortFormat: "%Y/%m/%-d %-H:%M",
            longFormat: "%A, %-d de %B de %Y %-H:%M"
        },
        timeFormat: {
            defaultFormat: "%-H:%M",
            shortFormat: "%-H:%M",
            longFormat: "%-H:%M:%S"
        },

        territoryOverrides: {
            'br': {
                translations: require('./translations/pt-br.js'),
                dateFormat: {
                    shortFormat: "%-d/%m/%Y"
                },
                dateTimeFormat: {
                    shortFormat: "%-d/%m/%Y %-H:%M"
                }
            }
        }
    },
    'fr': {
        translations: require('./translations/fr.js'),
        pluralization: pluralForms.singularOneElseOther,
        dateFormat: {
            defaultFormat: "%-d %B %Y",
            shortFormat: "%-d/%m/%Y",
            longFormat: "%A %-d %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d %B %Y %-H:%M",
            shortFormat: "%-d/%m/%Y %-H:%M",
            longFormat: "%A %-d %B %Y %-H:%M"
        },
        timeFormat: {
            defaultFormat: "%-H:%M",
            shortFormat: "%-H:%M",
            longFormat: "%-H:%M:%S"
        },
        territoryOverrides: {
            'ca': {
                translations: require('./translations/fr-ca.js')
            }
        }
    },
    'zh': {
        translations: require('./translations/zh.js'),
        pluralization: pluralForms.other,
        dateFormat: {
            defaultFormat: "%Y年%-m月%-d日",
            shortFormat: "%Y-%m-%-d",
            longFormat: "%Y年%-m月%-d日 %A"
        },
        dateTimeFormat: {
            defaultFormat: "%Y年%-m月%-d日 %-H:%M",
            shortFormat: "%Y-%m-%-d %-H:%M",
            longFormat: "%Y年%-m月%-d日 %A %-H:%M"
        },
        timeFormat: {
            defaultFormat: "%-H:%M",
            shortFormat: "%-H:%M",
            longFormat: "%-H:%M:%S"
        },
        territoryOverrides: {
            'tw': {}
        }
    },
    'fi': {
        translations: require('./translations/fi.js'),
        pluralization: pluralForms.singularOneElseOther,
        dateFormat: {
            defaultFormat: "%-d. %B %Y",
            shortFormat: "%-d.%-m.%Y",
            longFormat: "%A %-d. %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d. %B %Y klo %-H.%M",
            shortFormat: "%-d.%-m.%Y klo %-H.%M",
            longFormat: "%A %-d. %B %Y klo %-H.%M"
        },
        timeFormat: {
            defaultFormat: "%-H.%M",
            shortFormat: "%-H.%M",
            longFormat: "%-H.%M.%S"
        }
    },
    'id': {
        translations: require('./translations/id.js'),
        pluralization: pluralForms.other,
        dateFormat: {
            defaultFormat: "%-d %B %Y",
            shortFormat: "%-d-%-m-‘%y",
            longFormat: "%A, %-d %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d %B %Y %-H:%M",
            shortFormat: "%-d %B %Y %-H:%M",
            longFormat: "%A, %-d %B %Y %-H:%M"
        },
        timeFormat: {
            defaultFormat: "%-H:%M",
            shortFormat: "%-H:%M",
            longFormat: "%-H:%M:%S"
        }
    },
    'it': {
        translations: require('./translations/it.js'),
        pluralization: pluralForms.singularOneElseOther,
        dateFormat: {
            defaultFormat: "%-d %B %Y",
            shortFormat: "%-d/%m/%Y",
            longFormat: "%A %-d %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d %B %Y %-H:%M",
            shortFormat: "%-d/%m/%Y %-H:%M",
            longFormat: "%A %-d %B %Y %-H:%M"
        },
        timeFormat: {
            defaultFormat: "%-H:%M",
            shortFormat: "%-H:%M",
            longFormat: "%-H:%M:%S"
        }
    },
    'ja': {
        translations: require('./translations/ja.js'),
        pluralization: pluralForms.other,
        dateFormat: {
            defaultFormat: "%Y年%-m月%-d日",
            shortFormat: "%m/%-d/%Y",
            longFormat: "%Y年%-m月%-d日 (%A)"
        },
        dateTimeFormat: {
            defaultFormat: "%Y年%-m月%-d日 %-I:%M %p",
            shortFormat: "%m/%-d/%Y %-I:%M %p",
            longFormat: "%Y年%-m月%-d日 (%A) %-I:%M %p"
        },
        timeFormat: {
            defaultFormat: "%-I:%M %p",
            shortFormat: "%-I:%M %p",
            longFormat: "%-I:%M:%S %p"
        }
    },
    'ko': {
        translations: require('./translations/ko.js'),
        pluralization: pluralForms.other,
        dateFormat: {
            defaultFormat: "%Y년 %-m월 %-d일",
            shortFormat: "%Y.%m.%-d",
            longFormat: "%Y년 %-m월 %-d일 %A"
        },
        dateTimeFormat: {
            defaultFormat: "%Y년 %-m월 %-d일 %p %-I:%M",
            shortFormat: "%Y.%m.%-d %p %-I:%M",
            longFormat: "%Y년 %-m월 %-d일 %A %p %-I시 %M분"
        },
        timeFormat: {
            defaultFormat: "%p %-I:%M",
            shortFormat: "%p %-I:%M",
            longFormat: "%p %-I:%M:%S"
        }
    },
    'ms': {
        translations: require('./translations/ms.js'),
        pluralization: pluralForms.other,
        dateFormat: {
            defaultFormat: "%-d %B %Y",
            shortFormat: "%-d/%m/%Y",
            longFormat: "%A, %-d %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d %B %Y %-I:%M %p",
            shortFormat: "%-d %B %Y %-I:%M %p",
            longFormat: "%A, %-d %B %Y %-I:%M %p"
        },
        timeFormat: {
            defaultFormat: "%-I:%M %p",
            shortFormat: "%-I:%M %p",
            longFormat: "%-I:%M:%S %p"
        }
    },
    'nl': {
        translations: require('./translations/nl.js'),
        pluralization: pluralForms.singularOneElseOther,
        dateFormat: {
            defaultFormat: "%-d %B %Y",
            shortFormat: "%-d-%m-%Y",
            longFormat: "%A %-d %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d %B %Y %-H:%M",
            shortFormat: "%-d-%m-%Y %-H:%M",
            longFormat: "%A %-d %B %Y %-H:%M"
        },
        timeFormat: {
            defaultFormat: "%-H:%M",
            shortFormat: "%-H:%M",
            longFormat: "%-H:%M:%S"
        }
    },
    'pl': {
        translations: require('./translations/pl.js'),
        pluralization: function (count) {
            var key = false;
            if (count === 1) {
                key = "one";
            } else if ([2, 3, 4].indexOf(count % 10) >= 0 && [12, 13, 14].indexOf(count % 100) < 0) {
                key = "few";
            } else if (count % 10 === 0 || [1, 5, 6, 7, 8, 9].indexOf(count % 10) >= 0 || [11, 12, 13, 14].indexOf(count % 100) >= 0) {
                key = "many";
            } else {
                key = "other";
            }
            return [key];
        },
        dateFormat: {
            defaultFormat: "%-d %B %Y",
            shortFormat: "%Y-%m-%-d",
            longFormat: "%A, %-d %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d %B %Y %-H:%M",
            shortFormat: "%Y-%m-%-d %-H:%M",
            longFormat: "%A, %-d %B %Y %-H:%M"
        },
        timeFormat: {
            defaultFormat: "%-H:%M",
            shortFormat: "%-H:%M",
            longFormat: "%-H:%M:%S"
        }
    },
    'es': {
        translations: require('./translations/es.js'),
        pluralization: pluralForms.singularOneElseOther,
        dateFormat: {
            defaultFormat: "%-d de %B de %Y",
            shortFormat: "%-d/%m/%Y",
            longFormat: "%A %-d de %B de %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d de %B de %Y %-H:%M",
            shortFormat: "%-d/%m/%Y %-H:%M",
            longFormat: "%A %-d de %B de %Y a las %-H:%M"
        },
        timeFormat: {
            defaultFormat: "%-H:%M",
            shortFormat: "%-H:%M",
            longFormat: "%-H:%M:%S"
        },
        territoryOverrides: {
            'mx': {
                translations: require('./translations/es-mx.js'),
                dateFormat: {
                    defaultFormat: "%-d de %B %Y",
                    longFormat: "%A %-d de %B del %Y"
                },
                dateTimeFormat: {
                    defaultFormat: "%-d de %B %Y %-H:%M",
                    longFormat: "%A %-d de %B del %Y %-H:%M"
                }

            }
        }
    },
    'nb': {
        translations: require('./translations/nb.js'),
        pluralization: pluralForms.singularOneElseOther,
        dateFormat: {
            defaultFormat: "%-d. %B %Y",
            shortFormat: "%-d.%m.%Y",
            longFormat: "%A %-d. %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d. %B %Y kl. %-H.%M",
            shortFormat: "%-d.%m.%Y kl. %-H.%M",
            longFormat: "%A %-d. %B %Y kl. %-H.%M"
        },
        timeFormat: {
            defaultFormat: "%-H.%M",
            shortFormat: "%-H.%M",
            longFormat: "%-H.%M.%S"
        }
    },
    'ru': {
        translations: require('./translations/ru.js'),
        pluralization: function (count) {
            var key = false;
            if (count % 10 === 1 && count % 100 !== 11) {
                key = "one";
            } else if ([2, 3, 4].indexOf(count % 10) >= 0 && [12, 13, 14].indexOf(count % 100) < 0) {
                key = "few";
            } else if (count % 10 === 0 || [5, 6, 7, 8, 9].indexOf(count % 10) >= 0 || [11, 12, 13, 14].indexOf(count % 100) >= 0) {
                key = "many";
            } else {
                key = "other";
            }
            return [key];
        },
        dateFormat: {
            defaultFormat: "%-d %B %Y",
            shortFormat: "%-d.%m.%Y",
            longFormat: "%A, %-d %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d %B %Y %-H:%M",
            shortFormat: "%-d.%m.%Y %-H:%M",
            longFormat: "%A, %-d %B %Y %-H:%M"
        },
        timeFormat: {
            defaultFormat: "%-H:%M",
            shortFormat: "%-H:%M",
            longFormat: "%-H:%M:%S"
        }
    },
    'ar': {
        translations: require('./translations/ar.js'),
        pluralization: function (count) {
            var key = false;
            if (count === 0) {
                key = "zero";
            } else if (count === 1) {
                key = "one";
            } else if (count === 2) {
                key = "two";
            } else if ([3, 4, 5, 6, 7, 8, 9, 10].indexOf(count % 100) >= 0 && [0, 1, 2].indexOf(count % 100) < 0) {
                key = "few";
            } else if (count % 100 >= 11 && count % 100 <= 99) {
                key = "many";
            } else {
                key = "other";
            }
            return [key];
        },
        dateFormat: {
            defaultFormat: "%-d %B %Y",
            shortFormat: "%-d/%m/%Y",
            longFormat: "%A %-d %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d %B %Y %-I:%M %p",
            shortFormat: "%-d/%m/%Y %-I:%M %p",
            longFormat: "%A %-d %B %Y %-I:%M %p"
        },
        timeFormat: {
            defaultFormat: "%-I:%M %p",
            shortFormat: "%-I:%M %p",
            longFormat: "%-I:%M:%S %p"
        }
    },
    'sv': {
        translations: require('./translations/sv.js'),
        pluralization: pluralForms.singularOneElseOther,
        dateFormat: {
            defaultFormat: "%-d %B %Y",
            shortFormat: "%Y-%m-%-d",
            longFormat: "%A den %-d %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d %B %Y %-H:%M",
            shortFormat: "%Y-%m-%-d %-H:%M",
            longFormat: "%A den %-d %B %Y %-H:%M"
        },
        timeFormat: {
            defaultFormat: "%-H:%M",
            shortFormat: "%-H:%M",
            longFormat: "%-H:%M:%S"
        }
    },
    'th': {
        translations: require('./translations/th.js'),
        pluralization: pluralForms.other,
        dateFormat: {
            defaultFormat: "%-d %B %Y",
            shortFormat: "%-d/%m/%Y",
            longFormat: "%A %-d %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d %B %Y %-H:%M",
            shortFormat: "%-d/%m/%Y %-H:%M",
            longFormat: "%A %-d %B %Y %-H:%M"
        },
        timeFormat: {
            defaultFormat: "%-H:%M",
            shortFormat: "%-H:%M",
            longFormat: "%-H:%M:%S"
        }
    },
    'tr': {
        translations: require('./translations/tr.js'),
        pluralization: pluralForms.other,
        dateFormat: {
            defaultFormat: "%-d %B %Y",
            shortFormat: "%-d.%m.%Y",
            longFormat: "%-d %B %Y %A"
        },
        dateTimeFormat: {
            defaultFormat: "%-d %B %Y %-H:%M",
            shortFormat: "%-d.%m.%Y %-H:%M",
            longFormat: "%-d %B %Y %A %-H:%M"
        },
        timeFormat: {
            defaultFormat: "%-H:%M",
            shortFormat: "%-H:%M",
            longFormat: "%-H:%M:%S"
        }
    },
    'vi': {
        translations: require('./translations/vi.js'),
        pluralization: pluralForms.other,
        dateFormat: {
            defaultFormat: "%-d %B %Y",
            shortFormat: "%-d/%m/%Y",
            longFormat: "%A %-d %B %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%-d %B %Y %-I:%M %p",
            shortFormat: "%-d/%m/%Y %-I:%M %p",
            longFormat: "%A %-d %B %Y %-I:%M %p"
        },
        timeFormat: {
            defaultFormat: "%-I:%M %p",
            shortFormat: "%-I:%M %p",
            longFormat: "%-I:%M:%S %p"
        }
    },
    'ca': {
        translations: require('./translations/ca.js'),
        pluralization: pluralForms.singularOneElseOther,
        dateFormat: {
            defaultFormat: "%-d de %B de %Y",
            shortFormat: "%-d/%m/%Y",
            longFormat: "%A %-d de %B de %Y"
        },
        dateTimeFormat: {
            defaultFormat: "%A %-d de %B de %Y a les %-H:%M",
            shortFormat: "%-d/%m/%Y %-H:%M",
            longFormat: "%A %-d de %B de %Y a les %-H:%M"
        },
        timeFormat: {
            defaultFormat: "%-H:%M",
            shortFormat: "%-H:%M",
            longFormat: "%-H:%M:%S"
        }
    }
};
