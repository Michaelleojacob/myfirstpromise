const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('hello world');
    // resolve(console.log('hello world'));
  }, 2000);
});

promise.then(function (data) {
  console.log(data);
});

//** combines both  **//

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`this is from promiseTwo`);
  }, 3000);
});

promiseTwo.then((data, cb) => {
  console.log(data);
  promise.then((pdata) => console.log(pdata));
});

//** combines both  **//
