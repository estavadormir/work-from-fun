import Bunbot from "bunbot";

export const randomMouseMovement = (interval: number = 5000) => {
  const bot = new Bunbot();

  setInterval(async () => {
    const screen = bot.getScreenSize();
    const screenWidth = screen.x;
    const screenHeight = screen.y;

    const x = Math.floor(Math.random() * screenWidth);
    const y = Math.floor(Math.random() * screenHeight);

    bot.moveMouseSmooth(x, y);
    console.log(`Mouse moved to (${x}, ${y})`);
  }, interval);
};
