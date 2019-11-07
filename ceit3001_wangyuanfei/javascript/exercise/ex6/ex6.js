/**
 * 
 */

main();

function main() {
    // alert("ex6.js")

    // test validate()
    // var TEST_SCORE;

    // TEST_SCORE = '0';
    // validate(TEST_SCORE);

    // TEST_SCORE = 'ABC';
    //validate(TEST_SCORE);

    var scoreInput = getInput();
    var scoreNum = getScoreNum(scoreInput);
    if(scoreNum == -1){
        alert("Entree incorrecte");
    }else{
        // getResult(scoreNum);
        getResultSwith(scoreNum)
    }
}

/**
 * get user input from prompt
 * return string - score
 */
function getInput(){
    return prompt("Enter your score:");
}


/**
 * convert input score to numberic value
 * param: string - inputText
 * return number - scoreNum
 */
function getScoreNum(inputText){
    var scoreNum = -1;
    var input = new String(inputText);
    input = input.trim();

    if(validate(input)){
        scoreNum = parseInt(input);
    }else{
    }
    return scoreNum;
}


/**
 * get score of exam and print out the result
 * param: number - scoreNum
 */
function getResult(scoreNum) {
    var result = "";
    if (scoreNum == 0) {
        result = "Cours abandonne";

    } else if (scoreNum >= 60 && scoreNum <= 100) {
        result = "Cours reussi";

    } else if (scoreNum >= 1 && scoreNum <= 59) {
        result = "Cours echoue";

    } else { // in case of negative numbers
        result = "Entree incorrecte";

    }
    console.log(result);
    alert(result);
}


function getResultSwith(scoreNum) {
    var result = "";

    var caseValue = "D";

    if (scoreNum == 0) {
        caseValue = "C";
    }

    if (scoreNum >= 60 && scoreNum <= 100) {
        caseValue = "A";
    }

    if (scoreNum >= 1 && scoreNum <= 59) {
        caseValue = "B";
    } 

    switch(caseValue){
        case 'A': 
            result = "Cours reussi"; break;
        case 'B':
            result = "Cours echoue"; break;
        case 'C':
            result = "Cours abandonne"; break;
        default:
            result = "Entree incorrecte"; break;
    }
    
    console.log(result);
    alert(result);
}


/**
 * validate input to make sure it is a numeric literal
 * param: string - inputText
 * return boolean - if validation is passed return true, else false.
 */
function validate(inputText) {
    var reg = new RegExp("^[0-9]*$");

    if (!reg.test(inputText)) {
        // alert("Please input a number!"+inputText);
        return false;
    }else{
        // alert(inputText);
        return true;
    }
}