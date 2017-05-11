define(["backbone","underscore","jquery"],function(Backbone,_,$){

    var SongView  = Backbone.View.extend({
        el:"#container",
        render:function(){
            this.$el.html(this.model.get("title"))
        }
    });

    return SongView;

});


