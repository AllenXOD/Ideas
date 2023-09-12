/*
 * @Author: AllenXD
 * @Date: 2023-09-12 10:54:44
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-09-12 22:44:49
 * @Description: file information
 * @Company: your company
 */
const navItemList = [
  { icon: 'tachometer', text: 'Dashboard' },
  { icon: 'address-book', text: 'Address Book' },
  { icon: 'clone', text: 'Components' },
  { icon: 'calendar-alt', text: 'Calendar' },
  { icon: 'chart-bar', text: 'Charts' },
  { icon: 'copy', text: 'Documents' }
]

async function main () {
  await createNavItemEL();
  let timer = null
  window.addEventListener('load', (e) => {
    timer = setTimeout(async () => {
      await animation();
    }, 10)
  })
  window.addEventListener('resize', (e) => {
    document.querySelector('.navbar-collapse').style.height = '0px'
    document.querySelector('.navbar-collapse').classList.remove('show')
    if (timer) clearTimeout(timer)
    timer = setTimeout(async () => {
      await animation();
    }, 300)
  })
  document.querySelector('.navbar-toggler').addEventListener('click', (e) => {
    if (document.querySelector('.navbar-collapse').classList.contains('show')) {
      document.querySelector('.navbar-collapse').style.height = '0px'
      setTimeout(() => {
        document.querySelector('.navbar-collapse').classList.remove('show')
      }, 500)
    } else {
      document.querySelector('.navbar-collapse').classList.add('show')
      Array.prototype.slice.call(document.querySelector('.navbar-collapse').childNodes).forEach((child) => {
        if (child.nodeType === 1) {
          document.querySelector('.navbar-collapse').style.height = `${child.clientHeight || 0}px`
        }
      })
    }
    if (timer) clearTimeout(timer)
    timer = setTimeout(async () => {
      await animation();
    }, 300)
  })
}

main()

async function animation () {
  const tabsNewAnim = document.querySelector('#navbarSupportedContent')
  let activeItemNewAnim = document.querySelector('.active')
  const horiSelectorAnim = document.querySelector('.hori-selector')


  setElStyle(horiSelectorAnim, {
    top: activeItemNewAnim.offsetTop,
    left: activeItemNewAnim.offsetLeft,
    height: activeItemNewAnim.offsetHeight,
    width: activeItemNewAnim.offsetWidth,
  });

  tabsNewAnim.addEventListener('click', (e) => {
    e = e || window.event;
    e.stopPropagation();
    const target = e.target || e.srcElement;
    if (target.className !== 'nav-link') return
    activeItemNewAnim = document.querySelector('.active')
    activeItemNewAnim.classList.remove('active')
    target.parentElement.classList.add('active')
    setElStyle(horiSelectorAnim, {
      top: target.parentElement.offsetTop,
      left: target.parentElement.offsetLeft,
      height: target.parentElement.offsetHeight,
      width: target.parentElement.offsetWidth,
    });
  }, false)
}

async function setElStyle (el, obj) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      el.style[key] = value + 'px'
    }
  }
}

async function createNavItemEL () {
  const parentEL = document.querySelector('.navbar-nav')
  const childListEL = navItemList.map((v, i) => {
    return `<li class="nav-item${i === 1 ? ' active' : ''}">
      <a class="nav-link" href="javascript:void(0);"><i class="fas fa-${v.icon}"></i>${v.text}</a>
    </li>`
  })

  parentEL.innerHTML += childListEL.join('')
}
