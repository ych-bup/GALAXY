const Discord = require("discord.js");
const axios = require("axios");
const cheerio = require("cheerio");

exports.run = async(client, message, args) => {
    var coronaKor;
    var coronaInt;

    const getHtml = async () => {
        try {
            return await axios.get("http://ncov.mohw.go.kr/");
        } catch (err) {
            console.log(err);
        }
    };

    getHtml()
        .then(html => {
            let ulList = [];
            const $ = cheerio.load(html.data);
            const $bodylist = $("div.wrap.nj div.mainlive_container div.container div div.liveboard_layout div.liveNum_today_new div.datalist ul").children("li");

            $bodylist.each(function(i,elem) {
                coronaKor = $(this).find('span.data').text();
            })
        })
        .then(console.log(coronaKor));
}