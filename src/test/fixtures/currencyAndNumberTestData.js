'use strict';
var actual,
    expected;

actual = {
    one: 1,
    oneHundredPointTwoFive: 100.25,
    oneThousandPointTwoFive: 1000.25
};

expected = {
    'ae-en': {
        currency: {
            one: 'AED 1.00',
            oneHundredPointTwoFive: 'AED 100.25',
            oneThousandPointTwoFive: 'AED 1000.25'
    },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1000.25'
        }
    },
    'at-de': {
        currency: {
            one: '1,00 €',
            oneHundredPointTwoFive: '100,25 €',
            oneThousandPointTwoFive: '1.000,25 €'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1.000,25'
        }
    },
    'au-en': {
        currency: {
            one: '$1.00',
            oneHundredPointTwoFive: '$100.25',
            oneThousandPointTwoFive: '$1,000.25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1,000.25'
        }
    },
    'br-pt': {
        currency: {
            one: 'R$1,00',
            oneHundredPointTwoFive: 'R$100,25',
            oneThousandPointTwoFive: 'R$1.000,25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1.000,25'
        }
    },
    'ca-en': {
        currency: {
            one: '$1.00',
            oneHundredPointTwoFive: '$100.25',
            oneThousandPointTwoFive: '$1,000.25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1,000.25'
        }
    },
    'ca-fr': {
        currency: {
            one: '1,00 $',
            oneHundredPointTwoFive: '100,25 $',
            oneThousandPointTwoFive: '1000,25 $'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1000,25'
        }
    },
    'ch-de': {
        currency: {
            one: '1.00 Fr.',
            oneHundredPointTwoFive: '100.25 Fr.',
            oneThousandPointTwoFive: '1\'000.25 Fr.'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1\'000.25'
        }
    },
    'cn-zh': {
        currency: {
            one: '￥1.00',
            oneHundredPointTwoFive: '￥100.25',
            oneThousandPointTwoFive: '￥1,000.25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1,000.25'
        }
    },
    'de-de': {
        currency: {
            one: '1,00 €',
            oneHundredPointTwoFive: '100,25 €',
            oneThousandPointTwoFive: '1.000,25 €'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1.000,25'
        }
    },
    'es-es': {
        currency: {
            one: '1,00 €',
            oneHundredPointTwoFive: '100,25 €',
            oneThousandPointTwoFive: '1.000,25 €'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1.000,25'
        }
    },
    'fi-fi': {
        currency: {
            one: '1,00 €',
            oneHundredPointTwoFive: '100,25 €',
            oneThousandPointTwoFive: '1 000,25 €'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1 000,25'
        }
    },
    'fr-fr': {
        currency: {
            one: '1,00 €',
            oneHundredPointTwoFive: '100,25 €',
            oneThousandPointTwoFive: '1 000,25 €'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1 000,25'
        }
    },
    'gb-en': {
        currency: {
            one: '£1.00',
            oneHundredPointTwoFive: '£100.25',
            oneThousandPointTwoFive: '£1,000.25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1,000.25'
        }
    },
    'ie-en': {
        currency: {
            one: '€1.00',
            oneHundredPointTwoFive: '€100.25',
            oneThousandPointTwoFive: '€1,000.25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1,000.25'
        }
    },
    'in-en': {
        currency: {
            one: 'Rs.1.00',
            oneHundredPointTwoFive: 'Rs.100.25',
            oneThousandPointTwoFive: 'Rs.1,000.25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1,000.25'
        }
    },
    'it-it': {
        currency: {
            one: '1,00 €',
            oneHundredPointTwoFive: '100,25 €',
            oneThousandPointTwoFive: '1.000,25 €'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1.000,25'
        }
    },
    'jp-ja': {
        currency: {
            one: '￥1',
            oneHundredPointTwoFive: '￥100',
            oneThousandPointTwoFive: '￥1,000'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1,000.25'
        }
    },
    'kr-ko': {
        currency: {
            one: '1원',
            oneHundredPointTwoFive: '100원',
            oneThousandPointTwoFive: '1,000원'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1,000.25'
        }
    },
    'my-en': {
        currency: {
            one: 'RM1.00',
            oneHundredPointTwoFive: 'RM100.25',
            oneThousandPointTwoFive: 'RM1,000.25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1,000.25'
        }
    },
    'mx-es': {
        currency: {
            one: '$1.00',
            oneHundredPointTwoFive: '$100.25',
            oneThousandPointTwoFive: '$1,000.25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1,000.25'
        }
    },
    'nl-nl': {
        currency: {
            one: '€ 1,00',
            oneHundredPointTwoFive: '€ 100,25',
            oneThousandPointTwoFive: '€ 1.000,25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1.000,25'
        }
    },
    'no-nb': {
        currency: {
            one: 'kr 1,00',
            oneHundredPointTwoFive: 'kr 100,25',
            oneThousandPointTwoFive: 'kr 1.000,25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1.000,25'
        }
    },
    'pl-pl': {
        currency: {
            one: '1,00 zł',
            oneHundredPointTwoFive: '100,25 zł',
            oneThousandPointTwoFive: '1000,25 zł'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1000,25'
        }
    },
    'pt-pt': {
        currency: {
            one: '1,00 €',
            oneHundredPointTwoFive: '100,25 €',
            oneThousandPointTwoFive: '1 000,25 €'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1 000,25'
        }
    },
    'id-id': {
        currency: {
            one: 'Rp. 1,00',
            oneHundredPointTwoFive: 'Rp. 100,25',
            oneThousandPointTwoFive: 'Rp. 1.000,25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1.000,25'
        }
    },
    'ru-ru': {
        currency: {
            one: '1,00 py6.',
            oneHundredPointTwoFive: '100,25 py6.',
            oneThousandPointTwoFive: '1000,25 py6.'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1000,25'
        }
    },
    'sa-ar': {
        currency: {
            one: '1.00 رس',
            oneHundredPointTwoFive: '100.25 رس',
            oneThousandPointTwoFive: '1000.25 رس'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1000.25'
        }
    },
    'se-sv': {
        currency: {
            one: '1 kr',
            oneHundredPointTwoFive: '100,25 kr',
            oneThousandPointTwoFive: '1000,25 kr'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1000,25'
        }
    },
    'sg-en': {
        currency: {
            one: '$1.00',
            oneHundredPointTwoFive: '$100.25',
            oneThousandPointTwoFive: '$1,000.25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1,000.25'
        }
    },
    'th-th': {
        currency: {
            one: '฿1.00',
            oneHundredPointTwoFive: '฿100.25',
            oneThousandPointTwoFive: '฿1,000.25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1,000.25'
        }
    },
    'tr-tr': {
        currency: {
            one: '1,00 TL',
            oneHundredPointTwoFive: '100,25 TL',
            oneThousandPointTwoFive: '1000,25 TL'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1000,25'
        }
    },
    'tw-zh': {
        currency: {
            one: 'NT$1.00',
            oneHundredPointTwoFive: 'NT$100.25',
            oneThousandPointTwoFive: 'NT$1,000.25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1,000.25'
        }
    },
    'us-en': {
        currency: {
            one: '$1.00',
            oneHundredPointTwoFive: '$100.25',
            oneThousandPointTwoFive: '$1,000.25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100.25',
            oneThousandPointTwoFive: '1,000.25'
        }
    },
    'vn-vi': {
        currency: {
            one: '1,00đ',
            oneHundredPointTwoFive: '100,25đ',
            oneThousandPointTwoFive: '1.000,25đ'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1.000,25'
        }
    },
    'za-en': {
        currency: {
            one: 'R1,00',
            oneHundredPointTwoFive: 'R100,25',
            oneThousandPointTwoFive: 'R1000,25'
        },
        number: {
            one: '1',
            oneHundredPointTwoFive: '100,25',
            oneThousandPointTwoFive: '1000,25'
        }
    }
};

module.exports = {
    actual: actual,
    expected: expected
};
