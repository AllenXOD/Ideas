/*
 * @Author: AllenXD
 * @Date: 2023-10-16 23:35:03
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-10-16 23:45:18
 * @Description: file information
 * @Company: your company
 */
const permissionMap = {
  CREATE: 0b1, // 00001 ==> 1
  READ: 0b10, // 00010 == > 2
  UPDATE: 0b100, // 00100 ==> 4
  DELETE: 0b1000, // 01000 ==> 8
}

// todo: 获取权限
function getPermission(permission = 'CREATE_READ_UPDATE') {
  return permission.split('_').reduce((pre, cur) => pre | permissionMap[cur], 0)
}
// todo: 切换权限
function cutPermission(permission = 'CREATE_READ_UPDATE', cut = 'READ') {
  return getPermission(permission) ^ permissionMap[cut]
}

export { getPermission, cutPermission }
