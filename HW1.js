
// // #1:  Create a function that takes an array of values and returns one randonly selected value from that array.

function random (array){
	var selection= Math.floor(Math.random()*array.length);
		return array[selection];
}

random ([1,2,3]);


// // #2:  Create a function that takes an unencrypted string and returns the ROT-13 version of
// // that string. This is slightly different but similar to the example we did in class.


var entered = ()

var entered = window.prompt ("Enter the text you want to encrypt!");

if (entered.charCodeAt()<123 && entered.charCodeAt()>96 || entered.charCodeAt()>64 && entered.charCodeAt()<91) {

	var translate="";

	for (var i=0; i<entered.length; i++) {

		var ascii = entered.charCodeAt(i);

		if(ascii > 109 && ascii < 123) {

			ascii = (ascii+13) - 26;

			translate+=String.fromCharCode (ascii);
	}

	else if (ascii>96 && ascii > 109) {
		ascii += 13;
		translate+=String.fromCharCode (ascii);
	}

	else if (ascii >77 && ascii <91) {
		ascii = (ascii +13) -26;
		translate+=String.fromCharCode (ascii);
}
	else {
		ascii +=13;
		translate+=String.fromCharCode (ascii);
	}
	}    

	console.log(translate);
  	} else {
  		window.alert("Please enter upper or lower case letters only.");
		throw("Not an Ascii letter character.");
}


// // 3. Create a function that takes a ROT-13 encrypted string and returns the decrypted version of that string.


var entered = window.prompt ("Enter the text you want to decrypt!");

if (entered.charCodeAt()<123 && entered.charCodeAt()>96 || entered.charCodeAt()>64 && entered.charCodeAt()<91) {

	var translate="";

	for (var i=0; i<entered.length; i++) {

		var ascii = entered.charCodeAt(i);

		if(ascii > 109 && ascii < 123) {

			ascii = (ascii-13);

			translate+=String.fromCharCode (ascii);
	}

	else if (ascii>96 && ascii > 109) {
		ascii= (ascii-13) +26;
		translate+=String.fromCharCode (ascii);
	}

	else if (ascii >77 && ascii <91) {
		ascii = (ascii-13);
		translate+=String.fromCharCode (ascii);
}
	else {
		ascii= (ascii-13) +26;
		translate+=String.fromCharCode (ascii);
	}
	}    

	console.log(translate);
  	} else {
  		window.alert("Please enter upper or lower case letters only.");
		throw("Not an Ascii letter character.");
}

// 4. Create a function that takes an unencrypted string and an integer (n) and returns the ROT-N version of that string.




// 5. Create a javascript function that takes an array of student names and returns an array of randomly selected pairs of students (array of arrays).

// var studentArray = (['Jacob','Erika','Charlie','Travis','Hugh','Alex','Gabe','Ryan','Daniel','Paul']);
// console.log(studentArray);


// function random (studentArray){
// 	var selectArray= Math.floor(Math.random()*studentarray.length);
// 		return array[selectArray];
// 		}

// console.log[selectArray];








