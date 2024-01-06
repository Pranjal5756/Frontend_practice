


//1. Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.


// let function1 = (a) => {
//     if(a != 100){
//         throw new Error("it is not equal to 100")
//     }
//     console.log("it is equal to 100")
// }

// try{
//     function1(prompt())
// }
// catch(err){
//     console.log(err)
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.

// try{
//     let a = undefined;
//     console.log(a.property)
// }catch(err){
//     if (err instanceof TypeError){
//         console.log("typeError")
//     }else{
//         throw err
//     }
// }

// let str = new String("Hello, World");

// if (str instanceof String) {
//   console.log("str is an instance of String object");
// } else {
//   console.log("str is not an instance of String object");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.


// let function3 = (a, b) => {
//     if(b == 0){
//         throw new Error("pfalskdfj")
//     }
// }
// try{

//     function3(3, 1)
// }catch(err){
//     console.log(err)
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative.

// let function4 = (a) => {
//     if(a < 0){
//         throw new Error("fodsfjeoie")
//     }
// }
// try{
//     function4(prompt())
// }catch(err){
//     console.log(err)
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 5. Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.

// let function5 = (a) =>{
    
//     if(a.length == 0){
//         throw new Error("array is empty")
//     }
// }
// try{
//     // let arr = []
//     function5([])
// }catch(err){
//     console.log(err)
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 6. Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.

// let function6 = (mystring) => {
//     if( mystring == ""){
//         throw new Error("string is empty")
//     }
// }
// try{
//     function6("")
// }catch(err){
//     console.log(err)
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 7. Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index.

////////////////////////////////////Samajh nahin aya//////////////////////////////////////////////////////////////////

// function access_Array_Element(array, index) {
//   try {
//     const element = array[index];
//     console.log('Accessed element:', element);
//   } catch (error) {
//     if (error instanceof RangeError) {
//       console.log('Error: Invalid index. Please provide a valid index within the array bounds.');
//     } else {
//       throw error; // re-throw the error if it's not a RangeError
//     }
//   }
// }

// // Example
// const nums = [1, 2, 3, 4, 5];
// access_Array_Element(nums, 1); // Valid index
// access_Array_Element(nums, 5); // Invalid index


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// try {
//     // Define an array
//     const myArray = [1, 2, 3, 4, 5];
  
//     // Attempt to access an invalid index
//     const invalidIndex = prompt();
//     const value = myArray[invalidIndex];
  
//     // This line will not be reached if an error occurs
//     console.log(`Value at index ${invalidIndex}: ${value}`);
//   } catch (error) {
//     if (error instanceof RangeError) {
//       console.error("Error: Index is out of range");
//     } else {
//       console.error("An unexpected error occurred:", error);
//     }
//   }
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // Define an array
// const myArray = [1, 2, 3, 4, 5];

// // Define a function to safely access an array element by index
// function safeArrayAccess(array, index) {
//   if (index >= 0 && index < array.length) {
//     return array[index];
//   } else {
//     throw new RangeError("Index is out of range");
//   }
// }

// try {
//   // Attempt to access an index safely
//   const invalidIndex = 10;
//   const value = safeArrayAccess(myArray, invalidIndex);
//   console.log(`Value at index ${invalidIndex}: ${value}`);
// } catch (error) {
//     console.log(error)
//   if (error instanceof RangeError) {
//     console.error("Error: Index is out of range");
//   } else {
//     console.error("An unexpected error occurred:", error);
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Write a JavaScript program that shows the use of multiple catch blocks to handle different types of errors separately.
  

// function divide_Numbers(x, y) {
//     try {
//       if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new TypeError('Invalid arguments. Both arguments should be numbers.');
//       }
    
//       if (y === 0) {
//         throw new Error('Invalid divisor. Cannot divide by zero.');
//       }
    
//       const result = x / y;
//       console.log('Result:', result);
//     } catch (error) {
//       if (error instanceof TypeError) {
//         console.log('TypeError:', error.message);
//       } else {
//         console.log('Error:', error.message);
//       }
//     }
//   }
  
//   // Example:
//   divide_Numbers(20, '4'); // Invalid divisor
//   divide_Numbers(20, 4);  //  Valid division
//   divide_Numbers(20, 0); // Division by zero
  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Write a JavaScript program that uses a try-catch block to catch and handle a 'URIError' when decoding an invalid URI

