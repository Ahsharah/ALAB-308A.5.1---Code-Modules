// utils.js
/**
 * Calculates the sum of all numbers in an array.
 * @param {number[]} numbers - The array of numbers to sum.
 * @returns {number} The sum of all numbers in the array.
 */
export function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

/**
 * Calculates the average of an array of numbers.
 * @param {number[]} numbers - The array of numbers to average.
 * @returns {number} The average of the numbers, or 0 if the array is empty.
 */
export function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = sumArray(numbers);
    return sum / numbers.length;
}

/**
 * Finds the longest string in an array of strings.
 * @param {string[]} strings - The array of strings to search.
 * @returns {string} The longest string in the array.
 */
export function longestString(strings) {
    return strings.reduce((longest, str) =>
        str.length > longest.length ? str : longest, '');
}

/**
 * Filters an array of strings to return only those longer than a specified length.
 * @param {string[]} strings - The array of strings to filter.
 * @param {number} length - The minimum length to filter by.
 * @returns {string[]} An array of strings longer than the specified length.
 */
export function stringLongerThan(strings, length) {
    return strings.filter(str => str.length > length);
}

/**
 * Prints numbers from 1 to n recursively.
 * @param {number} n - The maximum number to print.
 * @param {number} [current=1] - The current number (used for recursion, defaults to 1).
 */
export function printNumbers(n, current = 1) {
    if (current > n) return;
    console.log(current);
    printNumbers(n, current + 1);
}

// Test the functions
console.log("Sum of [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5]));
console.log("Average of [1, 2, 3, 4, 5]:", calculateAverage([1, 2, 3, 4, 5]));
console.log("Longest string:", longestString(['a', 'bb', 'ccc']));
console.log("Strings longer than 2:", stringLongerThan(['a', 'bb', 'ccc'], 2));
console.log("Printing numbers 1 to 5:");
printNumbers(5);