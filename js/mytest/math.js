/*
这个例子中定义了一个独立的模块
*/

define(function(){
    var add =function(x,y){
        return x+y;
    };
    return {
        add:add
    }
});