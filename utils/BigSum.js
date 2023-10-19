/*
 * @Author: AllenXD
 * @Date: 2023-10-14 11:43:00
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-10-14 11:54:47
 * @Description: file information
 * @Company: your company
 */
/**
 * @description: 超大数之和
 * @param {String} a
 * @param {String} b
 * @return {String}
 */
function sum(a, b) {
  const maxLen = Math.max(a.length, b.length) // todo: 获取a、b最大位数
  // todo: 填充位数
  a = a.padStart(maxLen, '0')
  b = b.padStart(maxLen, '0')

  let carry = 0
  let result = ''
  for (let i = maxLen - 1; i > 0; i--) {
    const sum = Number(a[i]) + Number(b[i]) + carry
    result = (sum % 10) + result
    carry = Math.floor(sum / 10)
  }
  if (carry) result = carry + result

  return result
}

;(() => {
  console.log(sum('321389478436573291371', '218437286435321763561937219'))
})()

export default sum
