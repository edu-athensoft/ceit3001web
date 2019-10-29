/**
 * javascript arrays
 */



function test() {
    var mycars = createArray();
    console.log(mycars[0]);

    var mycars2 = createArray2();
    console.log(mycars2[0])

    var cars = ["Saab", "Volvo", "BMW","Benz","Chiron","Audi","Porshe","Mustang","Lincon"];
    var carsPrice = ["20000", "30000", "45000","50000","170000","40000","70000","30000","60000"];

    var planes = ["boeing","airbus","c919"];
    // accessArrayElement(planes);

    // accessFullArray();

    // showCars(cars);
    // showCarPriceTable(cars,carsPrice);

    /* upgrade with object */
    var car0 = {carName:"Saab", price:20000};
    var car1 = {carName:"Volvo", price:30000};
    var car2 = {carName:"BMW", price:45000};
    carObjs = [car0, car1, car2];
    showCarPriceTableObject(carObjs);

}

function createArray() {
    var cars = ["Saab", "Volvo", "BMW"];
    console.log(cars);
    return cars;
}

function createArray2(){
    var cars = new Array("Saab2", "Volvo2", "BMW2");
    return cars;
}

function accessArrayElement(my_array){
    
    // document.getElementById("car0").innerHTML = cars[0];
    // document.getElementById("car1").innerHTML = cars[1];
    // document.getElementById("car2").innerHTML = cars[2];
    // document.getElementById("car3").innerHTML = cars[3];
    // document.getElementById("car4").innerHTML = cars[4];
    // document.getElementById("car5").innerHTML = cars[5];
    // document.getElementById("car6").innerHTML = cars[6];
    // document.getElementById("car7").innerHTML = cars[7];
    // document.getElementById("car8").innerHTML = cars[8];

    console.log(my_array.length);

    for(var i=0; i<my_array.length; i++){
        document.getElementById("car"+i).innerHTML = my_array[i];
    }
}

function accessFullArray(){
    var cars = ["Saab", "Volvo", "BMW","Benz","Chiron","Audi","Porshe","Mustang","Lincon"];
    document.getElementById("cars").innerHTML = cars;
}

function accessFirstElement(){
    var cars = ["Saab", "Volvo", "BMW","Benz","Chiron","Audi","Porshe","Mustang","Lincon"];
    console.log(cars[0]);
}

function accessLastElement(){
    var cars = ["Saab", "Volvo", "BMW","Benz","Chiron","Audi","Porshe","Mustang","Lincon"];
    console.log(cars[cars.length-1]);
}

function showCars(cars){
    var content = "";
    // content += "<span id='car0'>cars0</span> <br/>";
    // content += "<span id='car1'>cars1</span> <br/>";
    // content += "<span id='car2'>cars2</span> <br/>";
    // content += "<span id='car3'>cars3</span> <br/>";
    // content += "<span id='car4'>cars4</span> <br/>";

    for(var i=0; i<9; i++){
        content += "<span id='car'"+i+">cars: "+cars[i]+"</span> <br/>";
    }

    document.getElementById("mycars").innerHTML = content;
}

function showCarPriceTable(cars, carsPrice){
    //test showing table
    var mytable = "";
    mytable += "<table>";
    mytable += "<tr><th>Car Brand</th><th>Avg Price</th></tr>";

    for(var i=0; i<cars.length; i++){
        mytable += "<tr><td>"+cars[i]+"</td><td>"+carsPrice[i]+"</td></tr>";
    }

    mytable += "</table>";

    document.getElementById("car_price").innerHTML = mytable;
}

function showCarPriceTableObject(carObjs){
    //test showing table
    var mytable = "";
    mytable += "<table>";
    mytable += "<tr><th>Car Brand</th><th>Avg Price</th></tr>";

    for(var i=0; i<carObjs.length; i++){
        mytable += "<tr><td>"+carObjs[i].carName+"</td><td>"+carObjs[i].price+"</td></tr>";
    }

    mytable += "</table>";

    document.getElementById("car_price").innerHTML = mytable;
}

test();