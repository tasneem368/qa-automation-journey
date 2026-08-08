//💻 BUILD: day3.js — Test Results Filter
let testResults = [
  { name: "login", status: "PASS", duration: 120, priority: "HIGH" },
  { name: "search", status: "FAIL", duration: 90, priority: "MEDIUM" },
    { name: "checkout", status: "PASS", duration: 200, priority: "HIGH" },  
    { name: "profile", status: "FAIL", duration: 150, priority: "LOW" },    
{ name: "logout", status: "PASS", duration: 80, priority: "MEDIUM" },
];
testResults.filter((result) => result.status === "FAIL").forEach((result) => {
  console.log(`Test: ${result.name}, Status: ${result.status}, Duration: ${result.duration}ms, Priority: ${result.priority}`);
});

//- getPassRate(tests) → returns % passed
// testResults.filter((result) => result.status === "PASS").forEach((result) => {

  //- getHighPriorityFails(tests) → returns high priority failures
testResults.filter((result) => result.status === "FAIL" && result.priority === "HIGH").forEach((result) => {
  console.log(`High Priority Fail: ${result.name}, Duration: ${result.duration}ms`);
});