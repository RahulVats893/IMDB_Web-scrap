const cheerio = require("cheerio");
const fs = require("fs")
const request = require("request");

const url = "https://www.imdb.com/search/title/?groups=top_250&sort=user_rating";

request(url, resp);

function resp(err, response, html) {
    if (err) {
        console.log(err)
    } else {
        extractimdb(html)
    }
}

function extractimdb(html) {
    let $ = cheerio.load(html)
    let array = [];
    // console.log($.text())   // Actual content loading just to check is content fetched or not 
    $(".lister-item-content").each(function(index) {
        const movie = {
            Mn: $(".lister-item-header>a").text(),
            My: $(".lister-item-year.text-muted.unbold").text(),
            Mct: $(".text-muted>.certificate").text(),
        };
        array.push(movie);
    });

    console.log(array);



}