
var TodoItemView = Backbone.View.extend({
	tagName: "li",
	className: "listItem",
	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");
		this.model.on("change",this.render,this)
	},


	events:{
		"click .checkbox":"cbClicked"
	},

    cbClicked:function (e) {
		console.log($(e.target).prop("checked"));
		this.model.toggle();

    },

	render: function(){

		var html;

		var checked = (this.model.get("checked") == true ) ? "checked" : "";
		this.$el.toggleClass("listItemChecked",(this.model.get("checked") == true ));
		html = "<input type = 'checkbox' class='checkbox' "+checked+">" + "<span class='item'>" +  this.model.escape("description") + "</span>";


		this.$el.html(html);

		return this;
	}
});