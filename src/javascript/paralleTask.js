/*
 * @Author: AllenXD
 * @Date: 2023-10-13 11:06:08
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-10-13 11:12:25
 * @Description: file information
 * @Company: your company
 */
// Todo: 并发执行任务
function paralleTask (tasks, count=2) {
  return new Promise(resolve => {
    if (tasks.length === 0) {
      resolve()
      return
    }
    let nextIndex = 0
    let finishCout = 0
    function _run () {
      const task = tasks[nextIndex]
      nextIndex++
      task().then(() => {
        finishCout++
        if (nextIndex < tasks.length) {
          _run()
        } else if (finishCout === tasks.length) {
          resolve()
        }
      })
    }

    for (let i = 0; i < count && i < tasks.length; i++) {
      _run()
    }
  })
}