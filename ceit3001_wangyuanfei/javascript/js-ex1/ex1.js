function decToBin(val) {
    var c = parseInt(val.value);
    var rep = "-";
    var tmp = 0;
    //for (var i = 1; c > 0; i++) {
    for (; c > 0; ) {
        if (c % 2) {
            rep += "1";
        }
        else {
            rep += "0";
        }
        c /= 2;
        c = parseInt(c);
    }
    for (var i = (rep.length - 1); i > 0; i--) {
        tmp += rep[i];
    }
    document.getElementById("rep").value = tmp;
}


function decToBinWhile(val) {
    var c = parseInt(val.value);
    var rep = "-";
    var tmp = 0;
    //for (var i = 1; c > 0; i++) {
    while(c > 0 ){
        if (c % 2) {
            rep += "1";
        }
        else {
            rep += "0";
        }
        c /= 2;
        c = parseInt(c);
    }
    for (var i = (rep.length - 1); i > 0; i--) {
        tmp += rep[i];
    }
    document.getElementById("rep").value = tmp;
}