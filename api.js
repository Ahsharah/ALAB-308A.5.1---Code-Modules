// api.js
import { sumArray, calculateAverage } from '.utils.js';

/**
 * Sorts an array of ojbects by age////
 * @param {Object[]} - arr - Array of objects with age property
 * @returns {Object[]} - Sorted array
 */
export function sortByAge(arr) {
    return arr.sort((a,b) => parseInt(a.age) - parseInt(b.age));
}

/**
 * Filters an array to remove entires with age greather than 50
 * @param {Object[]} arr - Array of objects with age property
 * @returns {Object[]} - Transformed array
 */
export function filterAgeAbove50(arr) {
    return arr.filter((item) => parseInt(item.age) <= 50);
}
/**
 * Transforms data by changing "occupation" to "job" and incrementing age
 * @param {Object[]} arr - Array of objects to transform
 * @returns {Object[]} Transformed array
 */
export function transformData(arr) {
    return arr.map((item) => ({
        ...item,
        job: item.occupation,
        age: (parseInt(item.age) + 1).toString()
    }));
}
