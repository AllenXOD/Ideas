/*
 * @Author: AllenXD
 * @Date: 2023-09-18 11:28:37
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-09-19 10:54:17
 * @Description: file information
 * @Company: your company
 */

import { createApp, reactive } from '../public/petite-vue-module.js'

const store = reactive({
  theme: 0,
  changeTheme: () => {
    store.theme = store.theme === 0 ? 1 : 0
  },
  mounted: ($el) => {
    document.querySelector(':root').style.setProperty('--button-color', $el.dataset.color)
  }
})

createApp({
  store
}).mount()