// задание 3
//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH"

const string = 'qwerty';
const reverse = string.split('').reverse().join(''); //ВСТРОЕННЫЙ МЕТОД REVERSE

console.log(reverse);