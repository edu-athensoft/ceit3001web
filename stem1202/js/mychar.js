var myChar = {
    "charName" : "Johnanna",
    "charClass": "Magician",
    "charLevel"    :  0,
    "STR"      :   10,
    "DEX"      :   10,
    "INT"      :   10,
    "VIT"      :   10,
    "PAD"       :  10,
    "LAD"       :   10,
    "MAD"       : 10,
    "PR"        : 5,
    "MR"        : 5,
    "SPD"       : 5,
    "HP"        : 100,
    "MP"        : 50,
    "EXP"       : 0   
};

//global variable
var availablePoint = 20;

function plusStr(){
    if(availablePoint>0){
        //
        myChar.STR +=1;
        document.getElementById("strPoint").value= myChar.STR;

        //
        //availablePoint = availablePoint - 1;
        availablePoint -= 1;
        document.getElementById("availablePoint").value = availablePoint;
    }
}

function minusStr(){
    if(myChar.STR>10){
        //
        myChar.STR -=1;
        document.getElementById("strPoint").value= myChar.STR;

        availablePoint += 1;
        document.getElementById("availablePoint").value = availablePoint;
    }  
}