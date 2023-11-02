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
