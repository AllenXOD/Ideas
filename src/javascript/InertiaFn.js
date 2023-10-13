/*
 * @Author: AllenXD
 * @Date: 2023-10-13 10:56:09
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-10-13 11:03:12
 * @Description: file information
 * @Company: your company
 */
function createCopyText () {
  if (navigator.clipboard) {
    return (text) => {
      navigator.clipboard.writeText(text)
    }
  } else {
    return (text) => {
      const input = document.createElement('input')
      input.setAttribute('value', text)
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
    }
  }
}

const copyText = createCopyText()