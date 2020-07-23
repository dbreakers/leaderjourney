const express = require('express');
const functions = require('firebase-functions');
const puppeteer = require('puppeteer');
const app = express();
// Runs before every route. Launches headless Chrome.
app.all('*', async (req, res, next) => {
  // Note: --no-sandbox is required in this env.
  // Could also launch chrome and reuse the instance
  // using puppeteer.connect()
  res.locals.browser = await puppeteer.launch({
    args: ['--no-sandbox']
  });
  next(); // pass control to next route.
});
// Handler to take screenshots of a URL.
app.get('/screenshot', async function screenshotHandler(req, res) {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send(
      'Please provide a URL. Example: ?url=https://example.com');
  }
  const browser = res.locals.browser;
  try {
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'});
    const buffer = await page.screenshot({fullPage: true});
    res.type('image/png').send(buffer);
  } catch (e) {
    res.status(500).send(e.toString());
  }
  await browser.close();
});
// Handler that prints the version of headless Chrome being used.
app.get('/version', async function versionHandler(req, res) {
  const browser = res.locals.browser;
  res.status(200).send(await browser.version());
  await browser.close();
});
const opts = {memory: '2GB', timeoutSeconds: 60};
exports.screenshot = functions.runWith(opts).https.onRequest(app);
exports.version = functions.https.onRequest(app);