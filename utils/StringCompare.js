/*
 * @Author: AllenXD
 * @Date: 2023-10-17 08:33:19
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-10-17 08:47:42
 * @Description: file information
 * @Company: your company
 */
/**
 * @description: 字符串大小对比
 * @param {*} s1 '1-23-56-8-1'
 * @param {*} s2 '1-23-87-6-3'
 * @return {*} s1 > s2 renturn 1; s1 < s2 renturn -1; s1 = s2 renturn 0
 */
function compare(s1, s2) {
  const whileT = true
  const ite1 = iteration(s1)
  const ite2 = iteration(s2)
  while (whileT) {
    const v1 = ite1.next()
    const v2 = ite2.next()
    if (v1.done && v2.done) {
      return 0
    } else if (v1.done) {
      return -1
    } else if (v2.done) {
      return 1
    } else if (v1.value > v2.value) {
      return 1
    } else if (v1.value < v2.value) {
      return -1
    }
  }
}

function* iteration(value, key = '-') {
  let part = ''
  for (let i = 0; i < value.length; i++) {
    if (value[i] !== key) {
      part += value[i]
    } else {
      yield +part
      part = ''
    }
  }
  if (part) {
    yield +part
  }
}

console.log(compare('1-23-56-8-1', '1-23-87-6-3')) // -1
console.log(compare('3-23-56-8-1', '3-23-44-6-3')) // 1
console.log(compare('3-23-56-8-1', '3-23-56-8-1')) // 0
