/*
 * @Author: AllenXD
 * @Date: 2023-10-12 11:36:25
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-10-12 11:50:51
 * @Description: file information
 * @Company: your company
 */
function arrange (name) {
  const taske = []
  taske.push(() => {
    console.log(`${name} is notified`);
  })

  function doFn (name) {
    taske.push(() => {
      console.log(`Start to ${name}`);
    })
    return this
  }
  function wait(sec) {
    console.log(`wait ${sec}s`);
    taske.push(() => new Promise(resolve => {
      setTimeout(resolve, sec * 1000)
    }))
    return this
  }
  function waitFirst(sec) {
    console.log(`waitFirst ${sec}s`);
    taske.unshift(() => new Promise(resolve => {
      setTimeout(resolve, sec * 1000)
    }))
    return this
  }
  async function execute () {
    for (const t of taske) {
      await t()
    }
    return this
  }

  return {
    do: doFn,
    wait,
    waitFirst,
    execute
  }
}

arrange('William').execute()
// > William is notified

arrange('William').do('commit').execute()
// > William is notified
// > Start to commit

arrange('William').wait(5).do('commit').execute()
// > William is notified
// wait 5s
// > Start to commit

arrange('William').waitFirst(5).do('push').execute()
// wait 5s
// > William is notified
// > Start to push