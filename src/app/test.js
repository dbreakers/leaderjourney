exports.screenshot = functions
  .runWith({
    timeoutSeconds: 120,
    memory: "2GB"
  })
  .https.onRequest((request, response) => {
    (async () => {
      const url = request.query.url;
      const width = parseInt(request.query.width) || 1024;
      const height = parseInt(request.query.height) || 768;
      const fullPage = request.query.full
        ? request.query.full === "true"
        : false;

      if (!url) {
        return response.send(`Invalid url: ${url}`);
      }

      const browser = await puppeteer.launch({
        args: ["--no-sandbox"]
      });
      const page = await browser.newPage();

      await page.goto(url, { waitUntil: "networkidle2" });

      if (!fullPage) {
        await page.setViewport({ width, height });
      }

      const screenshot = await page.screenshot({ fullPage });

      await browser.close();

      return response.type("image/png").send(screenshot);
    })();
  });