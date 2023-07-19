const repeatString = function (text, count) {
    let str = '';
    if (count < 0) {
        str = 'ERROR'
    } else {
        for (let i = 1; i <= count; i++) {
            str = str + text;

        }
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
