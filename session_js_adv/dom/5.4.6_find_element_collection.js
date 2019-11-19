function test() {
    // testForCollection();
}




/** 5.4.6  */
function testForCollection() {
    var text = "";
    var i;
    var x = document.forms["myfrom"];
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;

}

test();
