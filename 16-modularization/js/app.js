define(["models/song","views/songView","backbone"],function(Song,SongView,Backbone){

   var initialize = function(){

       var song = new Song({title:"Blue and Green"});
       var songView = new SongView({model:song});
       songView.render();
   };

   return {
       initialize:initialize
   };

});
