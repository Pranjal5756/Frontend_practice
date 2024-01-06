// 1. Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

// let func2 = (callback) => {
//     setTimeout(callback, 2000);
// }

// let disp = () => {

//     console.log("hello")
// }

// func2(disp)

// 2. Write a JavaScript function that takes a callback with argument and invokes it after a delay of 2 second.

// function delayCallback(callback) {
//     setTimeout(() => {
//       callback(3, 5);
//     }, 2000); // 2000 milliseconds = 2 seconds
//   }

//   // Example usage:
//   function exampleCallback(a, b) {
//     let c = a + b;
//     console.log(`addition of ${a} and ${b} is  ${c}`);
//   }

//   delayCallback(exampleCallback);

// 3. Write a JavaScript arrow function that takes a callback with argument and invokes it after a delay of 2 second.

// let func4 = (callback) => {
//     setTimeout(() => {
//         callback(prompt("a "), prompt("b "))
//     }, 2000);
// }

// let func5 = (a, b) => {
//     let c = a * b;
//     console.log(c)
// }

// func4(func5)

// 4. Write a JavaScript program that converts a callback-based function to a Promise-based function.

// let func = (a, b, callback) => {
//     let c = a + b;
//     callback(c)
// }

// let func2 = (a, c) => {
//     return new Promise((resolve, reject) => {
//         func(a, c, (err, re) => {
//             if(err){
//                 reject(err)
//             }
//             resolve(re)
//         })
//     })
// }

// func2(23, 23).then(re => {
//     console.log(re)
// }).catch(err => {
//     console.log(err)
// })

// let func = (a, b, callback) => {
//     let c = a + b;
//     callback(c)
// }

// 5. Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

// let func2 = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//         .then(Response => {
//             if(!Response.ok){
//                 throw new Error(Response.status)
//             }
//             return Response.json()
//         })
//         .then(result => resolve(result))
//         .catch(err => reject(err))
//     })
// }

// func2('https://jsonplaceholder.typicode.com/posts/1').then(re => {
//     console.log(re)
// }).catch(err => {
//     console.log(err)
// })


//6.  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.


let func2 = (url) => {
  let promises = url.map((url2) => {
    return new Promise((resolve, reject) => {
      fetch(url2)
        .then((Response) => {
          if (!Response.ok) {
            throw new Error(Response.status);
          }
          return Response.json();
        })
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  });
  return Promise.all(promises)
};

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];

func2(urls).then(re => {
    console.log(re)
}).catch(err => {
    console.log(err)
})


// 5. Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.

// let a = () => {
//     setTimeout(() => {
//         let e = 3 + 4;
//         console.log(e)

//     }, 1000)
// }
// let r = () => {
//     setTimeout(() => {
        
//         let e = 3 + 4345;
//         console.log(e)
//     }, 2000);
// }
// let u = () => {
//     setTimeout(() => {
        
//         let e = 33 + 4;
//         console.log(e)
//     }, 3000);
// }

// let c = async () => {
//     try{

//         await a();
//         await r();
//         await u();
//     }catch(err){
//         console.log(err)
//     }
// }

// c()


// 6. Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.



// let func12 = () => {

// }
function fetchDataFromAPI(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
  }
  
  function fetchMultipleAPIs(apiUrls) {
    const promises = apiUrls.map(url => fetchDataFromAPI(url));
    return Promise.all(promises);
  }
  
  // Example usage:
  const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
  ];
  
  fetchMultipleAPIs(apiUrls)
    .then(results => {
      console.log('Combined Results:', results);
    })
    .catch(error => {
      console.log('Error:', error.message);
    });
  
