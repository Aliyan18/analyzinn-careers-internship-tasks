// fectch data from three apis and output using different time intervals

async function getInfo(url, val) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        let response = await fetch(url);
        let json = await response.json();
        resolve(json);
      } catch (error) {
        reject(error);
      }
    }, val);
  });
}

getInfo('https://jsonplaceholder.typicode.com/todos/1', 7000)
  .then(data => console.log(data))
  .catch(error => console.error(error));

getInfo('https://jsonplaceholder.typicode.com/comments/1', 5000)
  .then(data => console.log(data))
  .catch(error => console.error(error));

getInfo('https://jsonplaceholder.typicode.com/todos/2', 1000)
  .then(data => console.log(data))
  .catch(error => console.error(error));
