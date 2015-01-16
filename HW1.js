
// Create a function that takes an array of values and returns one randonly selected value from that array.
// var firstArray = ["First Array", 060170, "Cedar Oak Drive", "01095"];
// 	console.log(firstArray);
// 	console.log(firstArray.length);
// 	console.log (firstArray. [2]);


function random (array){
	var selection= Math.floor(Math.random()*array.length);
		return array[selection];
}







