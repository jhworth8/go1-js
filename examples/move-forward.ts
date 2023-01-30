import { Go1, Go1Mode } from "../src/go1";

async function run() {
  let dog = new Go1();
  dog.setMode(Go1Mode.walk);
  await dog.goForward(0.25, 2000);
  dog.disconnect();
}

run();
