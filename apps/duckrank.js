import plugin from "../../../lib/plugins/plugin.js";
import fetch from "node-fetch";
import Tools from "../model/tools.js";
import puppeteer from "../../../lib/puppeteer/puppeteer.js";

export class duckrank extends plugin{
    constructor() {
        super({
            name: '鸭鸭发电榜',
            dsc: '鸭鸭发电榜',
            event: 'message',
            priority: 2000,
            rule: [
                {
                    reg: "^#?鸭鸭发电榜$",
                    fnc: 'yyfdb'
                },
            ]
        });

    }
    async yyfdb(e){
        const url = "https://afdian.net/api/creator/get-thank-sponsors?user_id=dbe11f66b16a11ea989852540025c377&month=10&year=2022&page=1"
        const res = await fetch(url)
        const resJson =await res.json()
        const data = await new Tools(this.e).getRankData([
            ...resJson.data.list,
        ]);
        let img = await puppeteer.screenshot("fdrank", {
            ...data,
            type: "rank",
            limitTop: 20,
        });
        e.reply(img)
    }
}