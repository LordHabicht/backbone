var TodoItemsView = Backbone.View.extend({
    tagName:"ul",
    id:"todoItems",
    initialize: function (options) {
        if (!(options && options.model) ) {
            throw new Error("Model not set in TodoItemsView");
        }
    },
    render: function () {

        var self  = this;
        this.model.each(function (item) {
            var view = new TodoItemView({model:item});
            self.$el.append(view.render().$el);
        });
        return this;
    }

});