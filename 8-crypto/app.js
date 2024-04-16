let encrypted;
let decrypted;

const changeElements = function(passwordArrayI, passwordArrayJ) {
    [passwordArrayI, passwordArrayJ] = [passwordArrayJ, passwordArrayI];
}

function crypto(password) {
    let passwordArray = password.split('');
    const halfOfArray = (passwordArray.length / 2).toFixed() - passwordArray.length % 2;

    for (i = 0, j = halfOfArray; j < passwordArray.length, i < halfOfArray; i++, j++) {
        changeElements(passwordArray[i], passwordArray[j]);
    }

    encrypted = passwordArray.join('');
}

function check(encrypted, password) {
    let passwordArray = encrypted.split('');
    const halfOfArray = (passwordArray.length / 2).toFixed() - passwordArray.length % 2;
    const jStart = passwordArray.length - passwordArray.length % 2 - 1;

    for (i = halfOfArray - 1, j = jStart; i >= 0, j >= halfOfArray; i--, j--) {
        changeElements(passwordArray[i], passwordArray[j]);
    }

    decrypted = passwordArray.join('');

    return decrypted === password ? true : false;
}

const password1 = '1234_qwerty-0180)))-*';
const password2 = 'abcd';
const password3 = 'abcde';
const password4 = 'a';
const password5 = '';

crypto(password1);
console.log(check(encrypted, password1));
console.log(check(encrypted, password2));

crypto(password2);
console.log(check(encrypted, password2));
console.log(check(encrypted, password3));

crypto(password3);
console.log(check(encrypted, password3));
console.log(check(encrypted, password2));

crypto(password4);
console.log(check(encrypted, password4));

crypto(password5);
console.log(check(encrypted, password5));
