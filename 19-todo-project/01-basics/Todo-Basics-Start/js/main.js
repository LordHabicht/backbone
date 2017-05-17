$(document).ready(function () {

    var bus = _.extend({},Backbone.Events);

    var todoItems = new TodoItems([
        new TodoItem({description: "Todo Item 1"}),
        new TodoItem({description: "Todo Item 2"}),
        new TodoItem({description: "Todo Item 3"})
    ]);
    var todoItemsView = new TodoItemsView({model:todoItems,bus:bus});

    $("body").append(todoItemsView.render().$el);
    var addItemView = new AddItemView({el:"#addItem",bus:bus});



});
