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
                    reg: "^#?没色图了",
                    fnc: 'mstl'
                }, {
                    reg: "^#?生无可恋",
                    fnc: 'swkl'
                }, {
                    reg: "^#?^(我)?是(ikun|爱坤)",
                    fnc: 'ikun'
                }, {
                    reg: "^#?领取情侣证",
                    fnc: 'mxbc'
                }, {
                    reg: "^#?懒羊羊",
                    fnc: 'lyy'
                },
            ]
        });

    }

    async mstl(e) {
        e.reply(await segment.image("https://api.caonm.net/api/mstl/s.php?qq=" + this.judgeAt(e)))
    }

    async swkl(e) {
        e.reply(await segment.image("https://api.caonm.net/api/ddqq/y.php?qq=" + this.judgeAt(e)))
    }

    async ikun(e) {
        e.reply(await segment.image("https://api.caonm.net/api/txmb/7.php?qq=" + this.judgeAt(e)))
    }


    async mxbc(e) {
        e.reply(await segment.image("https://api.caonm.net/api/mxbc/m.php?qq=" + this.judgeAt(e)))
    }

    async lyy(e) {
        e.reply(await segment.image("https://api.caonm.net/api/lyy/l.php?qq=" + this.judgeAt(e)))
    }


    judgeAt(e) {
        let qq = e.user_id
        if (e.at != null) {
            qq = e.at;
        }
        if (e.self_id != null) {
            qq = e.self_id
        }
        return qq;
    }
}