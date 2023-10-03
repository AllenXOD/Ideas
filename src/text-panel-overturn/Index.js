/*
 * @Author: AllenXD
 * @Date: 2023-10-03 14:26:39
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-10-03 14:51:41
 * @Description: file information
 * @Company: your company
 */
import { createApp, nextTick } from '/public/petite-vue-module.js'

const getDirection = function (ev, obj) {
  let w = obj.offsetWidth,
      h = obj.offsetHeight,
      x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
      y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1)),
      d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;

  return d;
};

const addClass = function ( ev, obj, state ) {
  let direction = getDirection( ev, obj ),
      class_suffix = "";

  obj.className = "item";

  switch ( direction ) {
      case 0 : class_suffix = '-top';    break;
      case 1 : class_suffix = '-right';  break;
      case 2 : class_suffix = '-bottom'; break;
      case 3 : class_suffix = '-left';   break;
  }

  obj.classList.add( state + class_suffix );
};
nextTick(() => {
  [].slice.call(document.querySelectorAll('.item'), 0).forEach(el => {
    el.addEventListener('mouseover', function (ev) {
      addClass( ev, this, 'in' );
  }, false);

  el.addEventListener('mouseout', function (ev) {
      addClass( ev, this, 'out' );
  }, false);
  })
})

createApp({
}).mount()