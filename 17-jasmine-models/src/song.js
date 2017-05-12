/**
 * Created by Niko on 11.05.2017.
 */
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
