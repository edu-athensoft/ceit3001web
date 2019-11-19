function test() {
    // testForCollection();
}



/** 5.4.5  */
function testForQuery() {
    var x = document.querySelectorAll("p.p2");
    document.getElementById("demo").innerHTML = x[0].childNodes[0].nodeValue;
    document.getElementById("demo2").innerHTML = x[1].childNodes[0].nodeValue;
}


test();
