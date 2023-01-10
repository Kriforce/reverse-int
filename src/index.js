module.exports = function reverse (n) { 
    let str = n + '';
    if (str[0] == '-') return str.slice(1).split('').reverse().join('');
    else return str.split('').reverse().join('');
}
