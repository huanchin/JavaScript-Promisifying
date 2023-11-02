const lotteryPromise = new Promise((resolve, reject) => {
  console.log("Lotter draw is happening🔮");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("YOU WIN 💰");
    } else {
      reject(new Error("you lost your money 💩"));
    }
  }, 2000);
});

lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

/*** promisifying setTimeout ****/
const wait = function (seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1).then(() => {
    console.log("1 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("2 seconds passed");
    return wait(1);
  })
  .then(() => {
    console.log("3 seconds passed");
    return wait(1);
  })
  .then(() => console.log("I wait for 4 seconds"));

/*** compare to setTimeout callback hell ***/
setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 seconds passed");
    setTimeout(() => {
      console.log("3 seconds passed");
      setTimeout(() => {
        console.log("I wait for 4 seconds");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
