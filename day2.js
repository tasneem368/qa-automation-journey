// // 5 QA-themed functions
// function GoogleLogin() {
// click('loginButton');
// click(' المتابعة عبر Google');
// }

// function EmailLogin() {
// click('loginButton');
// click(' المتابعة بالبريد الإلكتروني'); // this should be asserion as i think lets finsh it today like this when reviewwed we will fix it 
// Fill('emailInput');
// click(' Send code');
// console.log('Email login function executed successfully.');
// }

// function SearchStore() {
// click('searchInput');
// Fill('searchInput', 'shein');
// click('searchButton');
// console.log('Search store function executed successfully.');
// }

// function SearchProductsURls() {

// click('searchInput');
// Fill('searchInput', 'shein');
// click('searchButton');
// console.log('Search products urls function executed successfully.');

// }

// function ShopStore() {
//     scrollTo('storeSection');
//     click('storeImage');
//     click('shopeStore');
//     console.log('Shop store function executed successfully.');
// }

function GreegreetTester(name) {
    return `Hello, QA Engineer  ${name}! Welcome to our testing suite.`;
}
function isTestPassed(score) {
    return score >= 80; // Assuming 80 is the passing threshold
}
function getTestResults(name, status) {
    return `Test results for ${name}: ${status}`;
}
function calcPassRate(passed, total) {
    return (passed / total) * 100;
}

console.log(GreegreetTester('John Doe'));
console.log(isTestPassed(85)); // true
console.log(getTestResults('John Doe', 'Passed'));
console.log(calcPassRate(45, 50)); // 90        