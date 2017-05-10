var Song = Backbone.Model.extend();
var Songs = Backbone.Collection.extend()

var songs = new Songs([
    new Song({title: "a"}),
    new Song({title: "b"}),
    new Song({title: "c"})
]);

var SongView = Backbone.View.extend({
    tagName: "li",
    render: function () {
        this.$el.html(this.model.get("title"));
        return this;
    }

});

var SongsView = Backbone.View.extend({
    tagName:"ul",
    render:function(){
        var self = this;
        this.model.each(function(song){
            var songView = new SongView({model:song});
            self.$el.append(songView.render().$el);
        });
        return this;
    }

});

var songsView = new SongsView({model:songs});

$("#container").html(songsView.render().$el);
