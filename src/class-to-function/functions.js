/*
 * @Author: AllenXD
 * @Date: 2023-09-27 11:11:08
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-09-27 11:24:03
 * @Description: file information
 * @Company: your company
 */
'use strict';

function ModeDom (name) {
  // Todo: 验证this指向
  if (!(this instanceof ModeDom)) {
    throw new TypeError(`Class constructor ModeDom cannot be invoked without 'new'`)
  }
  this.name = name
}

Object.defineProperty(ModeDom.prototype, 'func', {
  value: () => {
    // Todo: 验证this指向, 不可被new调用
    if (!(this instanceof ModeDom)) {
      throw new TypeError(`Class constructor ModeDom cannot be invoked without 'new'`)
    }
    console.log(this.name);
  },
  enumerable: false /// Todo: 不可被枚举
})
// ModeDom.prototype.func = () => {
//   console.log(this.name);
// }

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