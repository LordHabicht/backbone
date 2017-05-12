$(document).ready(function () {

    var todoItems = new TodoItems([
        new TodoItem({description: "Todo Item 1"}),
        new TodoItem({description: "Todo Item 2"}),
        new TodoItem({description: "Todo Item 3"})
    ]);
    var todoItemsView = new TodoItemsView({model:todoItems});

    $("body").append(todoItemsView.render().$el);
});
