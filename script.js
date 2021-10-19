const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('hello world');
    // resolve(console.log('hello world'));
  }, 2000);
});

promise.then(function (data) {
  console.log(data);
});
