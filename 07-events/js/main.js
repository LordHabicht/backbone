var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
    tagName: "li",
    events:{
        "click #btn1":"listenHandler",
        "click #btn2":"bookmarkHandler"
    },
    render: function () {
        this.$el.html(this.model.get("title") + " " + "<button id='btn1'>Listen</button>" + " " + "<button id='btn2'>Bookmark</button>");
        return this;
    },
    listenHandler:function(){
        console.log("listen");
    },
    bookmarkHandler:function () {
        console.log("bookmark");
    }

});

var song = new Song({title:"abc"});
var songView= new SongView({model:song});

$("#container").html(songView.render().$el);
