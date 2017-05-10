var Song = Backbone.Model.extend();
var SongView = Backbone.View.extend({

    initialize:function(){
        this.model.on("change",this.handler,this);
    },
    handler:function () {
        this.render();
    },
    render:function(){

        this.$el.html(this.model.get("title") + ", Listeners: " + this.model.get("listeners"));

        return this;
    }

});

var song = new Song({title:"Locked in the Dungeon",listeners:"0"});

var songView = new SongView({el:"#container",model:song});
songView.render();