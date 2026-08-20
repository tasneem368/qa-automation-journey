// 1. Test Case Manager
//     * Objects for test cases (name, status, priority)
//     * Functions to filter, count, report

// let testCases = [{ name: "Login", status: "passed", priority: "high" },
//     { name: "Signup", status: "failed", priority: "medium" },
//     { name: "AddCartItem", status: "passed", priority: "medium" },
//     { name: "Payment", status: "failed", priority: "high" }
// ]
// function filterTestCases(name, status, priority) {
//     let filteredCases = testCases.filter(testCase => {
//         return (name ? testCase.name === name : true) &&
//                (status ? testCase.status === status : true) &&
//                (priority ? testCase.priority === priority : true);
//     });
//     return filteredCases;
// }
// function countTestCases(status) {
//     let count = testCases.filter(testCase => testCase.status === status).length;
//     return count;
// }
// function countPassedTestCases() {
//     return countTestCases("passed");
// }
// function countFailedTestCases() {
//     return countTestCases("failed");
// }
// function reportTestCases() {
//     let report = testCases.map(testCase => {
//         return `Name: ${testCase.name}, Status: ${testCase.status}, Priority: ${testCase.priority}`;
//     }).join("\n");
//     return report;
// }    

// console.log("Filtered Test Cases (Status: passed):", filterTestCases(null, "passed", null));
// console.log("Count of Passed Test Cases:", countPassedTestCases());
// console.log("Count of Failed Test Cases:", countFailedTestCases());
// console.log("Test Case Report:");
// console.log(reportTestCases());

// ============================================
// UNIT TEST SUITE FOR TEST CASE MANAGER
// ============================================

// Simple assertion helper
const assert = {
  equal: (actual, expected, message) => {
    if (actual !== expected) {
      throw new Error(`FAIL: ${message}\n  Expected: ${expected}\n  Got: ${actual}`);
    }
    console.log(`✓ PASS: ${message}`);
  },
  
  deepEqual: (actual, expected, message) => {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      throw new Error(`FAIL: ${message}\n  Expected: ${JSON.stringify(expected)}\n  Got: ${JSON.stringify(actual)}`);
    }
    console.log(`✓ PASS: ${message}`);
  },
  
  throws: (fn, expectedMessage, message) => {
    try {
      fn();
      throw new Error(`FAIL: ${message} - No error thrown`);
    } catch (e) {
      if (expectedMessage && !e.message.includes(expectedMessage)) {
        throw new Error(`FAIL: ${message}\n  Expected error containing: "${expectedMessage}"\n  Got: "${e.message}"`);
      }
      console.log(`✓ PASS: ${message}`);
    }
  }
};

// ============================================
// TEST SUITE
// ============================================

console.log("\n" + "=".repeat(70));
console.log("UNIT TEST SUITE - TEST CASE MANAGER");
console.log("=".repeat(70) + "\n");

let testsPassed = 0;
let testsFailed = 0;

function runTest(testName, testFn) {
  try {
    console.log(`\n[TEST SUITE] ${testName}`);
    testFn();
    testsPassed++;
  } catch (e) {
    console.error(`\n✗ ${e.message}`);
    testsFailed++;
  }
}

// ============================================
// FILTER TESTS
// ============================================

runTest("Filter: Get all test cases (no filters)", () => {
  const result = filterTestCases(null, null, null);
  assert.equal(result.length, 4, "Should return all 4 test cases");
});

runTest("Filter: By status 'passed'", () => {
  const result = filterTestCases(null, TEST_STATUS.PASSED, null);
  assert.equal(result.length, 2, "Should return 2 passed test cases");
  assert.equal(result[0].name, "Login", "First passed test should be Login");
  assert.equal(result[1].name, "AddCartItem", "Second passed test should be AddCartItem");
});

runTest("Filter: By status 'failed'", () => {
  const result = filterTestCases(null, TEST_STATUS.FAILED, null);
  assert.equal(result.length, 2, "Should return 2 failed test cases");
});

runTest("Filter: By name 'Payment'", () => {
  const result = filterTestCases("Payment", null, null);
  assert.equal(result.length, 1, "Should return 1 test case");
  assert.equal(result[0].status, TEST_STATUS.FAILED, "Payment should be failed");
});

