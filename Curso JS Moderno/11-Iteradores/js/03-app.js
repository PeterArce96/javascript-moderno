// Iteradores - Fizz Buzz

// Numeros del 0 al 100, todos los multiplos de 3 deben imprimir "Fizz", los multiplos de 5 "Buzz" y los multiplos de 15 "Fizz Buzz"
// 3 6 9 12 ... fizz
// 5 10 15 20 ... buzz
// 15 30 45 60 ... fizz buzz

for (let i = 1; i <= 100; i++) {
    if(i % 15 === 0){
        console.log(`${i} Fizz Buzz`);
    }else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    }else if (i % 5 === 0){
        console.log(`${i} Buzz`);
    }
}
