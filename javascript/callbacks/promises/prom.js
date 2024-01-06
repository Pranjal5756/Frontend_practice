//promises are used mainly for preventing callback hell, callback hell occurs when you multiple callback inside a callback

// let mydisplayer = (e) => {
//     document.getElementById("id").innerHTML = e;
// }

// let myPromises = new Promise((myResolve, reject) => {
//     let x = 0;
//     if(x==prompt("true if you fill 0 otherwise false" )){
//         myResolve("thik hau");
//     }else{
//         reject("jake thik karo")
//     }
// });

// myPromises.then((value) => {
//     mydisplayer(value);
// }, (error) => {
//     mydisplayer(error)
// })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let mypromises = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('i love you');
//     }, 3000)
// });

// mypromises.then((a) => {
//     document.getElementById("id").innerHTML = a;
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let p1 = new Promise((resolve, reject) => {
//   console.log("Promise is pending")
//   setTimeout(() => {
//           // console.log("I am a promise and I am resolved")
//           resolve(true)
//   }, 5000)
// })

// let p2 = new Promise((resolve, reject) => {
//   console.log("Promise is pending")
//   setTimeout(() => {
//           // console.log("I am a promise and I am rejected")
//           reject(new Error("I am an error"))
//   }, 5000)
// })

// // To get the value
// p1.then((value) => {
//   console.log(value)
// })

// // To catch the errors
// p2.catch((error) => {
//         console.log("some error occurred in p2 " + error)
// })

// p2.then((value)=>{
//   console.log(value)
// },(error)=>{
//   console.log(error)
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Promise chaining

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//           console.log("Resolved after 2 seconds")
//           resolve(56)
//   }, 2000)
// })

// p1.then((value) => {
//   console.log(value)
//   return new Promise((resolve, reject) => {
//           setTimeout(() => { resolve("Promise 2") }, 2000)
//   })
// }).then((value) => {
//   console.log("We are done " + value)
//   return 2
// }).then((value)=>{
//   console.log("Now we are pakka done " + value)
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Attaching MUltiple handler

// let p1 = new Promise((resolve, reject) => {
//   alert("Hey I am not resolved")
//   setTimeout(() => {
//           resolve(1);
//   }, 5000)
// })

// p1.then((e) => {
//   console.log("Hurray " + e)
//   return new Promise((resolve, reject) => {
//           setTimeout(() => {
//                   resolve(4)
//           }, 6000)
//   })
// }).then((value) => { console.log(value) })

// p1.then(() => {
//   console.log("Congratulations this promise is now resolved")
// })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let p1 = new Promise((resolve, reject) => {
//   alert("hey I am not resolve ");
//   resolve(1);
// });

// p1.then((value) => {
//   console.log(value);
// //   setTimeout(() => {
//     return 3 ;
// //   }, 2000);
// }).then((value) => {
//     setTimeout(() => {
//          console.log(value)
//     }, 2000);
//     return new Promise((resolve, reject) => {
//         resolve("pranjal")
//     })
// }).then((value) => {
//     setTimeout(() => {
//         console.log(value)
//     }, 3000);
// })


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let myApi = new Promise((resolve, reject) => {
//     resolve("lovely")
//     reject(new Error("uff! error hogaya"))
// })

// myApi.then((value) => {
//     console.log(value);
    
// }, (error) => {
//     console.error(error)
// })

