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

var Vehicles = Backbone.Collection.extend({
    model:Vehicle
})

var vehicles = new Vehicles([
    new Vehicle({registrationNumber:"XLI887",color:"Blue"}),
    new Vehicle({registrationNumber:"ZNP123",color:"Blue"}),
    new Vehicle({registrationNumber:"XUV456",color:"Red"})
]);

var selection = vehicles.where({color:"Blue"});
console.log(selection);

var selection2 = vehicles.where({registrationNumber:"XLI887"});
console.log(selection2);


vehicles.remove({id:"XLI887"});

console.log("JSON" , vehicles.toJSON());

vehicles.each(function(car){
    console.log(car);
})