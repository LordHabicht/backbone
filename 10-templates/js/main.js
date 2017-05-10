var Song = Backbone.Model.extend();
var song = new Song({title:"My Song",plays:1200});

var SongView = Backbone.View.extend({

    render:function(){

        var template = _.template($("#songTemplate").html());
        var html = template(this.model.toJSON());
        this.$el.html(html);

        return this;
    }

});

var songView = new SongView({el:"#container",model:song});
songView.render();