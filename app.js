// Sample data for API functions
const data = [
{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57",  name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", ocupation: "Quiz Master", age:"58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// Test API functions
console.log("\nTesting API functions:");
console.log("Sorted by age:", sortByAge([...data]));
console.log("Filtered age <= 50:", filterAgeAbove50(data));
console.log("Transformed data:", transformData(data));

const ageStats = caluculateAgeStats(data);
console.log("Age statistics:");
console.log(`Sum of ages: ${ageStats.sum}`);
console.log(`Average age: ${ageStats.average.toFixed(2)}`);