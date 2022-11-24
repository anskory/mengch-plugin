import { Data, Version } from './components/index.js'
import fs from "node:fs";

    Bot.logger.info('---------^_^---------')
    Bot.logger.info(`檬橙插件${Version.version}初始化~`)
    Bot.logger.info(`檬橙插件初始化成功！`)

const files = fs
    .readdirSync('./plugins/mengch-plugin/apps')
    .filter((file) => file.endsWith('.js'))


let apps = {}
for (let file of files) {
    let name = file.replace('.js', '')
    apps[name] = (await import(`./apps/${file}`))[name]
}
export { apps }
