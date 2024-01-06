//1. Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

// let display = () => {
//     console.log("thik hai")
// }

// let callfucn = (callback) => {
//     setTimeout(callback, 2000)
// }

// callfucn(display)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Write a JavaScript program that converts a callback-based function to a Promise-based function.

// function callback_BasedFunction(arg1, arg2, callback) {
//     // Perform asynchronous operations
//     // Call the callback with the result or error
//     setTimeout(() => {
//       const result = arg1 + arg2;
//       if (result % 2 !== 0) {
//         callback(null, result);
//       } else {
//         callback(new Error('Result is not odd!'), null);
//       }
//     }, 1000);
//   }

//   function promisifiedFunction(arg1, arg2) {
//     return new Promise((resolve, reject) => {
//       callback_BasedFunction(arg1, arg2, (error, result) => {
//         if (error) {
//           reject(error); // Reject the Promise with the error
//         } else {
//           resolve(result); // Resolve the Promise with the result
//         }
//       });
//     });
//   }

//   // Usage example:
//   promisifiedFunction(2, 3)
//     .then(result => {
//       console.log('Result:', result);
//     })
//     .catch(error => {
//       console.log('Error:', error.message);
//     });

//   promisifiedFunction(2, 4)
//     .then(result => {
//       console.log('Result:', result);
//     })
//     .catch(error => {
//       console.log('Error:', error.message);
//     });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let func1 = (a, b, callback) => {
//   let c = a + b;
//   if(c===0){
//     callback(null, c)
//   }else{
//     callback(new Error("c is not equal to and equal value 0"))
//   }
// }

// let prom = (a, b) => {
//   return new Promise((resolve, reject) => {
//   func1(a, b, (err, c) => {
//     if(err){
//       reject(err);
//     }else{
//       resolve(c)
//     }
//   })
// })
// }

// prom(2, 4).then((c) => {
//   console.log("c", c)
// }).catch(err => {
//   console.log(err.message);
// })
// prom(0, 0).then(result => {
//   console.log("c", c)
// }).catch(err => {
//   console.log(err.message);
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

// let func3 = (url) => {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//     .then((response) => {
//       if(!response.ok){
//         throw new Error(`http error! ${response.status}`)
//       }
//       response.json()
//     })
//     .then(data => {
//       resolve(data)
//     }).catch((error) => {
//       reject(error)
//     })
//   })
// }

// func3('https://emailvalidation.abstractapi.com/v1/').then(data => {
//   console.log(data)
// }).catch(error => {
//   console.log(error.message)
// })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function make_Get_Request(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => resolve(data))
//       .catch(error => reject(error));
//   });
// }

// make_Get_Request('https://example.com/data')
//   .then(data => {
//     console.log('Response data:', data);
//   })
//   .catch(error => {
//     console.log('Error:', error.message);
//   });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

// function downloadContents(urls) {
//   const promises = urls.map(url => {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//           return response.text();
//         })
//         .then(response => resolve(response))
//         .catch(error => reject(error));
//     });
//   });

//   return Promise.all(promises);
// }

// // Usage example:
// const urls = [
//   'https://jsonplaceholder.typicode.com/posts/1',
//   'https://jsonplaceholder.typicode.com/posts/2',
//   'https://jsonplaceholder.typicode.com/posts/3'
// ];

// downloadContents(urls)
//   .then(contents => {
//     console.log('Downloaded contents:', contents);
//   })
//   .catch(error => {
//     console.log('Error:', error.message);
//   });

// let func1 = (Urls) => {
//   let promises = Urls.map(url => {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//       .then(
//         response => {
//           if(!response.ok){
//             throw new Error(response.status)
//           }
//           return response.text()
//         }
//       )
//       .then(response => resolve(response))
//       .catch(err => reject(response.err))
//     })
//   })
//   return Promise.all(promises)
// }

