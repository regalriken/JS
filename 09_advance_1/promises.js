const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 1");
  }, 1000);
});
myPromise.then();

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("promise was kept");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Riken", email: "rikenincanada@gmail.com" });
  }, 1000);
});
promise3.then(function (user) {
  console.log(user);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "mrRiken", email: "rikenpatel2005@gmail.com" });
    } else {
      reject("Error occured... Try again letter");
    }
  }, 1000);
})
  .then(function (user) {
    // cannot extract data from returned value of resolve or catch
    return user.email;
  })
  .then((email) => {
    // data from returned value of resolve or catch
    console.log(email);
  })
  .catch((reason) => {
    console.log(reason);
  })
  .finally(() => {
    console.log("END OF PROMISE");
  });

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "regalRiken", email: "rikenincanada@gmail.com" });
    } else {
      reject("Error occured... Try again letter");
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    const data = await promise5;
    console.log(data.email);
  } catch (error) {
    console.log(error);
  }
}

consumePromise5();

//      Working with fetch
//  async await way
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();


// then,catch way
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (data) {
    return data.json();
  })
  .then(function (users) {
    console.log(users);
  })
  .catch(function (error) {
    console.log(error);
  });