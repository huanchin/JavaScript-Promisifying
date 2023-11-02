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

wait(2).then(() => {
    console.log("I wait for 2 seconds");
    return wait(1);
  })
  .then(() => console.log("I wait for 1 seconds"));
