/*
 * @Author: AllenXD
 * @Date: 2023-09-23 19:57:34
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-09-23 20:08:20
 * @Description: file information
 * @Company: your company
 */
export class Slot {
  sleep (ms) {
    return new Promise(reslove => setTimeout(reslove, ms))
  }

  lenOfRandom () {
    // 生成的随机数组的长度
    return 10 + Math.ceil(Math.random() * 10)
  }

  randomArray (lenOfRandomArray) {
    let randomArray = []
    // 生成lenOfRandomArray个[1, 50] 的随机数，并放入randomArray中
    for (let i = lenOfRandomArray; i--;) {
      randomArray.push(Math.floor(Math.random() * 50 + 1))
    }
    return randomArray
  }
}