function test()  {
    testForCollection();

}



function testForCollection()  {
    var text = "";
    var i;
    var x = document.forms["name"];
    for(i=0; i<x.length; i++){
        text += x.elements[i].value +"<br>";
    }
    document.getElementById("demo").innerHTML = text;

}

function testForId()  {
    var x = document.getElementById("p1");
    document.getElementById("demo").innerHTML = x.innerHTML;
           
}

function testForTag()  {
    var x = document.getElementsByTagName("p");
    document.getElementById("demo").innerHTML = x.childNodes[0].nodeValue;
}

function testForClass()  {
    var x = document.getElementsByClassName("p2");
    document.getElementById("demo").innerHTML = x.firstChild.nodeValue;
}

function testForQuery()  {
    var x = document.querySelectorAll("p.p2");
    document.getElementById("demo").innerHTML = x.childNodes[0].nodeValue;
}

test();
