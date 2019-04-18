/* 
定义一个非独立的模块，依赖于math.js
*/

define(['math'],function(math){
    return {
        join:function(string){
            var sum = math.add(8,3);
            return sum + string;
        }
    }

})