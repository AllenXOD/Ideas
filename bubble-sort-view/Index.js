/*
 * @Author: AllenXD
 * @Date: 2023-09-23 19:37:31
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-09-25 20:42:07
 * @Description: file information
 * @Company: your company
 */
import { Random } from '../public/Random.js'

const ran = new Random();
const lenOfRandomArray = ran.lenOfRandom()
const randomArray = ran.randomArray(lenOfRandomArray)
const random = document.querySelector('.random')

// Todo: 渲染随机数据
function renderElement (list) {
  return list.map((it, i) => {
    return `<div class="random-item"
      data-key="${i}"
      style="height: ${it * 4}px">
        <span>${it}</span>
      </div>`
  }).join('')
}

// Todo: 数据交换动画
const swap = async (leftIndex, rightIndex) => {
    const randomItems = random.children
    randomItems[leftIndex].classList.add('move-right')
    randomItems[rightIndex].classList.add('move-left')

    const tmp = randomArray[leftIndex]
    randomArray[leftIndex] = randomArray[rightIndex]
    randomArray[rightIndex] = tmp

    setTimeout(async () => {
      await random.insertBefore(randomItems[rightIndex], randomItems[leftIndex])
      randomItems[leftIndex].classList.remove('move-left')
      randomItems[rightIndex].classList.remove('move-right')
      leftIndex += 1
      rightIndex += 1
    }, 800)
}

// Todo: 选中数据动画
const checking = async (leftIndex, rightIndex, ms) => {
  if (rightIndex >= lenOfRandomArray) return

  random.children[leftIndex].classList.add('checking')
  random.children[rightIndex].classList.add('checking')
  await ran.sleep(ms)
  random.children[leftIndex].classList.remove('checking')
  random.children[rightIndex].classList.remove('checking')
}

// Todo: 冒泡排序
const bubbleSort = async () => {
  let leftIndex = 0
  let rightIndex = 1
  let indexOfLastSortedNum = lenOfRandomArray

  while (rightIndex < indexOfLastSortedNum) {
    // 左侧的值大于右侧的值，需要交换
    if (randomArray[leftIndex] > randomArray[rightIndex]) {
      swap(leftIndex, rightIndex)
      // console.log(`swap ${leftIndex} and ${rightIndex}`)
      await ran.sleep(800)
      if (rightIndex + 1 < lenOfRandomArray && randomArray[rightIndex] > randomArray[rightIndex + 1]) {
        checking(rightIndex, rightIndex + 1, 300)
        await ran.sleep(300)
      }
    } else {
      checking(leftIndex, rightIndex, 800)
      await ran.sleep(800)
    }
    if (rightIndex + 1 === indexOfLastSortedNum) {
      random.children[rightIndex].classList.add('done')
      leftIndex = 0
      rightIndex = 1
      indexOfLastSortedNum -= 1
      continue
    }
    leftIndex += 1
    rightIndex += 1
  }
}

const main = async  () => {
  random.innerHTML += renderElement(randomArray)

  await bubbleSort()

  random.children[0].classList.add('done')
}

void main();