// Iteradores - While loop

// let i = 0; //Inicializar el While

// while (i < 10) { //condicion
//     console.log(`Numero ${i}`);
//     i++;//incremento
// }

let i = 1;
while (i <= 100) {
    if(i % 15 === 0){
        console.log(`${i} Fizz Buzz`);
    }else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    }else if (i % 5 === 0){
        console.log(`${i} Buzz`);
    }
    i++;
}