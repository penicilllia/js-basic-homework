const card1 = ' 4561-2612-1234-5467   '
const card2 = '- 4561-2612-1234-5464--  '
const card3 = '- 4561-2612-1234--  '

function lunaAlgorithm(number) {
    let numberSum = 0;

    for (let i = 0; i < number.length; i++) {
        let element = number[i];

        if (i % 2 === 0) {
            element *= 2;

            if (element > 9) {
                element = element - 9;
            }
        }

        numberSum += Number(element);
    }

    return numberSum % 10 === 0;
}

function isCardCorrect(card) {
    card = card.replaceAll('-', '');
    card = card.replaceAll(' ', '');

    if (isNaN(card) || card.length !== 16) {
        return false;
    }

    return lunaAlgorithm(card);
}

console.log(isCardCorrect(card1));
console.log(isCardCorrect(card2));
console.log(isCardCorrect(card3));
