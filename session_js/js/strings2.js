
function findString() {
    var str = "Please locate where 'locate' occurs!";
    var fpos = str.indexOf("locate");
    var lpos = str.lastIndexOf("locate");
    console.log("first location is: " + fpos);
    console.log("last location is: " + lpos);

    var fpos = str.indexOf("locate", 15);
    console.log("first location is: " + fpos);
}

function searchString() {
    var str = "Please locate where 'locate' occurs!";
    var pos = str.search("locate");
    console.log("location is: " + pos);
}

/** extracting substring */
function sliceString() {
    var str = "Please locate where 'locate' occurs!";
    var result = str.slice(0, 6);
    console.log(result + " " + result.length);
}

function substringString() {
    var str = "Apple, Banana, Kiwi";
    var result = str.substring(7, 13);
    console.log(result + " " + result.length);

    result = str.substring(7);
    console.log(result + " " + result.length);
}

function substrString() {
    var str = "Apple, Banana, Kiwi";
    var result = str.substr(7, 6);
    console.log(result + " " + result.length);

    var result = str.substr(7, 9);
    console.log(result + " " + result.length);

    var result = str.substr(-4);
    console.log(result + " " + result.length);
}

function replaceString() {
    var str = "Please visit Microsoft!";
    console.log(str);
    var n = str.replace("Microsoft", "W3Schools");
    console.log(n);

    var str2 = "Please locate where 'locate' occurs!";
    n = str2.replace("locate", "LOC");
    n = n.replace("locate", "LOC");
    console.log(n);

    str = "Please visit MicroSoft!";
    var m = str.replace(/MICROSOFT/i, "W3Schools");
    console.log(m);


    str = "Please visit MicrosoFT and MicroSoft!";
    var p = str.replace(/Microsoft/gi, "W3Schools");
    console.log(p);
}

function myToUpperCase() {
    var str = "Please visit MicrosoFT and MicroSoft!";
    console.log(str.toUpperCase());
}

function myToLowerCase() {
    var str = "Please visit MicrosoFT and MicroSoft!";
    console.log(str.toLowerCase());
}


function concateString() {
    var text1 = "Hello";
    var text2 = "World";
    var text3 = text1.concat("*", text2);
    console.log(text3);
}

function trimString() {
    var str = "       Hello World!        ";
    console.log(str.trim());
}

/** Extracting String Characters */

function accessChar() {
    var str = "HELLO WORLD";
    console.log(str.charAt(0));
}

function accessChar() {
    var str = "HELLO WORLD";
    console.log(str.charAt(0));

    console.log(str[0]);
}

function accessCharCode() {
    var str = "HELLO WORLD";
    console.log(str.charCodeAt(0));
}

function string2Array() {
    var txt = "a,b,c|d,e,t,d,y,e,s,q,e";   // String
    var n1 = txt.split(",");          // Split on commas
    // console.log(n1[0]);
    // console.log(n1[1]);
    // console.log(n1[2]);
    // console.log(n1[3]);
    // console.log(n1[4]);

    for(var i=0; i<n1.length;i++){
        console.log(n1[i]);
    }

    txt.split(" ");          // Split on spaces
    n1 = txt.split("|");          // Split on pipe
    console.log(n1[0]);
    console.log(n1[1]);

    var txt2 = "12345";
    var n2 = txt2.split("");

    for(var i=0; i<n2.length;i++){
        console.log(n2[i]);
    }
}

function test() {
    // findString();
    // searchString();
    // sliceString();
    // substringString();
    // substrString();
    // replaceString();
    // myToUpperCase();
    // myToLowerCase();
    // concateString();
    // trimString();
    // accessChar();
    // accessCharCode();
    string2Array();
}


test();