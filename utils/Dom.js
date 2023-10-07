/*
 * @Author: AllenXD
 * @Date: 2023-10-07 09:58:10
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-10-07 10:02:07
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
}