import { Go1, Go1Mode } from "../src/go1";

async function run() {
  let dog = new Go1();
  dog.setMode(Go1Mode.walk);
  await dog.goForward(0.25, 2000);
  await dog.goRight(0.25, 2000);
  await dog.goBackward(0.25, 2000);
  await dog.goLeft(0.25, 2000);
  dog.disconnect();
  console.log("done!");
}

run();
