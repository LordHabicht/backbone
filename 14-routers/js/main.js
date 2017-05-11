var AlbumsView = Backbone.View.extend({
    render:function(){
        this.$el.html("ALBUMS VIEW");
        return this;
    }
});

var ArtistsView = Backbone.View.extend({
    render:function(){
        this.$el.html("ARTISTS VIEW");
        return this;
    }
});

var GenresView = Backbone.View.extend({
    render:function(){
        this.$el.html("GENRES VIEW");
        return this;
    }
});

var AppRouter = Backbone.Router.extend({
    routes:{
        "albums":"albumsHandler",
        "albums/:id":"albumsById",
        "artists":"artistsHandler",
        "genres":"genresHandler"
    },
    albumsById:function(param){
      console.log(param)
    },
    albumsHandler:function(){
        var view = new AlbumsView();
        $("#container").html(view.render().$el);
    },
    artistsHandler:function(){
        var view = new ArtistsView();
        $("#container").html(view.render().$el);
    },
    genresHandler:function(){
        var view = new GenresView();
        $("#container").html(view.render().$el);
    }
});

var router = new AppRouter();
Backbone.history.start();


var NavView  = Backbone.View.extend({
    events:{
        "click":"clickHandler"
    },
    clickHandler:function(e){
        var $li = $(e.target);
        router.navigate($li.attr("data-url"),{trigger:true});
    }
});

var nav = new NavView({el:"#nav"});
