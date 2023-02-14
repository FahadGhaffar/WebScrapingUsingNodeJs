import * as cheerio from 'cheerio';

import request from "request";

// console.log("ok");

request("https://code.org/", (error, response, html) => {

    if (!error && response.statusCode == 200) {

        const $ = cheerio.load(html);

        $("div.header.underscorehover").each((i, el) => {
            const category = $(el).text();
            const link = $(el).parent().parent().parent().attr('href');

            console.log(category);
            console.log((link));
        })

    }

})