const fs = require("fs");
const { promisify } = require("util");

const readFilePromise = promisify(fs.readFile);

const logDataSync = () => {
  try {
    const text = fs.readFileSync("hello-world.txt", "utf8");
    console.log("sync", text);
  } catch (err) {
    console.error("sync", err);
  }
};

const logDataCallback = () => {
  fs.readFile("hello-world.txt", "utf8", (err, data) => {
    if (err) {
      console.error("cb", err);
      return;
    }
    console.log("cb", data);
  });
};

const logDataPromise = () => {
  readFilePromise("hello-world.txt", "utf8")
    .then(data => {
      console.log("promise", data);
    })
    .catch(err => {
      console.error("promise", err);
    });
};

const logDataAsync = async () => {
  try {
    const text = await readFilePromise("hello-world.txt", "utf8");
    console.log("async", text);
  } catch (err) {
    console.error("async", err);
  }
};

logDataSync();
logDataCallback();
logDataPromise();
logDataAsync();
