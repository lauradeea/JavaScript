'use strict';


// function logger(x) {
//     console.log(`My name is ${x}`);
//     const age = `My name is ${x} and i am 23`;
//     return age;
// }

// console.log(logger('Jonas'));

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oragnes.`;
//     return juice;
// }

// const apppleJuice = fruitProcessor(5, 2);
// console.log(apppleJuice);

// console.log(fruitProcessor(2, 2));


// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age = calcAge1(18);
// console.log(age);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(20);
// console.log(age2)


// const yearsRetirement = (birth, firstName) => {
//     const age = 2021 - birth;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;

// }

// console.log(yearsRetirement(1970, 'Mariana'));
// console.log(yearsRetirement(1962, 'Liviu'));
// console.log(yearsRetirement(1993, 'Laura'));
// console.log(yearsRetirement(1995, 'Dani'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }



// function fruitProcessor(apples, oranges) {

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(3, 1));


// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// }


// const yearsRetirement = function (birth, firstName) {
//     const age = calcAge(birth);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return retirement;
//     } else {
//         console.log(`$firstName`);
//         return -1;
//     }

// }

// console.log(yearsRetirement(1970, 'Mariana'));
// console.log(yearsRetirement(1933, 'Liviu'));
// console.log(yearsRetirement(1993, 'Laura'));
// console.log(yearsRetirement(1995, 'Dani'));


// const calcAverage = function (score1, score2, score3) {
//     const avg = (score1 + score2 + score3) / 3;
//     return avg;
// }

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
// console.log(avgDolphins, avgKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {


//     if (avgDolphins >= (2 * avgKoalas)) {
//         const winner1 = `Dolphins win ${avgDolphins} vs. ${2 * avgKoalas}`;
//         return winner1;

//     } else if (avgKoalas >= (2 * avgDolphins)) {
//         const winner2 = `Koalas win ${avgKoalas} vs. ${2 * avgDolphins}`;
//         return winner2;

//     } else {
//         const winner3 = `Dolphins and Koalas are egali with: ${2 * avgKoalas} and ${2 * avgDolphins}`;
//         return winner3;
//     }
// }

// const ckeckWinnerResult = checkWinner(avgDolphins, avgKoalas);
// console.log(ckeckWinnerResult);



// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);


// friends[2] = 'Jay';
// console.log(friends);


// const firstName = 'Jonas';
// const jonas = [firstName, 'schmedtmann', 2037 - 1991, 'teacher', friends[1]];
// console.log(jonas);


// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const years = new Array(1991, 1993, 5465, 1546);

// const age1 = calcAge1(years[0]);
// const age2 = calcAge1(years[1]);
// const age3 = calcAge1(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [age1), calcAge1(years[1])];

// console.log(ages);



// const friends = ['Michael', 'Steven', 'Peter']

// const newLenght = friends.push('Jay');
// console.log(friends);
// console.log(newLenght);

// friends.unshift('John');
// console.log(friends);

// console.log(friends.indexOf('Steven'));

// console.log(friends.includes('Steven'));

// function calcTip(bill) {

//     return bill >= 50 && bill <= 200 ? bill * 0.15 : bill * 0.2;

// }


// const calcTip = bill => bill >= 50 && bill <= 200 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];

// const bill1 = calcTip(bills[0]);
// const bill2 = calcTip(bills[1]);
// const bill3 = calcTip(bills[bills.length - 1]);
// console.log(bill1, bill2, bill3);


// const total = [bill1 + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]]
// console.log(total);


// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// console.log(jonasArray);




// const jonas = {
//     firstName: 'James',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friend: ['Michael', 'Peter', 'Steaven']
// };

// console.log(jonas.firstName);
// console.log(jonas.friend.length);
// console.log(jonas.friend[0]);

// console.log(`${jonas.firstName} has ${jonas.friend.length} friends, and his best friend is called ${jonas.friend[0]}`);


// console.log(jonas['lastName']);
// console.log(jonas.lastName);

// const nameKey = 'Name';

// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestingIn = prompt('what do you wand to know about Jonas? Choose between firstName , lastName, age, job, and friend');

// if (jonas[interestingIn]) {
//     console.log(jonas[interestingIn]);
// } else {
//     console.log('not good');
// }

// jonas.location = "Protugal";
// jonas['twitter'] = '@jonasschmedtam';

// console.log(jonas);




// const jonas = {
//     firstName: 'James',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friend: ['Michael', 'Peter', 'Steaven'],
//     hasDriversLicense: true,

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },


//     calcDriverLicense: function () {
//         if (this.calcAge() >= 18) {
//             return `has a`;
//         } else {
//             return `not has`;
//         }
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old 
//         ${this.job}, and he  ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };


// console.log(jonas.calcAge());

// console.log(jonas.calcDriverLicense());

// console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job}, 
// and he ${jonas.calcDriverLicense()} driver's license`);

// console.log(jonas.getSummary());




// console.log(jonas.calcAge(jonas.birthYear));



// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 79,
//     height: 1.69,

//     BMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,

//     BMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }


// if (john.BMI > mark.BMI) {
//     console.log(`here`);
// }


// if (mark.BMI > john.BMI) {
//     console.log(`here`);
// }


// console.log(mark.BMI());
// console.log(john.BMI());

// console.log(`(${mark.BMI()} > ${john.BMI()} ) ? ${mark.firstName}'s BMI
//  (${mark.BMI()}) is heighter than ${john.firstName}'s (${john.BMI()}) : ${john.firstName}'s BMI
//  (${john.BMI()}) is heighter than ${mark.firstName}'s (${mark.BMI()})`);


// if (mark.BMI() > john.BMI()) {
//     console.log(` ${mark.firstName}'s BMI
//     (${mark.BMI()}) is heighter than ${john.firstName}'s (${john.BMI()})  `);
// } else {
//     console.log(` ${john.firstName}'s BMI
//     (${john.BMI()}) is heighter than ${mark.firstName}'s (${mark.BMI()}) `);
// } 

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }



// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//     console.log(`Lifting weights repetition ${jonasArray[i]} ${typeof jonasArray[i]}`);

//     types[i] = typeof jonasArray[i];

//     types.push(typeof jonasArray[i])

// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);

// }
// console.log(ages);

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight repetition ${rep}`);
    }

}

// let rep = 1;
// while (rep <= 10) {
//     console.log(`lifting weight repetition ${rep}`);
//     rep++;
// }


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

}