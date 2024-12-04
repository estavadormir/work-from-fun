import { expect, test, describe } from "bun:test";
import { randomMouseMovement } from "./mousemoves";

describe("randomMouseMovement", () => {
  test("should move mouse at specified interval", async () => {
    const startTime = Date.now();
    let moveCount = 0;

    const originalConsoleLog = console.log;
    console.log = (message: string) => {
      if (message.includes("Mouse moved to")) {
        moveCount++;
      }
    };

    randomMouseMovement(1000);
    await new Promise((resolve) => setTimeout(resolve, 2100));
    console.log = originalConsoleLog;

    expect(moveCount).toBeGreaterThanOrEqual(2);

    const duration = Date.now() - startTime;
    expect(duration).toBeGreaterThanOrEqual(2000);
  });
});
