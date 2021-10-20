const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello world');
  }, 2000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`this is from promiseTwo`);
  }, 3000);
});

const successCb = (data) => console.log(`successfully got ${data}`);
const failureCb = (data) => console.log(`failed to get ${data}`);

const p3 = promise.then(successCb, failureCb);

p3.then((successCb, failureCb) => {
  return successCb;
});
