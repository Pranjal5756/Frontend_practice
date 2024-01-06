// callback is a fuction that are define inside a function means a function that is passed in a function as arguments

// function myDisplayer(something) {
//     document.getElementById("demo").innerHTML = something;
//   }

//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }

//   myCalculator(5, 5, myDisplayer);

// function mydisplayer(something){
//     console.log(something)
// }

/////////////////////////////////////////////////////////

// function myCalculator1(arg1, arg2, callback){
//     let add = arg1 + arg2;
//     callback(add)
// }

// let a = myCalculator1(2, 4, mydisplayer)

// a.then(
// () => {
//     console.log("thik hai")
// }
// )



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// function removeNeg(myNumbers, callback) {
//     const myArray = [];
//     const myArray2 = [];
//     console.log(myArray)
//     for (const x of myNumbers){
//         if (callback(x)) {
//             myArray.push(x);
//         }
//     }
//     for (const y of myNumbers){
//         if (callback(y)) {
//             myArray2.push(y);
//         }
//     }
//     return myArray && myArray2;
// }
// const positiveNum = removeNeg(myNumbers, (x) => x >= 0);
// const positiveNum2 = removeNeg(myNumbers, (x) => x <= 0);

// document.getElementById("id").innerHTML = positiveNum;
// document.getElementById("id2").innerHTML = positiveNum2;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function myMap(my_array, callback){
// 	var arr = [];
// 	for(var index in my_array){
// 		arr.push(callback(my_array[index]));
// 	}
// 	return arr;
// }

// var some_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(myMap(some_array, (x) => x + 1 ));
// console.log(myMap(some_array, (x) => x * 2 ));
// console.log(myMap(some_array, (x) => x * x ));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function myMap(my_array, callback){
// 	var arr = [];
// 	for(var index of my_array){
// 		arr.push(callback(my_array[index]));
// 	}
// 	return arr;
// }

// var some_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(myMap(some_array, (x) => x + 1 ));
// console.log(myMap(some_array, (x) => x * 2 ));
// console.log(myMap(some_array, (x) => x * x ));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function myMap(my_array, callback){
// 	var arr = [];
// 	for(var index of my_array){
// 		arr.push(callback(index));
// 	}
// 	return arr;
// }

// var some_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(myMap(some_array, (x) => x + 1 ));
// console.log(myMap(some_array, (x) => x * 2 ));
// console.log(myMap(some_array, (x) => x * x ));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const input = [
//     {
//       name: "John",
//       yearOfBirth: 1988,
//       placeOfBirth: "New York",
//     },
//     {
//       name: "Nancy",
//       yearOfBirth: 1963,
//       placeOfBirth: "New York",
//     },
//     {
//       name: "John",
//       yearOfBirth: 1980,
//       placeOfBirth: "Toronto",
//     },
//   ];
//   const isOdd = (num) => {
//     return num % 2 === 1;
//   };
//   const groupBy = (array, call) => {
//     var arr = [];
//     for(var index of array){
//         arr.push(call(index));
//     }
//     return arr;}

//   // 1
//   console.log(groupBy(input, (t) => t.name));

//   // 2
//   console.log(groupBy(input, (t) => isOdd(t.yearOfBirth)));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. create an array of 1,2,3,4,-1,-2,-3 and remove negative numbers using callback

// myAarray = [1, 2, 3, 4, -1, -2, -3]

// function removeNeg(myAarray, call){
//     let khali = [];
//     for(const x of myAarray){
//         if(call(x)){
//             khali.push(x)
//         }
//     }
//     return khali;
// }

// document.getElementById("id").innerHTML = removeNeg(myAarray, (x) => x>= 4);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function loadScript(src, callback){
//     var script = document.createElement('script');
//     script.src = src;
//     script.onload = function(){
//         console.log('loaded script with SRC: ' + src)
//         callback(null," pranjal ");
//     }
//     script.onerror = function(){
//         console.log("loading fail " + src)
//         callback("error hai")
//     }
//     document.body.appendChild(script);
// }
// function hello(error, name){
//     alert("hello love " + name);
//     if(error){
//         alert(error);
//         return;
//     }
//     alert("thik hai")
// }

