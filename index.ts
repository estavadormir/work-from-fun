import { randomKeystroke, randomMouseMovement } from "./utils";

const startFun = () => {
  console.log("Starting fun times ...");
  randomMouseMovement();
  randomKeystroke();
};

startFun();
