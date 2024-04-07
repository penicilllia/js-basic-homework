const userLanguage = prompt('Enter your language (EN, RU, HI, ES, ZH, AR):');
let translatedHello;

switch (userLanguage.toUpperCase()) {
    case 'RU':
        translatedHello = 'Привет!';
        break;
    case 'HI':
        translatedHello = 'नमस्ते';
        break;
    case 'ES':
        translatedHello = 'Hola!';
        break;
    case 'ZH':
        translatedHello = '你好';
        break;
    case 'AR':
        translatedHello = '!مرحبًا';
        break;
    default:
        translatedHello = 'Hello!';
        break;
}

alert(translatedHello);
