var SongView = Backbone.View.extend({
    tagName:"p",
    render:function () {
        this.$el.html(this.model.get("title"));
        return this;
    }
    
})

var Song = Backbone.Model.extend();
var song = new Song({title:"Scheepers"});

var songView = new SongView({model:song});

$("#container").html(songView.render().$el);
