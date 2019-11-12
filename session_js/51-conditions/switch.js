/**
The getDay() method returns the weekday as a number between 0 and 6.
(Sunday=0, Monday=1, Tuesday=2 ..)
This example uses the weekday number to calculate the weekday name
 */

function getDay() {
    var day = "";
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    return day;
}

function testDefault() {
    var text = "";
    switch (new Date().getDay()) {
        case 6:
            text = "Today is Saturday";
            break;
        case 0:
            text = "Today is Sunday";
            break;
        default:
            text = "Looking forward to the Weekend";
    }
    return text;
}

function testDefault2() {
    var text = "";
    switch (new Date().getDay()) {
        default:
            text = "Looking forward to the Weekend";
            break;
        case 6:
            text = "Today is Saturday";
            break;
        case 0:
            text = "Today is Sunday";
    }
    return text;
}

function testCommonCode() {
    var text = "";
    switch (new Date().getDay()) {
        case 4:
        case 5:
            text = "Soon it is Weekend";
            break;
        case 0:
        case 6:
            text = "It is Weekend";
            break;
        default:
            text = "Looking forward to the Weekend";
    }
    return text;
}

function testStrictComparison() {
    var x = "0";
    var text = "";
    switch (x) {
        case 0:
            text = "Off";
            break;
        case 1:
            text = "On";
            break;
        default:
            text = "No value found";
    }
}