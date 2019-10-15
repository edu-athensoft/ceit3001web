
console.log("js objects");

function test() {
    var car = createCar();
    var car2 = createCar2("BMW","x5","noir");
    console.log(car);
    console.log(car2);
    showCar(car2);
    
    //
    var car3 = createCar2("Benz");
    console.log(car3);

    car3.model = "x3";
    car3.color = "blanc";

    showCar(car3);
}


function test2(){
    var person1 = createPerson('Steve','Jobs',55,'blue');
    var fullName = person1.getFullName();
    document.getElementById("person_info").innerHTML = fullName+person1.getAge()+person1.getEyeColor();

}


function createCar() {
    return {
        type: "Fiat",
        model: "500",
        color: "white"
    }
}

function createCar2(type, model, color) {
    return {
        'type': type,
        'model': model,
        'color': color
    }
}

function showCar(x){
    console.log(x.type);
    console.log(x.model);
    console.log(x.color);
    document.getElementById("car_info").innerHTML = x.type+"<br/>"+x.model+"<br/>"+x['color'];
}


function createPerson(firstName, lastName, age, eyeColor){
    return {
        'firstName': firstName,
        'lastName': lastName,
        'age':age,
        'eyeColor':eyeColor,

        getFullName : function(){
            return this.firstName+" "+this.lastName;
        },

        getAge : function(){
            return this.age;
        },

        getEyeColor : function(){
            return this.eyeColor;
        }

    }
}
