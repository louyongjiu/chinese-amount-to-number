# chinese-amount-to-number 是一个简单的 JavaScript ，用于将中文大写的金额转换为数字。它适用于财务应用和其他需要处理中文金额字符串的场景。


支持的金额表达式
整数部分: 壹、贰、叁、肆、伍、陆、柒、捌、玖、零
小数部分: 角、分
单位: 万、亿、圆、拾、佰、仟
示例
javascript
const amount1 = '壹万零柒拾肆圆贰角肆分';
const amount2 = '肆万肆仟零柒拾肆圆捌角整';
const amount3 = '捌仟壹佰柒拾叁圆肆角肆分';
const amount4 = '捌亿壹仟壹佰柒拾叁圆肆角肆分';

const arabicAmount1 = chineseToNumber(amount1);
const arabicAmount2 = chineseToNumber(amount2);
const arabicAmount3 = chineseToNumber(amount3);
const arabicAmount4 = chineseToNumber(amount4);

console.log(`阿拉伯数字金额1: ${arabicAmount1}`); //10074.24
console.log(`阿拉伯数字金额2: ${arabicAmount2}`); //44074.8
console.log(`阿拉伯数字金额3: ${arabicAmount3}`); //8173.44
console.log(`阿拉伯数字金额4: ${arabicAmount4}`); //800001173.44
贡献指南
欢迎贡献者提交 issue 和 pull request。请确保遵循现有的代码风格，并添加测试案例来覆盖新的功能或修复。

许可证
本项目遵循 MIT 许可证。更多信息请参见 LICENSE 文件。
