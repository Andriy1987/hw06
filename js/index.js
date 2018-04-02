const n = parseInt(prompt('type number'));

document.write('rec' + ' ' + recFib(n) + '<br>');
document.write('alg' + ' ' + solveFib(n) + '<br>');
document.write('form' + ' ' + forFib(n) + '<br>');

function solveFib(n) {
    let a = 1;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b
}

function recFib(n) {
    return n < 1 ? n + 1 : recFib(n - 1) + recFib(n - 2);
}

function forFib(n) {
    let a = Math.ceil(((((1 + Math.sqrt(5)) / 2) ** (n + 1)) - (((1 - Math.sqrt(5)) / 2) ** (n + 1))) / (Math.sqrt(5)));
    return a;
}
let fibAry = [1, 1];
for (i = 1; i < n; i++) {
    fibAry.push(fibAry[fibAry.length - 1] + fibAry[fibAry.length - 2]);
}
let result = fibAry[fibAry.length - 1];
document.write('array' + ' ' + result);
