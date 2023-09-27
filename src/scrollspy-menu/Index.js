/*
 * @Author: AllenXD
 * @Date: 2023-09-15 10:52:48
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-09-27 10:38:49
 * @Description: file information
 * @Company: your company
 */
import { createApp, reactive, nextTick } from '../../public/petite-vue-module.js'

const store = reactive({
  active: 0,
  navList: [
    { icon: 'house', text: 'Home', color: '#f3218b', href: '#home' },
    { icon: 'user', text: 'Profile', color: '#2196f3', href: '#profile' },
    { icon: 'message', text: 'Messages', color: '#008a1b', href: '#messages' },
    { icon: 'camera', text: 'Photos', color: '#dc1dff', href: '#photos' },
    { icon: 'gears', text: 'Setting', color: '#d56f1d', href: '#setting' }
  ]
})

nextTick(() => {
  const section = document.querySelectorAll('section')
  const link = document.querySelectorAll('.nav-link')

  window.addEventListener('scroll', () => {
    section.forEach(el => {
      let top = window.scrollY
      let offset = el.offsetTop
      let height = el.offsetHeight
      let id = el.getAttribute('id')

      if (top >= offset && top < offset + height) {
        link.forEach((elc, index) => {
          // elc.classList.remove('active')
          // document.querySelector(`.nav-link[href*=${id}]`).classList.add('active')
          if (elc.dataset.active.indexOf(id) > 0) {
            store.active = index
          }
        })
      }
    })
  }, false)
})

createApp({
  store
}).mount()