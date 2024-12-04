import Bunbot from "bunbot";

export const randomKeystroke = (interval: number = 10000) => {
  const bot = new Bunbot();
  const keys = "abcdefghijklmnopqrstuvwxyz";

  setInterval(async () => {
    const key = keys[Math.floor(Math.random() * keys.length)];
    bot.type(key);
    console.log(`Key pressed: ${key}`);
  }, interval);
};