// loadScript("jhhgihttps://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" , hello)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1. Write a function that takes an array of numbers and a callback function. The function should apply the callback to each element in the array and return a new array with the results.

// let array1 = [1,2,3,4,5,6,7];
// let func = (array1, callback) => {
//     let array2 = [];
//     for(const x of array1){
//         if(callback(x)){
//             array2.push(x);
//         }
//     }
//     return array2;
// }

// let func1 = func(array1, (t)=> t>2)

// document.getElementById("id").innerHTML = func1;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1. Write a function that takes an array of numbers and a callback function. The function should apply the callback to each element in the array and return a new array with the results. using setTimeout()

// function simulateAsyncOperation(callback, delay) {
//   setTimeout(callback, delay);
// }

// // Example usage:
// function myCallback() {
//     let array1 = [1,2,3,4,5,6,7];
//     let func = (array1, callback) => {
//         let array2 = [];
//         for(const x of array1){
//             if(callback(x)){
//                 array2.push(x);
//             }
//         }
//         return array2;
//     }

//     let func1 = func(array1, (t)=> t>2)

//     document.getElementById("id").innerHTML = func1;
// }

// simulateAsyncOperation(myCallback, 10000);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let mydisplayer = (something) => {
//   document.getElementById("id").innerHTML = something;
//   // document.getElementById("id2").innerHTML = something2.lenght;
// };
// let mydisplayer2 = (something2) => {
//   document.getElementById("id2").innerHTML = something2;
// };

// let myString = (input1, mycallback) => {
//   let _inputString = input1;
//   mycallback(_inputString);
// };

// let myString2 = (input, mycallback2) => {
//   let _inputStringLenght = input.length;
//   mycallback2(_inputStringLenght);
// };
// let input = prompt();
// myString(input, mydisplayer);
// myString2(input, mydisplayer2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////// it is sychronously developed /////////////////////////////////


// let text = "pranjal, pranku, anku";
// var sliced_text = text.slice(prompt(), prompt())
// let string = (text2, mycallback) => {
//    var text1 = text2;
//     mycallback(text1);
// }

// let string_length = (text1, mycallback2) => {
//     var text2 = text1.length;
//     mycallback2(text2);
// }

// let mydisplayer = (e) => {
//     document.getElementById("id").innerHTML = e;
// } 
// let mydisplayer2 = (e) => {
//     document.getElementById("id2").innerHTML = e;
// } 
// string_length(sliced_text, mydisplayer2)
// string(sliced_text, mydisplayer)


//////////////////////////////////// it is asychronously developed /////////////////////////////////

// let text = "pranjal, pranku, anku";
// var sliced_text = text.slice(prompt(), prompt())
// let string = (text2, mycallback) => {
//    var text1 = text2;
//     mycallback(text1);
// }

// let string_length = (text1, mycallback2) => {
//     var text2 = text1.length;
//     mycallback2(text2);
// }

// let mydisplayer = (e) => {
//     document.getElementById("id").innerHTML = e;
// } 
// let mydisplayer2 = (e) => {
//     document.getElementById("id2").innerHTML = e;
// } 
// string_length(sliced_text, mydisplayer2)
// setTimeout(function() {string(sliced_text, mydisplayer)}, 1000);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////// it is asychronously developed /////////////////////////////////

// let fkr = () => {
//     document.getElementById("id").innerHTML += " hello";
// }
// let a = 1000;
// // for (let a = 1000; a = 10000; a++) {
// //     clearInterval(interval)
// //   }
// var interval = setInterval(fkr, a) 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let loadScript = () => {

// }