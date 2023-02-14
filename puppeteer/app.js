
import puppeteer from 'puppeteer';
import fs from "fs/promises";
import { log } from 'console';

const start = async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://code.org/");
    await page.screenshot({ path: "kids.png", fullPage: true })

    const category = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("div.header.underscorehover")).map(x => x.textContent)
    })
    log(category)
    await fs.writeFile("category.txt", category.join("\r\n"))
    await browser.close()


}

start()