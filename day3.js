// //💻 BUILD: day3.js — Test Results Filter
// let testResults = [
//     { name: "login", status: "PASS", duration: 120, priority: "HIGH" },
//     { name: "search", status: "FAIL", duration: 90, priority: "MEDIUM" },
//       { name: "checkout", status: "PASS", duration: 200, priority: "HIGH" },  
//       { name: "profile", status: "FAIL", duration: 150, priority: "LOW" },    
//   { name: "logout", status: "PASS", duration: 80, priority: "MEDIUM" },
//   ];
//   testResults.filter((result) => result.status === "FAIL").forEach((result) => {
//     console.log(`Test: ${result.name}, Status: ${result.status}, Duration: ${result.duration}ms, Priority: ${result.priority}`);
//   });

//   //- getPassRate(tests) → returns % passed
//   // testResults.filter((result) => result.status === "PASS").forEach((result) => {

//     //- getHighPriorityFails(tests) → returns high priority failures
//   testResults.filter((result) => result.status === "FAIL" && result.priority === "HIGH").forEach((result) => {
//     console.log(`High Priority Fail: ${result.name}, Duration: ${result.duration}ms`);
//   });
// Test Results Data
let testResults = [
  { name: "login", status: "PASS", duration: 120, priority: "HIGH" },
  { name: "search", status: "FAIL", duration: 90, priority: "MEDIUM" },
  { name: "checkout", status: "PASS", duration: 200, priority: "HIGH" },  
  { name: "profile", status: "FAIL", duration: 150, priority: "LOW" },    
  { name: "logout", status: "PASS", duration: 80, priority: "MEDIUM" },
];

// Functions using array methods
function filterFailed(tests) {
  return tests.filter(result => result.status === "FAIL");
}

function getPassRate(tests) {
  let passed = tests.filter(t => t.status === "PASS").length;
  return ((passed / tests.length) * 100).toFixed(2);
}

function getHighPriorityFails(tests) {
  return tests.filter(t => t.status === "FAIL" && t.priority === "HIGH");
}

// Test the functions
console.log("=== Failed Tests ===");
filterFailed(testResults).forEach((result) => {
  console.log(`Test: ${result.name}, Status: ${result.status}, Duration: ${result.duration}ms, Priority: ${result.priority}`);
});

console.log("\n=== Pass Rate ===");
console.log(`Pass Rate: ${getPassRate(testResults)}%`);

console.log("\n=== High Priority Failures ===");
getHighPriorityFails(testResults).forEach((result) => {
  console.log(`High Priority Fail: ${result.name}, Duration: ${result.duration}ms`);
});