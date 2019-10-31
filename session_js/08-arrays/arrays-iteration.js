/**
 * JavaScript Array Iteration
 */

 function test(){
    // arrayForEach();
    console.log(arrayMap());
    console.log(arrayFilter());
    console.log(arrayReduce());
    console.log(arrayReduceRight());
    console.log(arrayEvery());
    console.log(arraySome());
    
 }


 function arrayForEach(){
    var numbers = [45, 4, 9, 16, 25];

    numbers.forEach(myFunction);

    function myFunction(value, index, array){
        console.log(index+":"+value+":"+array[index]);
    }

    // function myFunction(value){
    //     console.log(value);
    // }
 }


 function arrayMap(){
    var numbers = [45, 4, 9, 16, 25];
    var numbers2 = numbers.map(myFunction);
    return numbers2;

    function myFunction(value, index, array){
        return value * value;
    }
 }

 function arrayFilter(){
    var numbers = [45, 4, 9, 16, 25];
    var over18 = numbers.filter(myFunction);
    return over18;
    
    function myFunction(value){
        return value>18;
    }
 }

 function arrayReduce(){
    var numbers = [45, 4, 9, 16, 25];
    var reduceValue = numbers.reduce(myFunction);
    return reduceValue;
    
    function myFunction(total,value){
        // return total + value;
        return total*value;
    }
 }

 function arrayReduceRight(){
    var numbers = [45, 4, 9, 16, 25];
    var reduceValue = numbers.reduceRight(myFunction);
    return reduceValue;
    
    function myFunction(total,value){
        return total + value;
        // return total*value;
    }
 }

 function arrayEvery(){
    var numbers = [45, 4, 9, 16, 25];
    var over18 = numbers.every(myFunction);
    return over18;
    
    function myFunction(value, index){
        return value>18;
    }
 }

 function arraySome(){
    var numbers = [45, 4, 9, 16, 25];
    var some3 = numbers.some(myFunction);
    return some3;
    
    function myFunction(value, index){
        return value>3;
    }
 }

 test();