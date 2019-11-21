function test() {
    // testForCollection();
}

/** 5.3.1  */
function testForId() {
    var x = document.getElementById("p1");
    document.getElementById("demo").innerHTML = x.innerHTML;

}

function testForTag() {
    var x = document.getElementsByTagName("p");
    // document.getElementById("demo").innerHTML = x.childNodes[0].nodeValue;
    document.getElementById("demo").innerHTML = x.length;
    console.log(x[0].childNodes[0].nodeValue);
    console.log(x[1].childNodes[0].nodeValue);
    console.log(x[2].childNodes[0].nodeValue);
    console.log(x[3].childNodes[0].nodeValue);
    console.log(x[4].childNodes[0].nodeValue);
    
}

function testForClass() {
    var x = document.getElementsByClassName("p2");
    document.getElementById("demo").innerHTML = x.length;
    console.log(x[0].childNodes[0].nodeValue);
    console.log(x[1].childNodes[0].nodeValue);
}

/** */
function testForCollection() {
    var text = "";
    var i;
    var x = document.forms["name"];
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;

}



function testForQuery() {
    var x = document.querySelectorAll("p.p2");
    document.getElementById("demo").innerHTML = x.childNodes[0].nodeValue;
}

test();
