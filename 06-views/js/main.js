var SongView = Backbone.View.extend({
    tagName:"span",
    className:"song",
    attributes:{
        "data-genre":"Jazz"
    },
    render:function(){
        this.$el.html("Hello World");
        return this
    }
});

songView = new SongView();
// songView.render();
// $("#container").html(songView.$el)

$("#container").html(songView.render().$el)