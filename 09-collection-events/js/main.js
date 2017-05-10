var SongView = Backbone.View.extend({
        tagName: "li",
        render: function () {
            this.$el.html(this.model.get("title"));
            this.$el.attr("id",this.model.get("id"));
            return this;
        }

    });

var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend();
var songs = new Songs([
    new Song({id:1,title: "Follow the Blind"}),
    new Song({id:2,title: "Locked in the Dungeon"}),
    new Song({id:3,title: "Sunlight"})
])

var SongsView = Backbone.View.extend({
    tagName: "ul",
    initialize:function(){
      this.model.on("add",this.addHandler,this);
      this.model.on("remove",this.removeHandler,this);
    },
    addHandler:function(song){

        var view = new SongView({model:song});
        this.$el.append(view.render().$el);
    },
    removeHandler:function(song){
        this.$("#"+song.get("id")).remove();
        this.model
    },
    render: function () {
        var self = this;
        this.model.each(function (song) {
            var songView = new SongView({model: song})
            self.$el.append(songView.render().$el)
        })
        return this;
    }
});

var songsView = new SongsView({model: songs});

$("#songs").html(songsView.render().$el);
