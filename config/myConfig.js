//调试开关 ，目前貌似没用
const MY_DEV = true;
//中文词库配置 true为使用本地词库 false为启动时抓取wfa的词库
const LOCAL_LIB = false;
//https配置 如果使用Https，请手动修改./bin/www 内配置的证书，不用请
const USE_HTTPS = false;
//WFA_HOST
const WFA_HOST = 'https://wfa.richasy.cn/';
const WFA_RIVEN_HOST = 'https://riven.richasy.cn/';
//WFA_LEXICON
const WFA_LEXICON = "https://wfa-1253605206.cos.ap-chengdu.myqcloud.com/dict/"

//WarframeMarket
const LEXICON_MAP = {
    Dict:"Dict.json",
    Invasion:"Invasion.json",
    NightWave:"Nightwave.json",
    Lib:"Lib.json",
    Sale:"Sale.json",
    Riven:"Riven.json"
}
const myConfig = {
    localLib:LOCAL_LIB,
    isDev:MY_DEV,
    https:USE_HTTPS,
    wfaHost:WFA_HOST,
    wfaRivenHost:WFA_RIVEN_HOST,
    wfaLexicon:WFA_LEXICON,
    lexiconMap:LEXICON_MAP
};
module.exports = myConfig;
