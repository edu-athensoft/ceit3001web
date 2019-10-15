/** Ex4 | Tempreture Converter

issue:
1. display result at proper location
2. decimal place is 1

*/

fahrenheit = getFahrenheit();     // need user input
celsius = Fahrenheit2Celsius(fahrenheit);
// alert(celsius);

printCelsius(celsius);

function test(){
    // alert("ex4.js ok");

    // fahrenheit = getFahrenheit();
    // alert(fahrenheit);  
}

/* conver Fahrenheit to Celsiss 
*  f is Fahrenheit value
*/
function Fahrenheit2Celsius(f){
    c = 5/9*(f-32)
    return c;
}

/* user input by prompt */
function getFahrenheit(){
    f = prompt("Please input a Fahrenheit value: ")
    return f;
}

/* output to document */
function printCelsius(c){
    var result = "<span>"+c+"</span>"
    document.write(result);
}

