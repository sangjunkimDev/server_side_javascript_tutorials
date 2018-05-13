/*
 * npm UglifyJS test
 */
function hello(name) {
	console.log('Hi,' + name);
}
hello('sangjun');
/*
 * input : uglifyjs pretty.js
 * output :  function hello(name){console.log("Hi,"+name)}hello("sangjun");
*/
/*
 * input : uglifyjs pretty.js -m
 * output : function hello(l){console.log("Hi,"+l)}hello("sangjun");
 */