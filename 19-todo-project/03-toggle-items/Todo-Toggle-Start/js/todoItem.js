
var TodoItem = Backbone.Model.extend({
	validate: function(attrs){
		if (!attrs.description)
			return "Description is required.";
	},
	defaults:{
		checked:false
	},
	toggle:function(){

		this.set("checked",!this.get("checked"));

	}
});
