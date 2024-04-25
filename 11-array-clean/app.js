const leapYear = year => (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);

const changeDateFormat = date => [date[0], date[2]] = [date[2], date[0]];

function daysInMonth(month, year) {
    switch (Number(month)) {
        case 2:
            return leapYear(year) ? 29 : 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        default:
            return 31;
    }
}

const isDateValid = date => date[0] <= daysInMonth(date[1], date[2]) &&
                            Number(date[1]) <= 12 &&
                            date[2].length <= 4;

function dateArray(arr) {
    const datesArray = [];
    const splittedArray = arr.map(date => date.split(/(\.|\-|\/|\/)/));

    splittedArray.forEach(subArr => {
        if (subArr.includes('/')) {
            changeDateFormat(subArr);
        }

        const date = subArr.filter(element => !isNaN(element));

        if (date.length === 3 && isDateValid(date)) {
            datesArray.push(date.join('-'));
        }
    });

    return datesArray;
}

const dates = ['01.12.2021', '06/26/2024', 'xx/03/xxxx', '28-03-2000', '60/26/1999', 'test string', '15-15-2000'];

console.log(dateArray(dates));
