var TodoItem = Backbone.Model.extend({
    validate:function(attr){
        if(!attr.description) {
            return "Description needs to be set";
        }
    }
});