
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
var Song = Backbone.Model.extend({urlRoot:"http://localhost:3000/json"});
// var song = new Song();
// song.fetch();
// song.destroy();

var Songs = Backbone.Collection.extend({
    model: Song,
    url: "http://localhost:3000/api/songs"
});
var songs = new Songs();
songs.fetch();