var Calculator = function(){

    var add = function(a,b){
        if(!a || !b) {
            throw new Error("error");
        }
        return a+b;
    }

    return {
        add:add
    }
}