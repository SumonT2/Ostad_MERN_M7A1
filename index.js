// Add Two Number
function add(x, y) {
    let result = x + y;
    return result;
}

let allResult = add(100, 200) + add(600, 500) + add(50, 80);
console.log(allResult);


// Multiply Two Number
function multiply(x,y){
    if(typeof(x)!=="number"){
        return "1st Number is not a number."
    }
     else if(typeof(y)!=="number"){
        return "2nd Number is not a number."
    }
    else{
        return x*y
    }
}
console.log(multiply(5,10))


// Even or Odd Checker
function isEven(num) {
    // if (num % 2 === 0) {
    //     return "Even";
    // } else {
    //     return "Odd";
    // }
    return num % 2 === 0 ? "Even" : "Odd"
}
console.log(isEven(9))


//Convert Celcius to Fahrenheit
function CelciusToFahrenheit(celcius){
    return (celcius* 9/5)+32
}
console.log(CelciusToFahrenheit(2))


// Square of a Number
function squareNumber(num){
    return num*num
}
console.log(squareNumber(10))


// Get First Character of a String
function firstCharacter(str){
    return str.charAt(0)
}
console.log(firstCharacter("Hello"))


// Number is Positive or Negative
function checkNum(num){
    // if(num>=0){
    //     return "Positive"
    // }
    // else{
    //     return "Negative"
    // }

    // return num >= 0 ? "Positive":"Negative"

    switch(true){
        case (num>=0): return "Positive";
        default: return "Negative"
    }

    // Not checking for Zero, let Zero positive number
}
console.log(checkNum(4))


// Minute to Second
function minuteToSecond(minute){
    return minute*60
}
console.log(minuteToSecond(60))


// Concatenate Two String
function Concatenate(x,y){
    return x+" "+y
}
console.log("Hello", "World")


// Check if String Contains a Word
function checkStr(sentence,word){
return sentence.includes(word)
}
console.log(checkStr("I love javascript", "javascript"))