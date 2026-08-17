// let usd = 1200;
// let aud = usd * 1.5;
// console.log(`USD: ${usd}, AUD: ${aud}`);

// // comparison operators 
// let comparison1 = "5" == 5; // true
// let comparison2 = "5" === 5; // false
// let comparison3 = 5 != "5"; // false
// let comparison4 = 5 !== "5"; // true
// console.log(`Comparison 1: ${comparison1}, Comparison 2: ${comparison2}, Comparison 3: ${comparison3}, Comparison 4: ${comparison4}`);

// recap of loops data types and operators
// for (let i = 1; i <= 15; i++) {
    
//     if ( i % 5 === 0) {
//         console.log(`Asap frontend: ${i}`);
//     } 
//     else if ( i % 2 === 0) {
//         console.log(` frontend: ${i}`);
//     }
//     else {
//         console.log(`asap: ${i}`);
//     }
// }
// // second task
// let string = "Asap frontend";
// for (let i = 0; i < string.length; i++) {
//     console.log(`char is "${string[i]}" and the index is ${i}`);
// }

// function task 

function convertCurrency(amount) {
    return amount * 1.5;
}       
console.log(convertCurrency(1000)); // Output: 1500
console.log(convertCurrency(500));// Output: 750
console.log(convertCurrency(200));// Output: 300

// filyer method

let clubPeopleAge = [
    15,
    16,
    35,
    40,
    45
];
// clubPeopleAge = clubPeopleAge.filter((age) => age >= 18);
// console.log(clubPeopleAge)

// for (let i = 0; i < clubPeopleAge.length; i++) {
//     console.log(`The age of the club people is ${clubPeopleAge[i]}`);
// }
// let adults = []
// for (let i= 0; i < clubPeopleAge.length; i++) {
//     if (clubPeopleAge[i] >= 18) {
//         adults.push(clubPeopleAge[i]);
//     }
// }   
// console.log(adults);

