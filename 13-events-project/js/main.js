var Vehicle = Backbone.Model.extend();
var Vehicles = Backbone.Collection.extend({
    model: Vehicle
});
var bus = _.extend({},Backbone.Events);
var vehicles = new Vehicles([
    new Vehicle({registrationNumber: "SOP 567", id: 1, color: "blue"}),
    new Vehicle({registrationNumber: "SXL 123", id: 2, color: "red"}),
    new Vehicle({registrationNumber: "SAP 687", id: 3, color: "black"})
]);

var VehicleView = Backbone.View.extend({

    events: {
        "click button": "deleteClicked"
    },
    deleteClicked: function () {
        var id = this.model.get("id");
        this.$("#" + id).closest("li.vehicle").remove();
        vehicles.remove(id);

    },
    render: function () {
        var template = _.template($("#vehicleTemplate").html());
        var html = template(this.model.toJSON());
        this.$el.html(html);

        return this;
    }

});

var VehiclesView = Backbone.View.extend({
    tagName: "ul",
    initialize: function (options) {
        this.bus = options.bus;
        this.bus.on("vehicleAdded",this.itemAdded,this);
    },
    itemAdded: function (text) {
        this.$el.html("");
        var nextId = 0;
        if(this.model.length > 0){
            nextId = this.model.at(0).get("id");
            nextId++;
        }else{nextId = 1}
        this.model.add(new Vehicle({registrationNumber:text,color:"generic",id:nextId}),{at:0});
        this.render();
    },
    render: function () {
        var self = this;
        this.model.each(function (vehicle) {
            var vehView = new VehicleView({model: vehicle});
            self.$el.append(vehView.render().$el);
        });
    }

});



var vehiclesView = new VehiclesView({el: "#vehicles", model: vehicles,bus:bus});
vehiclesView.render();

var NewVehicleView = Backbone.View.extend({
    initialize:function(options){
      this.bus = options.bus;
    },
    el:"#newVehicle",
    events:{
      "click .add":"clickHandler"
    },
    clickHandler:function(){
      this.bus.trigger("vehicleAdded",$("#vehicleText").val());
    },
    render:function(){
        this.$el.html("<input id='vehicleText' type='text'><button class='add'>Add</button>");
        return this;
    }
});

var newVehicleView = new NewVehicleView({bus:bus});
newVehicleView.render();