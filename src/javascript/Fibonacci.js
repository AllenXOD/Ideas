/*
 * @Author: AllenXD
 * @Date: 2023-10-06 19:05:32
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-10-06 19:14:56
 * @Description: file information
 * @Company: your company
 */
// Todo: 斐波那契 [1，1，2，3，5，8，13，21，34，55，89]
class Fibonacci {
  first (i) {
    if (i < 2) return 1
    const arr = [1, 1]
    for (let j = 2; j <= i; j++) {
      arr[j] = arr[j - 1] + arr[j - 2]
    }

    return arr[i]
  }

  two (i) {
    if (i < 2) return 1
    let num1 = 1, num2 = 1, num3
    for (let j = 2; j <= i; j++) {
      num3 = num1 + num2
      num1 = num2
      num2 = num3
    }

    return num3
  }
}

(() => {
  console.time('Fibonacci On')
  console.log(new Fibonacci().first(9));
  console.timeEnd('Fibonacci On')
  console.time('Fibonacci O1')
  console.log(new Fibonacci().two(9));
  console.timeEnd('Fibonacci O1')
})();