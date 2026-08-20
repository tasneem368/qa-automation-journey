// 1. Test Case Manager
//     * Objects for test cases (name, status, priority)
//     * Functions to filter, count, report

let testCases = [{ name: "Login", status: "passed", priority: "high" },
    { name: "Signup", status: "failed", priority: "medium" },
    { name: "AddCartItem", status: "passed", priority: "medium" },
    { name: "Payment", status: "failed", priority: "high" }
]
function filterTestCases(name, status, priority) {
    let filteredCases = testCases.filter(testCase => {
        return (name ? testCase.name === name : true) &&
               (status ? testCase.status === status : true) &&
               (priority ? testCase.priority === priority : true);
    });
    return filteredCases;
}
function countTestCases(status) {
    let count = testCases.filter(testCase => testCase.status === status).length;
    return count;
}
function countPassedTestCases() {
    return countTestCases("passed");
}
function countFailedTestCases() {
    return countTestCases("failed");
}
function reportTestCases() {
    let report = testCases.map(testCase => {
        return `Name: ${testCase.name}, Status: ${testCase.status}, Priority: ${testCase.priority}`;
    }).join("\n");
    return report;
}    

console.log("Filtered Test Cases (Status: passed):", filterTestCases(null, "passed", null));
console.log("Count of Passed Test Cases:", countPassedTestCases());
console.log("Count of Failed Test Cases:", countFailedTestCases());
console.log("Test Case Report:");
console.log(reportTestCases());