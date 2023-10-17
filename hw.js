// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

function gradeCalculator(grade) {
    if(grade >= 80){
        console.log('You did a good job');
    }else if(grade >= 70 && grade <= 80){
        console.log('log Keep trying');
    }else if(grade >= 60 && grade <= 70){
        console.log('ehhhh');
    }else if(grade >= 55 && grade <= 60){
        console.log('Not to good');
    }
}
gradeCalculator(65);


// 2.   Write a function that prints out multiples of 10 up to a given input (argument)
// asdfasdfasdfsdfasdfasdfasdf
// sdfgdfsgsfgsgsdfgs

const multiplesOfTen = (number) => {
    // for(let i=1; i <= number; i++)
    // console.log(i * 10);
    multiblesArr = [];
    while(number !== 0){
        if (number % 10 === 0){
            multiblesArr.push(number);
        }
        number -= 1
    }
    console.log(multiblesArr.join(', '));
}
multiplesOfTen(77)

// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return

function returnQuarters (billAmount, itemPrice ){
    let qNumber = 0.25;
    let billReturn = billAmount - itemPrice;
    let quarterReturned = 0;
    for(let i=0; i < billReturn; i = i + qNumber){
        quarterReturned += 1;
    }
    console.log(` The returned quarters should be ${quarterReturned}`);
}
returnQuarters(10, 2.5)


//4. Write a function that prints out how many bills you would recieve in change after paying a certain amount.  
// Return in as large denominations as possible. Parameters should be amount paind and amount cost

function bills (paid, cost){
    let remin = paid - cost;
    let bills = ["hundreds", "fifties", "tens", "fives", "twos", "ones"];
    const giveBack =[];
    let hundreds = 0;
    let fifty = 0;
    let tens = 0;
    let fives = 0;
    let twos = 0;
    let ones = 0;
    if(remin !== 0){
        while(remin >= 100){
            remin -= 100;
            hundreds +=1;
        }
        giveBack.push(hundreds);
        while(remin >= 50){
            remin -= 50;
            fifty +=1;
        }
        giveBack.push(fifty);
        while(remin >= 10){
            remin -= 10;
            tens +=1;
        }
        giveBack.push(tens)
        while(remin >= 5){
            remin -= 5;
            fives +=1;
        }
        giveBack.push(fives)
        while(remin >= 2){
            remin -= 2;
            twos +=1;
        }
        giveBack.push(twos)
        while(remin >= 1){
            remin -= 1;
            ones +=1;
        }
        giveBack.push(ones);          
    }
    for(let i =0; i < bills.length; i++){
        console.log(`${giveBack[i]} ${bills[i]}`)
    }

}

bills(254, 100);

// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, 
// print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, 
// modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).


(fizzBuzzGame = () => {
    for(let i=1; i <= 100; i++){
        if( i%3 === 0 && i%5 !== 0){
            console.log('Fizz');
        }else if( i%5 === 0 && i%3 !== 0){
            console.log('Buzz');
        }else if(i%5 === 0 && i%3 === 0){
            console.log('FizzBuzz');
        }else{
            console.log(i)
        }
    }
})()