

function test(){
    // output1();
    // output2();
    output3();
    output4();
}

function output1(){
    alert("output by alert()");
}

function output2(){
    console.log("output by console");
}

function output3(){
    var content = "<p>output by document.write()</p>";
    document.write(content);
    document.write(content);
}

function output4(){
    var content = "<p>output by innerHTML</p>";
    document.getElementById("output4").innerHTML = content;
}

test();