// const Urls = [
//   'https://jsonplaceholder.typicode.com/posts/1',
//   'https://jsonplaceholder.typicode.com/posts/2',
//   'https://jsonplaceholder.typicode.com/posts/3'
// ];

// func1(Urls)
// .then(contents => {
//   console.log(contents)
// })
// .catch(err => {
//   console.log(err.message)
// })

// let func8 = (Urls) => {
//   let promises = Urls.map((prl) => {
//     return new Promise((resolve, reject) => {
//       fetch(prl)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(response.status);
//           }
//           return response.text();
//         })
//         .then((response) => resolve(response))
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   });
//   return Promise.all(promises);
// };

// const Urls = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
//   "https://jsonplaceholder.typicode.com/posts/3",
// ];

// func8(Urls)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//5. Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.

// function asyncOperation1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Asynchronous Operation 1');
//       resolve();
//     }, 1000);
//   });
// }

// function asyncOperation2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Asynchronous Operation 2');
//       resolve();
//     }, 2000);
//   });
// }

// function asyncOperation3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Asynchronous Operation 3');
//       resolve();
//     }, 1500);
//   });
// }

// async function performOperations() {
//   try {
//     await asyncOperation1();
//     await asyncOperation2();
//     await asyncOperation3();
//     console.log('All operations completed');
//   } catch (error) {
//     console.log('Error:', error.message);
//   }
// }

// performOperations();

// let func1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       let a = console.log("pranjal")
//       resolve(a)
//     }, 2000)
//   })
// }
// let func2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       let a = console.log("pranjal2")
//       resolve(a)
//     }, 2000)
//   })
// }
// let func3 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       let a = console.log("pranjal3")
//       resolve(a)
//     }, 2000)
//   })
// }

// async function func4() {
//   try{
//     await func1();
//     await func2();
//     await func3();
//   }catch(err){
//     console.log(err.message)
//   }
// }

// func4()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

// function fetchDataFromAPI(url) {
//   return fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   });
// }

// function fetchMultipleAPIs(apiUrls) {
//   const promises = apiUrls.map((url) => fetchDataFromAPI(url));
//   return Promise.all(promises);
// }

// // Example usage:
// const apiUrls = [
//   "https://jsonplaceholder.typicode.com/posts/4",
//   "https://jsonplaceholder.typicode.com/posts/5",
//   "https://jsonplaceholder.typicode.com/posts/6",
// ];

// fetchMultipleAPIs(apiUrls)
//   .then((results) => {
//     console.log("Combined Results:", results);
//   })
//   .catch((error) => {
//     console.log("Error:", error.message);
//   });

///////////////////////////////////////////////////////////////////////////////////////////////////////

// let fetchDataFromAPI2 = (apiUrls) => {
//   let promises = apiUrls.map(api => {
//     return new Promise((resolve, reject) => {
//       fetch(api)
//       .then(response => {
//         if(response.ok){
//           return response.text()
//         }
//         throw new Error(response.status)
//       })
//       .then(response => resolve(response))
//       .catch(err => {
//         reject(err)
//       })
//     })
//   })
//   return Promise.all(promises)
// }

// const apiUrls = [
//   "https://jsonplaceholder.typicode.com/posts/4",
//   "https://jsonplaceholder.typicode.com/posts/5",
//   "https://jsonplaceholder.typicode.com/posts/6",
// ];

