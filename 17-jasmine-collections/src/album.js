
var Song = Backbone.Model.extend({
    urlRoot:"api/songs",
    defaults:{
        numberOfPlays:0
    },
    validate:function(attr){
        if(!attr.title){
            return "No Title";
        }
    },
    play:function(){

        var num = this.get("numberOfPlays");
        this.set("numberOfPlays",num+1);

    }
});


var Album = Backbone.Collection.extend({
    model:Song,
    url:"/api/song",
    getPopularSong:function () {
        if(this.length == 0) return undefined;

        var sortedSongs = this.sortBy(function(song){
            return song.get("numberOfPlays");
        });

        return sortedSongs[sortedSongs.length -1];
    }
});

