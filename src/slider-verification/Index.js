/*
 * @Author: AllenXD
 * @Date: 2023-09-17 10:58:40
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-09-17 11:30:06
 * @Description: file information
 * @Company: your company
 */
let shouldMove = false
const captcha = document.querySelector('.captcha')
const handle = document.querySelector('.handle')
const button = document.querySelector('.handle span')

button.addEventListener('mousedown', (e) => {
  shouldMove = true
})
window.addEventListener('mousemove', (e) => {
  if (shouldMove) {
    const offsetLeft = handle.getBoundingClientRect().left
    const buttonWidth = button.getBoundingClientRect().width

    captcha.style.setProperty('--moved', `${e.clientX - offsetLeft - buttonWidth / 2}px`)
  }
})
window.addEventListener('mouseup', (e) => {
  if (shouldMove) {
    const finalOffset = e.clientX - handle.getBoundingClientRect().left

    if (finalOffset >= 430 && finalOffset <= 450) {
      captcha.classList.add('passed')
    } else {
      captcha.style.setProperty('--moved', '0px')
    }
  }
  shouldMove = false
})