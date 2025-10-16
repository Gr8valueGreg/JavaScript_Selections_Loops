console.log("Hello World!\n==========\n");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
    } else {
        continue
    }
}
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} FIZZBUZZ`);
    } else if (i % 5 == 0)  {
        console.log(`${i} BUZZ`);
    } else if (i % 3 == 0) {
        console.log(`${i} FIZZ`);
    } else  {
        continue
    }
}

// Exercise 2 Section
console.log("EXERCISE 3:\n==========\n");
console.log("Odd number While");

let i = 1;
while (i <= 100) {
    if (i % 2 == 1) {
        console.log(i);
    }
i++;
}

console.log("Odd number Do/While");

i = 1
do {
    if (i % 2 == 1) {
        console.log(i);
    }
    i++;
} while (i <=100)

console.log("FIZZBUZZ While")

i = 1;
while (i <=100) {
    if (i % 3 == 0 && i % 5 ==0) {
        console.log(`${i} FIZZBUZZ`);
    } else if (i % 5 == 0) {
        console.log(`${i} BUZZ`);
    } else if (i % 3 == 0) {
        console.log (`${i} FIZZ`);
    }
i++;
}

console.log("FIZZBUZZ Do/While");

i = 1;
do { 
    if (i % 3 == 0 && i % 5 ==0) {
        console.log(`${i} FIZZBUZZ`);
    } else if (i % 5 == 0) {
        console.log(`${i} BUZZ`);
    } else if (i % 3 == 0) {
        console.log (`${i} FIZZ`);
    }
i++;
} while (i <=100)

console.log("EXERCISE 3:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let found = false;

for (let i = 1; i <= n; i++) {
    if (i === value) {
        console.log(`Found ${value}!`);
        found = true;
        break;
    } 
    if (!found) {
    console.log(`Did not find ${value} within 1-${n}`);
    }
}


console.log("EXERCISE 4:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log("range from " + start + "-" + end + " FIZZ Divisor " + fizzDivisor + " BUZZ Divisor " + buzzDivisor);

for (let i = start; i <= end; i++) {

    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log(`${i} FIZZBUZZ`);
    } else if (i % buzzDivisor == 0) {
        console.log(`${i} BUZZ`);
    } else if (i % fizzDivisor == 0) {
        console.log(`${i} FIZZ`);
    }

}

console.log("EXERCISE 5:\n==========\n");