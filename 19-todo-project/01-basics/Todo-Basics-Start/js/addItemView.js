var AddItemView = Backbone.View.extend({
    initialize:function(options){
        this.bus = options.bus;

    },
    events:{
        "click button":"publishNewItem",
        "keyup #input":"keyUpHandler"
    },
    clickHandler:function(e){

    },
    keyUpHandler:function (e) {
        if(e.keyCode == 13){
         this.publishNewItem();
        }
    },
    publishNewItem:function(){
        var $textBox = $("#input");
        var str = $textBox.val();
        if (str != "" && str != undefined){

            this.bus.trigger("added",str);
            $textBox.val("");
        }
    }
});