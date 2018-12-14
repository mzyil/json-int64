
var json_stringify = require('./src/stringify.js').stringify;
var json_parse     = require('./src/parse.js');
var util           = require('./src/int64_util.js');

module.exports = function(options) {
    return  {
        parse: json_parse(options),
        stringify: json_stringify,
        util: util,
        fromDecimalString: util.fromDecimalString,
        toDecimalString: util.toDecimalString
    }
};
//create the default method members with no options applied for backwards compatibility
module.exports.parse = json_parse();
module.exports.stringify = json_stringify;
module.exports.util = util;
module.exports.fromDecimalString = util.fromDecimalString;
module.exports.toDecimalString = util.toDecimalString;
