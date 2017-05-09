
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend({
    initialize:function () {
        console.log("song created");
    }
})

var song = new Song();

var Book = Backbone.Model.extend({
    defaults:{
        title:"123"
    },
    validate:function (attrs) {
        if(!attrs.year) {
            return "year required"
        }
    }
});

var book = new Book({
    title:"Song of Ice and Fire"
});

var book2 = new Book();

var Animal = Backbone.Model.extend({
    walk:function(){
        console.log("animal walking")
    }
})

var animal = new Animal();

var Dog = Animal.extend({
    walk:function () {
        Animal.prototype.walk.apply(this);
        console.log("dog walking");
    },
    bark:function(){
        console.log("dog barking");

    }
})

var dog = new Dog();