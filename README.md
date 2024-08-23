
# chinese-amount-to-number 

## 介绍
是一个简单的 JavaScript 库，用于将中文大写的金额转换为数字。它适用于财务应用和其他需要处理中文金额字符串的场景。

## 支持的金额表达式

- 整数部分: 壹、贰、叁、肆、伍、陆、柒、捌、玖、零
- 小数部分: 角、分
- 单位: 亿、万、仟、佰、拾、圆

## 安装

通过 npm 安装:

```bash
npm install chinese-amount-to-number
```

## 使用方法

### `convert(amount: string): number`

- **参数**: 
  - `amount (string)`: 需要转换的中文金额字符串。
- **返回**: 
  - `number`: 转换后的数字金额。

## 示例

```javascript
const convert = require('chinese-amount-to-number');

console.log(convert('伍佰圆整')); // 输出: 500
console.log(convert('叁万肆仟伍佰陆拾柒圆捌角玖分')); // 输出: 34567.89
console.log(convert('捌仟壹佰柒拾叁圆肆角肆分')); // 输出: 8173.44
console.log(convert('捌亿壹仟壹佰柒拾叁圆肆角肆分')); // 输出: 800001173.44

```

## 贡献指南

欢迎贡献者提交 issue 和 pull request。请确保遵循现有的代码风格，并添加测试案例来覆盖新的功能或修复。

## 许可证

本项目遵循 MIT 许可证。更多信息请参见 [LICENSE](LICENSE) 文件。
