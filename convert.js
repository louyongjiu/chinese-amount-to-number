function convert(chineseNumStr) {
    // 映射中文数字到阿拉伯数字
    const digitMap = {'零': 0, '壹': 1, '贰': 2, '叁': 3, '肆': 4, '伍': 5, '陆': 6, '柒': 7, '捌': 8, '玖': 9};
    // 单位映射
    const unitMap = {'拾': 10, '佰': 100, '仟': 1000, '万': 10000, '亿': 100000000, '圆': 1, '角': 0.1, '分': 0.01};

    let result = 0;
    let currentUnit = 1;
    let currentNum = 0;
    let tempNum = 0;
    let integerPart = 0;
    let fractionPart = 0;

    for (let i = 0; i < chineseNumStr.length; i++) {
        const char = chineseNumStr[i];
        if (digitMap[char]) {
            // 当前字符是数字
            currentNum = digitMap[char]
        } else if (unitMap[char]) {
            // 当前字符是单位
            currentUnit = unitMap[char]     
            if (char === '亿' || char === '万' || char === '圆') { // 处理亿万圆 进位
                integerPart += (tempNum + currentNum) * currentUnit;
                tempNum = 0;
                currentNum = 0;
                currentUnit = 1;
            } else if (char === '角' || char === '分') { // 处理角分
                fractionPart += currentNum * currentUnit;
                currentNum = 0;
            } else {
                tempNum += currentNum * currentUnit;
                currentNum = 0;
            }
        }
    }
    result = integerPart + fractionPart;
    return result;
}

module.exports = convert;
