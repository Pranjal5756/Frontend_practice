// // Simulate asynchronous API calls with callbacks
// function fetchUserData(userId, callback) {
//   setTimeout(() => {
//     const userData = {
//       id: userId,
//       username: "exampleUser",
//     };
//     callback(null, userData); // Simulate a successful response
//   }, 1000);
// }

// function fetchUserPosts(userId, callback) {
//   setTimeout(() => {
//     const userPosts = [
//       { id: 1, title: "Post 1" },
//       { id: 2, title: "Post 2" },
//     ];
//     callback(null, userPosts); // Simulate a successful response
//   }, 1500);
// }

// function fetchPostComments(postId, callback) {
//   setTimeout(() => {
//     const comments = [
//       { id: 101, text: "Comment 1" },
//       { id: 102, text: "Comment 2" },
//     ];
//     callback(null, comments); // Simulate a successful response
//   }, 2000);
// }

// // Example of nested callbacks (Callback Hell)
// fetchUserData(1, (userError, userData) => {
//   if (userError) {
//     console.error("Error fetching user data:", userError);
//     return;
//   }
//   console.log("User data:", userData);

//   fetchUserPosts(userData.id, (postsError, userPosts) => {
//     if (postsError) {
//       console.error("Error fetching user posts:", postsError);
//       return;
//     }
//     console.log("User posts:", userPosts);

//     fetchPostComments(userPosts[0].id, (commentsError, comments) => {
//       if (commentsError) {
//         console.error("Error fetching post comments:", commentsError);
//         return;
//       }
//       console.log("Post comments:", comments);
//     });
//   });
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Simulate asynchronous API calls with callbacks
// let fetchUserData1 = (userId, callback) => {
//   setTimeout(() => {
//     const userData = {
//       id: userId,
//       username: "exampleUser",
//     };
//     callback(null, userData); // Simulate a successful response
//   }, 1000);
// };

// let fetchUserPosts1 = (userId, callback) => {
//   setTimeout(() => {
//     const userPosts = [
//       { id: 1, title: "Post 1" },
//       { id: 2, title: "Post 2" },
//     ];
//     callback(null, userPosts); // Simulate a successful response
//   }, 1500);
// };

// let fetchPostComments1 = (postId, callback) => {
//   setTimeout(() => {
//     const comments = [
//       { id: 101, text: "Comment 1" },
//       { id: 102, text: "Comment 2" },
//     ];
//     callback(null, comments); // Simulate a successful response
//   }, 2000);
// };

// Example of nested callbacks (Callback Hell)
//   fetchUserData1(1, (userError, userData) => {
//       if (userError) {
//       console.error("Error fetching user data:", userError);
//       return;
//     }else{

//         console.log("User data:", userData);
//     }

//     fetchUserPosts1(userData.id, (postsError, userPosts) => {
//       if (postsError) {
//         console.error("Error fetching user posts:", postsError);
//         return;
//       }else{

//           console.log("User posts:", userPosts);
//       }

//       fetchPostComments1(userPosts[0].id, (commentsError, comments) => {
//         if (commentsError) {
//           console.error("Error fetching post comments:", commentsError);
//           return;
//         }else{

//             console.log("Post comments:", comments);
//         }
//       });
//     });
// });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let fetchUserData2 = (name, userId, callback) => {
//   setTimeout(() => {
//     const userData = [{
//       id: userId,
//       username: name,
//     }];
//     callback(null, userData);
//   }, 1000);

// };
// let fetchUserPosts2 = (userId, callback) => {
//   setTimeout(() => {
//     const userPosts = [
//       { id: userId, title: "Post 1" },
//       { id: 2, title: "Post 2" },
//     ];
//     callback(null, userPosts);
//   }, 1500);
// };

// let fetchUserPostcoments2 = (userId, callback) => {
//   setTimeout(() => {
//     const comments = [
//       { id: userId, text: "Comment 1" },
//       { id: 102, text: "Comment 2" },
//     ];
//     callback(null, comments);
//   }, 2000);
// };

// fetchUserData2(prompt(), prompt(), (error, userData) => {
//     if(error){
//         console.error(error)
//         return
//     }else{
//         console.log(userData)
//     }
//     fetchUserPosts2(1, (error, userPosts) => {
//         if(error){
//             console.error(error)
//             return
//         }else{
//             console.log(userPosts)
//         }
//         fetchUserPostcoments2(1, (error, comments) => {
//             if(error){
//                 console.error(error)
//                 return
//             }else{
//                 console.log(comments[0])
//             }
//         })
//     })
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let fetchUserData2 = (usernaam, userId, callback) => {
//   setTimeout(() => {
//     const userData = [
//       {
//         id: userId,
//         username: usernaam,
//       },
//     ];
//     callback(null, userData);
//   }, 1000);
// };
// let fetchUserPosts2 = (userId, callback) => {
//   setTimeout(() => {
//     const userPosts = [
//       { id: userId, title: "Post 1" },
//       { id: 2, title: "Post 2" },
//     ];
//     callback(null, userPosts);
//   }, 1500);
// };

// let fetchUserPostcoments2 = (userId, callback) => {
//   setTimeout(() => {
//     const comments = [
//       { id: userId, text: "Comment 1" },
//       { id: 102, text: "Comment 2" },
//     ];
//     callback(null, comments);
//   }, 2000);
// };

// fetchUserData2(prompt(), prompt(), (error, userData) => {
//     if(error){
//         console.error(error)
//         return;
//     }else{
//         console.log(userData)
//     }
// })

