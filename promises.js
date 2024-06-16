// 1)
// const fiftyFiftyPromise = new Promise((resolve, reject) => {
//   const num = Math.round(Math.random() * 10);
//   if (num > 5) {
//     resolve("Promise resolved!");
//   } else {
//     reject("Promise rejected");
//   }
// });

// Promise.allSettled([fiftyFiftyPromise]).then((res) => {
//   console.log(res);
// });

// 2)
// const usersData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// usersData();

// 3)
// const getData1 = new Promise((resolve) => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => resolve(data));
// });

// const getData2 = new Promise((resolve) => {
//   fetch("https://dummyjson.com/users")
//     .then((res) => res.json())
//     .then((data) => resolve(data));
// });

// Promise.race([getData1, getData2]).then((res) => {
//   console.log(res);
// });
