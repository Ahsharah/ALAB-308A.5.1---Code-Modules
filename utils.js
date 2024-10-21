// utils - Utility Module

export function sumArray(numbers){
    return numbers.reduce((sum, num)) => sum + num, 0);
}

export function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = sumArray(numbers);
    return
}