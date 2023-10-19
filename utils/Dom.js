/*
 * @Author: AllenXD
 * @Date: 2023-10-07 09:58:10
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-10-19 09:47:48
 * @Description: file information
 * @Company: your company
 */
class UseDom {
  static on (element = window, event, handler) {
    element.addEventListener(event, handler, false)
  }
  static off (element = window, event, handler) {
    element.removeEventListener(event, handler, false)
  }

  static copyToBoard (value) {
    const element = document.createElement('textarea')
    document.body.appendChild(element)
    element.value = value
    element.select()
    if (document.execCommand('copy')) {
        document.execCommand('copy')
        document.body.removeChild(element)
        return true
    }
    document.body.removeChild(element)
    return false
  }

  static getStyle = (function () {
    if (window.document.currentStyle) {
      return (dom, attr) => dom.currentStyle[attr]
    } else {
      // Todo: 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
      return (dom, attr) => getComputedStyle(dom, false)[attr]
    }
  })()
}