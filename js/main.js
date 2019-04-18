console.log('define',define); 
/*
require.js中 2061行，定义了全局变量define 是一个函数，参数也可以具体看到
*/
console.log('require',require); 
/*
require.js 1764行定义了req = requirejs = function(){}, 1821行 定义 if (!require)  require = req,
所以require是requireJS中定义的一个全局变量，并且是一个函数
*/

require.config({
    baseUrl:'./js/mytest/',
    paths:{
        math:'math',
        stringJoin:'stringJoin',
        text:'text',
        jquery:'jquery',
        data:'data'
    }
})

require(['math'],function(math){
    console.log(math.add(1,3));
})

require(['stringJoin'],function(stringJoin){
    console.log(stringJoin.join(' after sum result'));
})

require(['data'],function(data){
    data = data.users.join(',');
    console.log('data:',data);
})

// require(['jquery','text','text!../../css/1.css'],function($,text,css1){
//     $('#span').text(css1);
// })
/*
above need to test when node.js exist
text.js:325 Access to XMLHttpRequest at 'file:///C:/Users/lijma/Desktop/requireJS/css/1.css' 
from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported 
for protocol schemes: http, data, chrome, chrome-extension, https.
*/
