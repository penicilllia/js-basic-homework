function convertCoefficientRUB (targetCurrency) {
    switch (targetCurrency.toUpperCase()) {
        case 'RUB':
            return 1;
        case 'USD':
            return 0.011;
        case 'EUR':
            return 0.01;
        case 'CNY':
            return 0.078;
        case 'AED':
            return 0.04;
        default:
            return 0;
    }
}

function convertCoefficientUSD (targetCurrency) {
    switch (targetCurrency.toUpperCase()) {
        case 'RUB':
            return 92.58;
        case 'USD':
            return 1;
        case 'EUR':
            return 0.92;
        case 'CNY':
            return 7.25;
        case 'AED':
            return 0.27;
        default:
            return 0;
    }
}

function convertCoefficientEUR (targetCurrency) {
    switch (targetCurrency.toUpperCase()) {
        case 'RUB':
            return 100.22;
        case 'USD':
            return 1.08;
        case 'EUR':
            return 1;
        case 'CNY':
            return 7.85;
        case 'AED':
            return 3.98;
        default:
            return 0;
    }
}

function convertCoefficientCNY (targetCurrency) {
    switch (targetCurrency.toUpperCase()) {
        case 'RUB':
            return 12.77;
        case 'USD':
            return 0.14;
        case 'EUR':
            return 0.13;
        case 'CNY':
            return 1;
        case 'AED':
            return 0.51;
        default:
            return 0;
    }
}

function convertCoefficientAED (targetCurrency) {
    switch (targetCurrency.toUpperCase()) {
        case 'RUB':
            return 25.21;
        case 'USD':
            return 0.27;
        case 'EUR':
            return 0.25;
        case 'CNY':
            return 1.97;
        case 'AED':
            return 1;
        default:
            return 0;
    }
}

function convertCoefficient (sourceCurrency, targetCurrency) {
    switch (sourceCurrency.toUpperCase()) {
        case 'RUB':
            return convertCoefficientRUB(targetCurrency);
        case 'USD':
            return convertCoefficientUSD(targetCurrency);
        case 'EUR':
            return convertCoefficientEUR(targetCurrency);
        case 'CNY':
            return convertCoefficientCNY(targetCurrency);
        case 'AED':
            return convertCoefficientAED(targetCurrency);
        default:
            return 0;
    }
}

function convert (convertSum, sourceCurrency, targetCurrency) {
    const coefficient = convertCoefficient(sourceCurrency, targetCurrency);
    return (convertSum * coefficient).toFixed(2);
}

console.log(convert(100, 'rub', 'USD'));
console.log(convert(10.443, 'aed', 'rUB'));
console.log(convert(250, 'cNY', 'eur'));
console.log(convert(10000, 'usd', 'uSd'));
console.log(convert(0, 'rub', 'cny'));
console.log(convert(100, 'eur', 'bgn'));
console.log(convert(1, 'bgn', 'rub'));
