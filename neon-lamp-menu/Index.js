import { createApp, reactive, nextTick } from '../public/petite-vue-module.js'

const store = reactive({
  navList: [
    { text: 'Home', color: '#00ade1' },
    { text: 'About', color: '#ff6493' },
    { text: 'Services', color: '#ffdd1c' },
    { text: 'Team', color: '#00dc82' },
    { text: 'Contact', color: '#dc00d4' }
  ]
})

nextTick(() => {
  document.querySelectorAll('.nav-item-link').forEach(el => {
    el.innerHTML = el.innerText.split('').map(it => {
      return `<span class="nav-link-letter">${it}</span>`
    }).join('');
    document.querySelectorAll('.nav-link-letter').forEach(els => {
      let dus = Math.random() * 5
      els.style.animationDuration = 0.25+dus+'s'
      els.style.animationDelay = 0.25+dus+'s'
    })
  })
})

createApp({
  store
}).mount()
