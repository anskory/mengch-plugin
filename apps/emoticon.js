import {segment} from "oicq";

export class emoticon extends plugin {
    constructor() {
        super({
            name: '表情包',
            dsc: '表情包',
            event: 'message',
            priority: 2000,
            rule: [
                {
                    reg: "^#?没色图了$",
                    fnc: 'mstl'
                }, {
                    reg: "^#?生无可恋$",
                    fnc: 'swkl'
                },
            ]
        });

    }

    async mstl(e) {
        e.reply(await segment.image("http://106.13.235.145:8890/emoticon/mstl?qq=" + e.user_id))
    }
    async swkl(e) {
        e.reply(await segment.image("http://106.13.235.145:8890/emoticon/swkl?qq=" + e.user_id))
    }
}