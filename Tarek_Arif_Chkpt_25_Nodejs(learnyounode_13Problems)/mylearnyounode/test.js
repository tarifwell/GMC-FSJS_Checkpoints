const moment = require('moment');
// strftime package from npm to format time
const strftime = require('strftime')
//const time = moment().format('YYYY-MM-DD hh:mm');
//let time = strftime('%Y-%m-%d %H:%M')
//let time = strftime('%F %R')
let time = strftime('%F %R', new Date())
// => April 28, 2011 18:21:08
console.log(time);