runTest("Filter: By priority 'high'", () => {
  const result = filterTestCases(null, null, TEST_PRIORITY.HIGH);
  assert.equal(result.length, 2, "Should return 2 high priority test cases");
});

runTest("Filter: By status 'failed' AND priority 'high'", () => {
  const result = filterTestCases(null, TEST_STATUS.FAILED, TEST_PRIORITY.HIGH);
  assert.equal(result.length, 1, "Should return 1 test case");
  assert.equal(result[0].name, "Payment", "Should be Payment test case");
});

runTest("Filter: By non-existent name", () => {
  const result = filterTestCases("NonExistent", null, null);
  assert.equal(result.length, 0, "Should return empty array");
});

runTest("Filter: By status 'passed' AND priority 'high'", () => {
  const result = filterTestCases(null, TEST_STATUS.PASSED, TEST_PRIORITY.HIGH);
  assert.equal(result.length, 1, "Should return 1 test case");
  assert.equal(result[0].name, "Login", "Should be Login test case");
});

// ============================================
// COUNT TESTS
// ============================================

runTest("Count: Passed test cases", () => {
  const result = countPassedTestCases();
  assert.equal(result, 2, "Should have 2 passed test cases");
});

runTest("Count: Failed test cases", () => {
  const result = countFailedTestCases();
  assert.equal(result, 2, "Should have 2 failed test cases");
});

// ============================================
// REPORT TESTS
// ============================================

runTest("Report: Generate full report", () => {
  const result = reportTestCases();
  assert.equal(typeof result, "string", "Report should be a string");
  assert.equal(result.includes("Login"), true, "Report should contain Login");
  assert.equal(result.includes("Payment"), true, "Report should contain Payment");
  assert.equal(result.includes("\n"), true, "Report should have multiple lines");
});

// ============================================
// STATISTICS TESTS
// ============================================

runTest("Statistics: Get test statistics", () => {
  const stats = getTestStatistics();
  assert.equal(stats.total, 4, "Total should be 4");
  assert.equal(stats.passed, 2, "Passed should be 2");
  assert.equal(stats.failed, 2, "Failed should be 2");
  assert.equal(stats.passRate, "50.00%", "Pass rate should be 50%");
});

// ============================================
// VALIDATION & ERROR HANDLING TESTS
// ============================================

runTest("Validation: Invalid status throws error", () => {
  assert.throws(
    () => filterTestCases(null, "invalid", null),
    "Invalid status",
    "Should throw error for invalid status"
  );
});

runTest("Validation: Invalid priority throws error", () => {
  assert.throws(
    () => filterTestCases(null, null, "critical"),
    "Invalid priority",
    "Should throw error for invalid priority"
  );
});

runTest("Validation: Invalid name type throws error", () => {
  assert.throws(
    () => filterTestCases(123, null, null),
    "Invalid name",
    "Should throw error for invalid name type"
  );
});

runTest("Validation: countTestCases with invalid status throws error", () => {
  assert.throws(
    () => countTestCases("completed"),
    "Invalid status",
    "Should throw error for invalid status in countTestCases"
  );
});

// ============================================
// EDGE CASE TESTS
// ============================================

runTest("Edge Case: Empty filters (undefined parameters)", () => {
  const result = filterTestCases(undefined, undefined, undefined);
  assert.equal(result.length, 4, "Should return all test cases with undefined parameters");
});

runTest("Edge Case: Case sensitivity in filtering", () => {
  const result = filterTestCases("login", null, null);  // lowercase
  assert.equal(result.length, 0, "Filter should be case-sensitive");
});

runTest("Edge Case: Exact name match required", () => {
  const result = filterTestCases("Log", null, null);  // partial match
  assert.equal(result.length, 0, "Should not match partial names");
});

// ============================================
// TEST SUMMARY
// ============================================

console.log("\n" + "=".repeat(70));
console.log("TEST SUMMARY");
console.log("=".repeat(70));
console.log(`✓ Passed: ${testsPassed}`);
console.log(`✗ Failed: ${testsFailed}`);
console.log(`Total: ${testsPassed + testsFailed}`);

if (testsFailed === 0) {
  console.log("\n🎉 ALL TESTS PASSED!");
} else {
  console.log(`\n⚠️  ${testsFailed} TEST(S) FAILED`);
}

console.log("=".repeat(70) + "\n");