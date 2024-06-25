//Callback

function getData(callback) {
    setTimeout(() => {
      const data = 'Some data';
      callback(data);
    }, 1000);
  }
  
  getData((data) => {
    console.log(data);
  });

  //Promise

  function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Some data';
        resolve(data);
      }, 1000);
    });
  }
  
  getData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });


    //Async await
    async function getData() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const data = 'Some data';
            resolve(data);
          }, 1000);
        });
      }
      
      async function main() {
        const data = await getData();
        console.log(data);
      }
      main();