let testCase1 = {
  id: 1,
  name: 'Login Test',
  status: 'passed',
  priority: 'high',
  metrics: {
    duration: 2,
    memory: 45,
    cpu: 60
  },
  environment: 'staging',
  assignee: 'Tasneem',
  tags: ['smoke', 'critical']
};

// Destructuring nested objects
const { name, status, metrics: { duration } } = testCase1;
console.log(`${name}: ${duration}s`);

// Spread to create variants
let testCase2 = {
  ...testCase1,
  id: 2,
  name: 'Checkout Test',
  metrics: { ...testCase1.metrics, duration: 5 }
};

console.log(testCase2);
// spread operators can also be used to merge objects
let mergedTestCases = { ...testCase1, ...testCase2 };
console.log(mergedTestCases);
// Using rest to extract remaining properties
const { id, ...rest } = testCase1;
console.log(rest);