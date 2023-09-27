/*
 * @Author: AllenXD
 * @Date: 2023-09-27 11:05:40
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-09-27 11:24:52
 * @Description: file information
 * @Company: your company
 */
class ModeDom {
  constructor (name) {
    this.name = name
  }

  func () {
    console.log(this.name);
  }
}

// Todo: Class constructor ModeDom cannot be invoked without 'new'
// ModeDom('abc')

// Todo: key only name
// const e = new ModeDom('abc')
// for (const key in e) {
//   console.log(key);
// }

// Todo: e.func is not a constructor
// const e = new ModeDom('abc')
// new e.func()