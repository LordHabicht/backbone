// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Vehicle = Backbone.Model.extend({
    idAttribute: "registrationNumber",
    start: function () {
        console.log("Vehicle started.");
    },
    validate:function(attrs){
        if(!attrs.registrationNumber){
            return "invalid vehicle";
        }
    }
});
var veh = new Vehicle({registrationNumber: "123"});

var Car = Vehicle.extend({
    start:function () {
        console.log("Car with registration number "+this.get("registrationNumber")+" started.")
    }
})

var mycar = new Car({registrationNumber:"SIN 123"});
var mycar2 = new Car({registrationNumber:"SNA 123",color:"blue"});
mycar2.unset("registrationNumber");

console.log("mycar2 is valid: " + mycar2.isValid() +", validation message: " + mycar2.validationError);

mycar2.set("registrationNumber","SOP 123");

console.log("mycar2 is valid: " + mycar2.isValid() +", validation message: " + mycar2.validationError);

mycar2.start();