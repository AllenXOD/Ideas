/*
 * @Author: AllenXD
 * @Date: 2023-10-05 11:14:02
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-10-05 11:43:40
 * @Description: file information
 * @Company: your company
 */
const types = ['primary', 'info', 'danger', 'success', 'warning', 'error']
const textStyle = {
  bgColor: '#35495E',
  textColor: '#FFFFFF',
  color: '#303133'
}

const colors = {
  'primary': '#0099CC',
  'info': '#909399',
  'success': '#19BE6B',
  'warning': '#E6A23C',
  'error': '#FF0000',
  'danger': '#6F42C1'
}

const getColor = (type) => colors[type]

const createLog = (fn) => {
  return types.reduce((logs, type) => {
    logs[type] = (...args) => fn(type, ...args)
    return logs
  }, {})
}

const nsLog = (type, ns, msg, ...args) => {
  const color = getColor(type)

  console.log(
    `%c ${type} Log %c ${ns} %c ${msg} ${args.length ? '%o' : ''} `,
    `background: ${color}; padding: 1px; border-radius: 3px 0 0 3px; color: ${textStyle.textColor}`,
    `background: ${textStyle.bgColor}; padding: 1px; border-radius: 0 3px 3px 0; color: ${textStyle.textColor}`,
    `color: ${textStyle.color};`,
    ...args
  )
}

export const logN = createLog(nsLog)

const bLog = (type, msg, ...args) => {
  const color = getColor(type)
  console.log(
    `%c ${msg} `,
    `background: ${color}; padding: 1px; border-radius: 3px; color: #FFFFCC`,
    ...args
  )
}

export const logB = createLog(bLog)

const sLog = (type, msg, ...args) => {
  const color = getColor(type);
  console.log(
    `%c ${msg} ${args.length ? '%o' : ''}`,
    `color: ${color};`,
    ...args
  );
};

export const logS = createLog(sLog);
