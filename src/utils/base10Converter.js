/**
 * Convert a number from a 10 base to another
 * 
 * @param n - The number to convert
 * @param baseTo - convert the number to this base 
 * @return - the converted number
 */

function convertFrom10To2(n) {

    const result = [];

    while (n !== 0) {
        result.push(n % 2);
        n = Math.floor(n / 2);
    }

    return result.reverse().join('');

}

/**
 * Convert a number from a base to base 10
 * 
 * @param n - The number to convert
 * @param baseFrom - convert the number from this base 
 * @return - the converted number
 */

function convertFrom2To10(n) {

    n = n.toString().split('').map((char, index, array) => {
        const power = (array.length - 1) - index;
        const numb = Number.parseInt(char);
        return numb * Math.pow(2, power);
    }).reduce((accumulator, current) => {
        return accumulator + current;
    })

    return n.toString();

}

function convertFrom10To16(n) {

    let result = [];

    const int = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    while (n !== 0) {
        result.push(n % 16);
        n = Math.floor(n / 16);
    }

    return result.map((n, index) => {
        return int[n];
    })
        .reverse()
        .join('');

}

function convert(n, from, to) {
    if (from === 10) return to === 2 ? convertFrom10To2(n) : convertFrom10To16(n);
    if (from === 2) return convertFrom2To10(n);
}

export { convert, convertFrom10To2, convertFrom2To10, convertFrom10To16 };