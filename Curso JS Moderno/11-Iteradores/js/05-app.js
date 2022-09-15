// Iteradores - Do While loop
// Se ejecuta al menos una vez, porque primero ejecuta y luego evalúa la condición

// let i = 100;

// do {
//     console.log(`Numero ${i}`);
//     i++;
// } while (i < 10);

let i = 1;
do {
    if(i % 15 === 0){
        console.log(`${i} Fizz Buzz`);
    }else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    }else if (i % 5 === 0){
        console.log(`${i} Buzz`);
    }
    i++;
}while(i <= 100);