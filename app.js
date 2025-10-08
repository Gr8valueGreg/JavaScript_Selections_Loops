console.log("Hello World!\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
    } else {
        continue
    }
}

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let n = 1; n <= 100; n++) {
    if (n % 3 == 0 && n % 5 == 0) {
        console.log(`${n} FIZZBUZZ`);
    } else if (n % 5 == 0)  {
        console.log(`${n} BUZZ`);
    } else if (n % 3 == 0) {
        console.log(`${n} FIZZ`);
    } else  {
        continue
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

i = 1;
while (i <= 100) {
    if (i % 2 == 1) {
        console.log(i);
    } else {
        continue
    }
i++;
    break
}

//i = 1;
//do {
  //  if (i % 2 == 1) {
    //    console.log(i);
   // } else {
    //    continue
   // }
   // i++;
//} while (i <=100)

console.log("EXERCISE 3:\n==========\n");