// fetchDataFromAPI2(apiUrls)
// .then(result => {
//   console.log(result)
// })
// .catch(err => {
//   console.log(err)
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let fetchData = (Urls) => {
//   return fetch(Urls)
//   .then((resp) => {
//     if(!resp.ok){
//       throw new Error(resp.status)
//     }
//     return resp.json
//   })
// };

// function fetchMultipleAPIs(apiUrls) {
//   const promises = apiUrls.map((Urls) => fetchData(Urls));
//   return Promise.all(promises);
// }

// const apiUrls = [
//   'https://jsonplaceholder.typicode.com/posts/4',
//   'https://jsonplaceholder.typicode.com/posts/5',
//   'https://jsonplaceholder.typicode.com/posts/6'
// ];

// fetchData(apiUrls)
// .then(result => {
//   console.log(result)
// }).catch(err => {
//   console.log(err.message)
// })



// function fetchData(Urls) {
//   return fetch(Urls).then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   });
// }

// function fetchMultipleAPIs(apiUrls) {
//   const promises = apiUrls.map((Urls) => fetchData(Urls));
//   return Promise.all(promises);
// }

// // Example usage:
// const apiUrls = [
//   "https://jsonplaceholder.typicode.com/posts/4",
//   "https://jsonplaceholder.typicode.com/posts/5",
//   "https://jsonplaceholder.typicode.com/posts/6",
// ];

// fetchMultipleAPIs(apiUrls)
//   .then((results) => {
//     console.log("Combined Results:", results);
//   })
//   .catch((error) => {
//     console.log("Error:", error.message);
//   });


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 7. Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

// let pranjal = (Url, maxRetries) =>{
//     return new Promise((resolve, reject) => {
//         let retries = 0
//         let fetchData = () => {
//             fetch(Url)
//             .then(Response => {
//                 if(!Response.ok){
//                     throw new Error(Response.status)
//                 }
//                 return Response.json()
//             })
//             .then(data => resolve(data))
//             .catch(err => {
//                 retries++;
//                 if(retries <= maxRetries){
//                     console.log(`Request failed. Retrying (${retries}/${maxRetries}...`)
//                         fetchData()
//                 }
//                 reject(new Error(`Failed after ${maxRetries} retries. Error: ${err.message}`))
//             })
//         }
//         return fetchData()
//     })
// }


// const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
// console.log("URL-> ",apiUrl);
// const maxRetries = 3;

// pranjal(apiUrl, maxRetries)
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function fetchDataWithRetry(url, maxRetries) {
//     return new Promise((resolve, reject) => {
//       let retries = 0;
//       const fetchData = () => {
//         fetch(url)
//           .then(response => {
//             if (!response.ok) {
//               throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//           })
//           .then(data => resolve(data))
//           .catch(error => {
//             retries++;
//             if (retries <= maxRetries) {
//               console.log(`Request failed. Retrying (${retries}/${maxRetries})...`);
//               fetchData();
//             } else {
//               reject(new Error(`Failed after ${maxRetries} retries. Error: ${error.message}`));
//             }
//           });
//       };
  
//       fetchData();
//     });
//   }
  
//   // Usage example:
//   //const apiUrl = 'https://jsonplaceholder.typicode.com/posts3';
//   const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
//   console.log("URL-> ",apiUrl);
//   const maxRetries = 3;
  
//   fetchDataWithRetry(apiUrl, maxRetries)
//     .then(data => {
//       console.log('Fetched data:', data);
//     })
//     .catch(error => {
//       console.log('Error:', error.message);
//     });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.

// function repeat_Function(fn, interval) {
//     // Execute the function immediately
//     fn();
//     // Set up the interval to execute the function repeatedly
//     const intervalId = setInterval(fn, interval);
//     // Return a function to stop the execution
//     return function stopExecution() {
//       clearInterval(intervalId);
//       console.log('Execution stopped.');
//     };
//   }
//   // Usage example:
//   const intervalMs = 1000; // 1 second
//   // Define the function to be repeated
//   function printMessage() {
//     console.log('Executing the function...');
//   }
//   // Start the repeated execution
//   const stopExecution = repeat_Function(printMessage, intervalMs);
//   // Stop the execution after 4 seconds
//   setTimeout(() => {
//     stopExecution();
//   }, 4000);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 9.Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.



let fucnsjdf2 = () => {
    return new Promise((resolve, reject) => {
        
    })
}

fucnsjdf2()
.then()
.catch()
  
