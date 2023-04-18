//დავალება 1  (დაწერეთ ალგორითმი, რომელიც იპოვის და დაბეჭდავს ერეიში მაქსიმუმის და მინიმუმის მნიშვნელობას. ერეიში 
//ელემენტების რაოდენობა განუსაზღვრელია, ერეის ყველა ელემენტი არის number ტიპის.)

const numbers = [28, 27, 94, 15, 277, 2837, 22, 63, 48, 20];

function maxAndMin(numbers) {
    let max = numbers[0];
    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] > max) {
            max = numbers[i];
        }
    
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    console.log("Maximum number is " + max);
    console.log("Minimum number is " + min);
}

maxAndMin(numbers);

//დავალება2   (დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს და დააბრუნებს (პირველი პარამეტრი ხარისხად მეორე პარამეტრის) მნიშვნელობას
//მაგ: გადაცემული პარამეტრები 2, 3 => 8 ან 4, 2 => 16;
//დაბრუნებული მნიშვნელობა შეინახეთ ცვლადში და შემდეგ დალოგეთ კონსოლში.)

function power(first, second) {
    let result = 1;

    for (let i = 0; i < second; i++) {
        result *= first;
    }

    return result;
}

const eg1 = power(4,6);
const eg2 = power(5,3);

console.log(eg1);
console.log(eg2);

//დავალება 3 (მოიძიეთ ინფორმაცია arrow ფუნქციებზე და მეორე დავალების ამოცანა გადაწერეთ arrow ფუნქციის გამოყენებით)
     //თან გავიგე ეს arrow ფუნქცია და თან ვერა, ამიტომ შემდეგ ლექციას დაველოდები და მერე გადავწერ მეორე დავალებას.


//დავალება 4  (მოიძიეთ ინფორმავია do while ციკლზე და დაწერეთ თქვენი მაგალითი)

let age = '';
let i = 1;

do {
    i = i + 2;
    age = age + i;
} while (i < 8);

console.log(age);





