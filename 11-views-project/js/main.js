var Vehicle = Backbone.Model.extend();
var Vehicles = Backbone.Collection.extend({
    model: Vehicle
});

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
    initialize: function () {
        this.model.on("add", this.itemAdded, this)
    },
    itemAdded: function () {
        this.$el.html("");
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

var vehiclesView = new VehiclesView({el: "#container", model: vehicles});
vehiclesView.render();

$("#addBtn").on("click", function () {

    var reg = $("#reg").val();
    var color = $("#color").val();

    var nextId;
    if (vehicles.length > 0) {

        nextId = vehicles.at(vehicles.length - 1).get("id");
        nextId++;
    }
    else {
        nextId = 1;
    }
    console.log(reg, color, nextId);
    vehicles.add(new Vehicle({id: nextId, color: color, registrationNumber: reg}));
});