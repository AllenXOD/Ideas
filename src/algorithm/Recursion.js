/*
 * @Author: AllenXD
 * @Date: 2023-10-09 11:01:20
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-10-09 12:11:31
 * @Description: file information
 * @Company: your company
 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum (arr, i = 0) {
  if (i === arr.length) return 0
  return arr[i] + sum(arr, i+1)
}

console.log('sum', sum(arr));