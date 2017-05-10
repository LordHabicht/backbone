var person = {
    name:"Niko",
    walk:function () {
        this.trigger("walking",{
            speed:1,
            time:"8:00"
        });
    }
}

_.extend(person,Backbone.Events);

person.on("walking",function(e){
    console.log("Person is walking at speed "+e.speed+ " at " + e.time);
});

person.walk();