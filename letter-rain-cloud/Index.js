/*
 * @Author: AllenXD
 * @Date: 2023-09-14 11:18:23
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-09-14 11:35:52
 * @Description: file information
 * @Company: your company
 */
function main () {
  setInterval(() => {
    rain()
  }, 20)
}

void main();

const rain = () => {
  const cloud = document.querySelector('.cloud')
  const e = document.createElement('div')
  e.classList.add('letter')
  cloud.appendChild(e)
  e.innerText = randomLetter()

  let letterLeft = Math.floor(Math.random() * 310)
  let letterSize = Math.random() * 1.5
  let duration = Math.random() * 1
  e.style.left = letterLeft + 'px'
  e.style.fontSize = 0.5 + letterSize + 'em'
  e.style.animationDirection = 1 + duration + 's'

  setTimeout(() => {
    cloud.removeChild(e)
  }, 2000)
}

function randomLetter () {
  const letter = 'qwertyuiopasdfghjklzxcvbnm0123456789';
  return letter[Math.floor(Math.random() * letter.length)]
}
