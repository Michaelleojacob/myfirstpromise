new Promise((resolve, reject) => {
  //this is going to be successful
  //so the .then runs
  resolve();
})
  .then(() => {
    //we're going to force an error.
    //which will run .catch
    throw new Error('Something failed');

    console.log('Do this');
  })
  .then(() => {
    console.log('do this');
  })
  .catch(() => {
    console.error('Do that');
    throw new Error('catch failed');
  })
  .then(() => {
    //if .catch was successful(?) we run this:
    console.log('Do this, no matter what happened before');
  })
  .catch(() => {
    console.log('the previous catch was unsucessful');
  });
