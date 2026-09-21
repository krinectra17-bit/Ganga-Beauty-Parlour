import { test, expect } from "@playwright/test";

const viewports = [320, 360, 375, 390, 414, 768, 1024, 1280, 1440, 1920];

test.describe("production audit", () => {
  for (const width of viewports) {
    test(`layout integrity at ${width}px`, async ({ page }) => {
      const consoleErrors = [];
      const failedRequests = [];

      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });
      page.on("requestfailed", (request) => {
        if (!request.url().includes("/api/instagram-feed")) {
          failedRequests.push(`${request.method()} ${request.url()}`);
        }
      });

      await page.setViewportSize({ width, height: 900 });
      await page.goto("http://localhost:4173/", { waitUntil: "networkidle" });

      const metrics = await page.evaluate(() => {
        const doc = document.documentElement;
        const images = Array.from(document.images).map((img) => ({
          src: img.currentSrc || img.src,
          alt: img.getAttribute("alt"),
          complete: img.complete,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
          rect: img.getBoundingClientRect().toJSON(),
        }));
        const overflowing = Array.from(document.body.querySelectorAll("*"))
          .filter((el) => {
            const rect = el.getBoundingClientRect();
            return rect.width > 0 && (rect.left < -1 || rect.right > window.innerWidth + 1);
          })
          .slice(0, 12)
          .map((el) => ({
            tag: el.tagName,
            id: el.id,
            className: String(el.className).slice(0, 120),
            rect: el.getBoundingClientRect().toJSON(),
          }));

        return {
          innerWidth: window.innerWidth,
          scrollWidth: doc.scrollWidth,
          bodyScrollWidth: document.body.scrollWidth,
          heroHeight: document.querySelector("#top")?.getBoundingClientRect().height || 0,
          heroImageComplete: document.querySelector(".hero-main")?.complete || false,
          images,
          overflowing,
          activeTelLinks: Array.from(document.querySelectorAll('a[href^="tel:"]')).map((a) => a.href),
          branches: Array.from(document.querySelectorAll("#booking-branch option")).map((o) => o.value),
        };
      });

      expect(consoleErrors, `console errors at ${width}px`).toEqual([]);
      expect(failedRequests, `failed requests at ${width}px`).toEqual([]);
      expect(metrics.scrollWidth, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(width + 1);
      expect(metrics.bodyScrollWidth, `body horizontal overflow at ${width}px`).toBeLessThanOrEqual(width + 1);
      expect(metrics.overflowing, `overflowing elements at ${width}px`).toEqual([]);
      expect(metrics.heroHeight, `hero height at ${width}px`).toBeGreaterThan(600);
      expect(metrics.heroImageComplete, `hero image not complete at ${width}px`).toBe(true);
      expect(metrics.images.filter((img) => !img.complete || img.naturalWidth === 0), `broken images at ${width}px`).toEqual([]);
      expect(metrics.activeTelLinks).toContain("tel:+917733079941");
      expect(metrics.activeTelLinks).toContain("tel:+917014221824");
      expect(metrics.branches).toEqual(["", "Sujangarh", "Didwana", "Ladnun"]);
    });
  }

  test("booking form accepts Ladnun and exposes date/time controls", async ({ page }) => {
    await page.goto("http://localhost:4173/", { waitUntil: "networkidle" });
    await page.locator("#booking").scrollIntoViewIfNeeded();
    await page.selectOption("#booking-branch", "Ladnun");
    await page.fill("#booking-name", "Production Audit");
    await page.fill("#booking-phone", "7733079941");
    await page.selectOption("#booking-service", "Hair Styling");
    await expect(page.locator("#booking-branch")).toHaveValue("Ladnun");
    await expect(page.locator("#booking-date")).toHaveAttribute("type", "date");
    await expect(page.locator("#booking-time")).toHaveAttribute("type", "time");
  });
});
