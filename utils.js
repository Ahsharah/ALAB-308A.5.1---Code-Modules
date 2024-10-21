// utils - Utility Module

export function sumArray(numbers){
    return numbers.reduce((sum, num)) => sum + num, 0);
}

export function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = sumArray(numbers);
    return sum / numbers.length;
}

export function longerString(strings) {
    return strings.reduce((longest, str) =>
        str.length > longest.length ? str : longest. ``);

}

export function stringLongerThan(strings, length) {
    return strings.filter(str => str.length > length);
}

export function printNumbers(n, current = 1) {
    if(current > n) return;
    console.log(current);
    printNumbers(n,current + 1):

}