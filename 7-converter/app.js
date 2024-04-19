function convertCoefficientUSD(targetCurrency) {
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
            return 3.67;
        default:
            return 0;
    }
}

function convertInUSD(convertSum, sourceCurrency) {
    if (sourceCurrency.toUpperCase() === 'USD') {
        return convertSum;
    } else if (convertCoefficientUSD(sourceCurrency) === 0) {
        return 0;
    } else {
        return (1 / convertCoefficientUSD(sourceCurrency)) * convertSum;
    }
}

function convert(convertSum, sourceCurrency, targetCurrency) {
    const inUSD = convertInUSD(convertSum, sourceCurrency);
    return (convertCoefficientUSD(targetCurrency) * inUSD).toFixed(2);
}

console.log(convert(100, 'rub', 'USD'));
console.log(convert(10.443, 'aed', 'rUB'));
console.log(convert(250, 'cNY', 'eur'));
console.log(convert(10000, 'usd', 'uSd'));
console.log(convert(0, 'rub', 'cny'));
console.log(convert(100, 'eur', 'bgn'));
console.log(convert(1, 'bgn', 'rub'));
