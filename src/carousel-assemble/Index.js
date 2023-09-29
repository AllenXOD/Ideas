/*
 * @Author: AllenXD
 * @Date: 2023-09-29 10:30:16
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-09-29 13:09:33
 * @Description: file information
 * @Company: your company
 */
import { createApp, reactive, nextTick } from '../../public/petite-vue-module.js'

const store = reactive({
  images: [
    { src: '../../public/images/1.png' },
    { src: '../../public/images/2.png' },
    { src: '../../public/images/3.png' },
    { src: '../../public/images/4.png' }
  ],
  sectcut: [
    { position: '0' },
    { position: '-112px' },
    { position: '-224px' },
    { position: '-336px' },
    { position: '-448px' }
  ]
})

const renderSectcutCarousel = async () => {
  const root = document.querySelector('.sectcut-carousel')
  root.innerHTML = store.sectcut.map((it, i) => {
    return `<div class="image-item"
      style="left: ${112 * i}px;transition-delay: ${300 * i}ms;">
      ${ store.images.map((item, index) => {
        return `<div class="image"
          style="background-image: url('${item.src}');background-position: ${it.position} center;transform: rotateX(-${90 * index}deg) translateZ(150px);"></div>`
      }).join('') }
    </div>`
  }).join('')

  let index = 0;
  let timer = null;
  let flag = true;
  const imageItem = document.querySelectorAll('.image-item')
  const anima = () => {
    for (let i = 0, length = imageItem.length; i < length; i++) {
      imageItem[i].style.transform = "rotateX( " + index * -90 + "deg )";
    }
  }
  const start = async () => {
    timer = setInterval(async () => {
      index++
      anima()
    }, 4000)
  }

  start();
  root.addEventListener('mouseenter', () => {
    clearInterval(timer)
  }, false)
  root.addEventListener('mouseleave', () => {
    index++
    anima()
    start();
  }, false)
  root.children[4].addEventListener('transitionend', () => {
    flag = true;
  }, false)
}

const renderKeyframeCarousel = async () => {
  const root = document.querySelector('.keyframe-carousel')
  root.innerHTML = store.images.map((it, i) => {
    return `<div class="image-item"
      style="background: no-repeat center url('${it.src}');animation-delay: ${4000 * i}ms;"></div>`
  }).join('')
}

nextTick(async () => {
  await renderSectcutCarousel()
  await renderKeyframeCarousel()
})

createApp({
  store
}).mount()