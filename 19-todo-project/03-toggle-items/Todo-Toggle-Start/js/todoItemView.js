
var TodoItemView = Backbone.View.extend({
	tagName: "li",
	className: "listItem",
	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");
	},


	events:{
		"click .checkbox":"cbClicked"
	},

    cbClicked:function (e) {
		console.log($(e.target).prop("checked"));
		this.model.set("checked",$(e.target).prop("checked"));
		this.render();
    },

	render: function(){
		var checkedClass;
		var html;
		if(this.model.get("checked") == true ){
            checkedClass = "itemChecked"
            html = "<input type = 'checkbox' class='checkbox' checked>" + "<span class='"+checkedClass+"'>" +  this.model.escape("description") + "</span>";
		}
		else {
            checkedClass = "";
            html = "<input type = 'checkbox' class='checkbox'>" + "<span class='"+checkedClass+"'>" +  this.model.escape("description") + "</span>";
		}

		this.$el.html(html);

		return this;
	}
});