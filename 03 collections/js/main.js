
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend({
    defaults: {
        title:"123"
    }
});

var Songs  = Backbone.Collection.extend({
    model:Song
});

var songs = new Songs([
    new Song({title:"my song",genre:"Jazz",downloads:90}),
    new Song({title:"my song b",genre:"Jazz",downloads:95}),
    new Song({title:"my super song",genre:"metal",downloads:1120})
]);

var filteredSongs = songs.filter(function (song) {
    return song.get("downloads") > 100
});

console.log(filteredSongs);

songs.each(function(song){
   console.log(song.get("title"));
});