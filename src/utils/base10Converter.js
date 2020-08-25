/**
 * Convert a number from a 10 base to another
 * 
 * @param n - The number to convert
 * @param baseTo - convert the number to this base 
 * @return - the converted number
 */

function convertFrom10To(n, baseTo) {

    const result = [];

    while (n !== 0) {
        result.push(n % baseTo);
        n = Math.floor(n / baseTo);
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

function convertFromTo10(n, baseFrom) {

    n = n.toString().split('').map((char, index, array) => {
        const power = (array.length - 1) - index;
        const numb = Number.parseInt(char);
        return numb * Math.pow(baseFrom, power);
    }).reduce((accumulator, current) => {
        return accumulator + current;
    })

    return n.toString();

}

export { convertFrom10To, convertFromTo10 };