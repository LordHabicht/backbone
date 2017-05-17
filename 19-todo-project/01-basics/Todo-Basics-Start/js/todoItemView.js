var TodoItemView = Backbone.View.extend({

    tagName:"li",
    initialize:function(options){

        if ( !(options && options.model)) {
            throw new Error("Model needs to be set in TodoItemView");
        }

    },

    render:function(){

        this.$el.html(this.model.escape("description"));
        return this;
    }
});