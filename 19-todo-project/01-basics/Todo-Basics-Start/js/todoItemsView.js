var TodoItemsView = Backbone.View.extend({
    tagName:"ul",
    id:"todoItems",
    initialize: function (options) {
        if (!(options && options.model) ) {
            throw new Error("Model not set in TodoItemsView");
        }
        this.bus = options.bus;
        var self = this;
        this.bus.on("added",function(arg){
           self.model.add(new TodoItem({description:arg}));
        });
        this.model.on("add",this.addHandler,this);
    },
    addHandler:function(item){

        var todoItemView = new TodoItemView({model:item});
        this.$el.append(todoItemView.render().$el);

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