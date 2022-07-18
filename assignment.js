//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//(do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). 
//Print the result to the console.
console.log(ages[ages.length-1] - ages[0]);

//Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(45);
console.log(ages[ages.length-1] - ages[0]);

//Use a loop to iterate through the array and calculate the average age. Print the result to the console.
function avgAges(ages){
    let sum = 0;
for (i=0; i < ages.length; i++){
    sum += ages[i] ;
}
console.log(sum / ages.length) ;
}
avgAges(ages);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
function avgLetter(names){
    let sum = 0;
    for (i = 0; i < names.length; i++){
        sum += names[i].length;
    }
    console.log(sum / names.length);
}
avgLetter(names);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, 
//and print the result to the console
function avgLetter2(names){
    let sum = ''
    for (i = 0; i < names.length; i++){
        sum += names[i] += ' '
    }
    console.log(sum)
}
avgLetter2(names)
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//How do you access the last element of any array?
console.log('array[array.length - 1]');

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//How do you access the first element of any array?
console.log('array[0]')

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the 
//length of each name to the nameLengths array.
//For example:
    //namesArray = ["Kelly", "Sam", "Kate"] //given this array
    //nameLengths = [5, 3, 4] //create this new array
const nameLengths = []
for (i = 0; i < names.length; i++){
        nameLengths.push(names[i].length - 1);
    }
    console.log(nameLengths);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
//Print the result to the console.
function sumNameLengths(nameLengths){
    let sum = 0;
for (i = 0; i < nameLengths.length; i++){
    
    sum += nameLengths[i];
}
console.log(sum);
}
sumNameLengths(nameLengths);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated
// to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function nameByNumber(wordInput, numberInput){
    let sum = ''
    for (i = 0; i < numberInput; i++){
        sum += wordInput;
    }
    console.log(sum)
}
nameByNumber('Hello', 3)

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Write a function that takes two parameters, firstName and lastName, and returns a full name 
//(the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName){
    console.log(firstName + ' ' + lastName);
}
fullName('Jacob', 'Deltoro');

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
const numbers = [40, 30, 20, 10, 5];
function over100(numbers){
    let sum = 0;
    for (i = 0; i < numbers.length; i++){
        sum += numbers[i]
        if (sum > 100){
            console.log(true);
        }
    }
    
}
over100(numbers);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Write a function that takes an array of numbers and returns the average of all the elements in the array.
function avg(numbersArray){
    let sum = 0;
for (i=0; i < numbersArray.length; i++){
    sum += numbersArray[i] ;
}
return sum / numbersArray.length ;
}
avg(numbers);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Write a function that takes two arrays of numbers and returns true if the average of the elements 
//in the first array is greater than the average of the elements in the second array.
function avgGreater(numbers1, numbers2){
    if (avg(numbers1) > avg(numbers2)){      
        console.log(true); 
    }
    else{console.log(false);}
}
avgGreater(ages, numbers);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside == true && moneyInPocket > 10.5){
        return true
    }
}
console.log(willBuyDrink(true, 30))

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function squareNumber(num){
    let result = num * num;
    return result;
}
console.log(squareNumber(13));
//This function takes a number input and multiplies it against itself, then returns the result. 