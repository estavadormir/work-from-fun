import {
  expect,
  test,
  describe,
  beforeEach,
  afterEach,
  mock,
  spyOn,
} from "bun:test";
import { randomKeystroke } from "./keystrokes";

describe("randomKeystroke", () => {
  test("should type characters at specified interval", async () => {
    const startTime = Date.now();
    let keypressCount = 0;

    const originalConsoleLog = console.log;
    console.log = (message: string) => {
      if (message.includes("Key pressed:")) {
        keypressCount++;
      }
    };

    randomKeystroke(1000);
    await new Promise((resolve) => setTimeout(resolve, 2100));

    console.log = originalConsoleLog;

    expect(keypressCount).toBeGreaterThanOrEqual(2);

    const duration = Date.now() - startTime;
    expect(duration).toBeGreaterThanOrEqual(2000);
  });
});
