

// const now = 2037;
// const ageJohas = now - 1991;
// const ageSarah = now - 1991;

// console.log(ageJohas, ageSarah);


// console.log(ageJohas * 2, ageJohas / 2, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';

// console.log(typeof firstName + ' ' + lastName);

// let x = 10 + 5;
// x += 10;  // x = x + 10;
// x++;
// x--;
// console.log(x);


// console.log(ageJohas > ageSarah);







// const massJohn = 85;
// const heightJohn = 1.76;
// const massMark = 95;
// const heightMark = 1.88;

// const BMIJohn = massJohn / heightJohn ** 2;
// const BMIMark = massMark / heightMark ** 2

// const BMIJohn1 = massJohn / (heightJohn * heightJohn);

// console.log(BMIJohn);
// console.log(BMIJohn1);

// console.log(BMIMark);


// const markHeightBMI = BMIMark > BMIJohn;


// console.log(markHeightBMI);


// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI is higher than John's!`)
// } else {
//     console.log(`John's BMI is higher than Mark's!`)
// }

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIJohn}) is higher than John's (${BMIMark})!`)
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
// }



// const age = 15;

// if (age >= 18) {
//     console.log('works')
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft}`);
// }



// const inputYear = 1991;
// console.log(Number(inputYear), inputYear);

// console.log(Number(inputYear) + 18);

// console.log(String(23));


// console.log('i am ' + 2 + ' years');

// console.log('23' + '10');


// let n = '1' + 2;
// console.log(n); 


// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(hasDriverLicense && !hasGoodVision);


// const teamDolphins;
// const teamKoalas;

// const scoreDolphins1 = 97;
// const scoreDolphins2 = 112;
// const scoreDolphins3 = 101;

// const scoreKoalas1 = 109;
// const scoreKoalas2 = 95;
// const scoreKoalas3 = 106;

// const avgDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
// console.log(avgDolphins);

// const avgKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;
// console.log(avgKoalas);

// if (avgDolphins > avgKoalas) {
//     console.log(`Dolphins team is the winner`);
// } else if (avgKoalas > avgDolphins) {
//     console.log(`Koalas team is the winner`);
// } else if (avgKoalas === avgDolphins) {
//     console.log(`sunt egali`);
// }


// const minimunScore = 100;

// if (avgDolphins > avgKoalas && avgDolphins >= minimunScore) {
//     console.log(`Dolphins team is the winner`);
// } else if (avgKoalas > avgDolphins && avgKoalas >= minimunScore) {
//     console.log(`Koalas team is the winner`);
// } else if (avgKoalas === avgDolphins && avgKoalas >= minimunScore && avgDolphins >= minimunScore) {
//     console.log(`au castigat`);
// } else {
//     console.log(`nu au castigat`);
// }

// const day = 'monday';


// switch (day) {
//     case 'monday':
//         console.log('plan course structure');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory video');
//         break;
//     default:
//         console.log('Enjoy the weekend');
//         break;
// }


// const age = 8;
// age >= 18 ? console.log('i like wine') : console.log('i like water');

// console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);



const bill = 40;

if (bill > 50 && bill < 300) {
    console.log('The finall bill will be ' + (bill + (bill * 0.15)) + ' euro ');
} else {
    console.log('The finall bill will be ' + (bill + (bill * 0.20)) + ' euro ');
}

const tip = bill >= 50 && bill <= 300 ? 'The finall bill will be ' + (bill + (bill * 0.15)) + ' euro ' :
    'The finall bill will be ' + (bill + (bill * 0.20)) + ' euro ';

console.log(tip);