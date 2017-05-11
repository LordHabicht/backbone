var Car = Backbone.Model.extend();
var Boat = Backbone.Model.extend();

var Cars = Backbone.Collection.extend({
    model:Car
});

var Boats= Backbone.Collection.extend({
    model:Boat
});

var cars = new Cars([
    new Car({registrationNumber:"XYZ 123"}),
    new Car({registrationNumber:"ABC 123"}),
    new Car({registrationNumber:"ZUI 123"})
]);

var boats = new Boats([
    new Boat({registrationNumber:"AGS 123"}),
    new Boat({registrationNumber:"BN 123"}),
    new Boat({registrationNumber:"UIO 123"})

]);

var CarsView =  Backbone.View.extend({
    el:"#container",
    tagName:"ul",
    render:function(){
        this.$el.html("");
        var self = this;
        this.collection.each(function(car){

            self.$el.append("<li>"+car.get('registrationNumber')+"</li>");

        });

    }
});

var BoatsView =  Backbone.View.extend({
    el:"#container",
    tagName:"ul",
    render:function(){
        this.$el.html("");
        var self = this;
        this.collection.each(function(boat){

            self.$el.append("<li>"+boat.get('registrationNumber')+"</li>");

        });

    }
});



var AppRouter = Backbone.Router.extend({
    routes:{
        "cars":"carView",
        "boats":"boatsView"
    },
    carView:function(){
        var carsView = new CarsView({collection:cars});
        carsView.render();
    },
    boatsView:function(){
        var boatsView = new BoatsView({collection:boats});
        boatsView.render();
    }
});

var router = new AppRouter();
Backbone.history.start();

var NavView = Backbone.View.extend({
    el:"#nav",
    events:{
        "click":"handler"
    },
    handler:function(e){
        var $li = $(e.target);
        router.navigate($li.data("url"),{trigger:true});
    }
});
var nav = new NavView();
nav.render();