 async function myFunc(){
  // return 'Hello';

  const promise = new Promise((resolve,rej) => {
    setTimeout(()=> resolve('Hello'), 2000);
  });
  const res = await promise;
  return res;
}

myFunc()
  .then(res => console.log(res));