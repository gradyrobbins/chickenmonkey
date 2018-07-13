console.log("hello world");


const numbers = [1,2,3,4,5,6,7]

for (let i = 0; i <= 100 ; i++) {
    const currentNumber = [i];
    console.log(currentNumber);
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0)
        console.log("chicken monkey" + " at " + currentNumber);

    else if (currentNumber % 5 === 0) {
        console.log("chicken") ;
   }
   else if (currentNumber % 7 === 0) {
        console.log("monkey") 
    }
   
}