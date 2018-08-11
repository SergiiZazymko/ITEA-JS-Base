/**
 *
 * @numbers.js
 * @author: Sergii Zazymko
 */


/**
 *
 * @param n
 * @returns {boolean}
 */
function main(n) {
    var h = document.getElementById('result');

    if (!isCorrectNumber(n)) {
        h.innerHTML = 'Not correct number';
        return false;
    }

    console.log(isCorrectNumber(n));

    n = parseInt(n).toString();

    h.innerHTML = convert(n);
    return true;
}

/**
 *
 * @param n
 * @returns {string}
 */
function convert(n) {
    var keys = [
        {
            '0' : '',
            '1' : 'I',
            '2' : 'II',
            '3' : 'III',
            '4' : 'IV',
            '5' : 'V',
            '6' : 'VI',
            '7' : 'VII',
            '8' : 'VIII',
            '9' : 'IX',
        },
        {
            '1' : 'X',
            '2' : 'XX',
            '3' : 'XXX',
            '4' : 'XL',
            '5' : 'L',
            '6' : 'LX',
            '7' : 'LXX',
            '8' : 'LXXX',
            '9' : 'XC',
        },
        {
            '1' : 'C',
            '2' : 'CC',
            '3' : 'CCC',
            '4' : 'CD',
            '5' : 'D',
            '6' : 'DC',
            '7' : 'DCC',
            '8' : 'DCCC',
            '9' : 'CM',
        },
        {
            '1' : 'M',
            '2' : 'MM',
            '3' : 'MMM',
        }
    ];

    var result = [];

    n = n.split('').reverse();

    for (var i = 0, len = n.length; i < len; i += 1) {
        result.push(keys[i][n[i]]);
    }

    return result.reverse().join('');
}

/**
 *
 * @param n
 * @returns {boolean}
 */
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 *
 * @param n
 * @returns {boolean}
 */
function isCorrectNumber(n) {
    return isNumeric(n) && +n > 0 && +n < 4000;
}
