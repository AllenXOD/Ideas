/*
 * @Author: AllenXD
 * @Date: 2023-10-07 09:48:28
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-10-07 10:12:41
 * @Description: file information
 * @Company: your company
 */
const DEFAULT_CONFIG = {
  id: 'id',
  pid: 'parentId',
  children: 'children'
}
const getConfig = config => Object.assign({}, DEFAULT_CONFIG, config)

class UseArray {
  static forNode (tree, callback, config) {
    const { children } = getConfig(config)
    const list = [...tree]

    for (const node of list) {
      if (callback(node)) return node
      node[children] && list.push(...node[children])
    }

    return null
  }

  static listToTree (list, config) {
    const conf = getConfig(config);
    const nodeMap = new Map();
    const result = [];

    const { pid, id, children } = conf;
    for (const node of list) {
      node[children] = node[children] || [];
      nodeMap.set(node[id], node);
    }
    for (const node of list) {
      const parent = nodeMap.get(node[pid]);
      (parent ? parent.children : result).push(node);
    }
    return result;
  }

  static treeToList (tree, config) {
    const conf = getConfig(config);
    const { children } = conf;
    const result = [...tree];

    for (let i = 0; i < result.length; i++) {
      if (!result[i][children]) continue;
      result.splice(i + 1, 0, ...result[i][children]);
    }

    return result;
  }
}

// Todo: 测试
(() => {
  UseArray.forNode([
    {children: [{ name: '1-1' }], name: '1'},
    {children: [{ name: '2-1' }, { name: '2-3' }], name: '2'},
    {children: [{ name: '3-1', children: [{ name: '3-1-1' }] }], name: '3'}
  ], (vl) => {
    console.log(vl);
  })

  const treeData = UseArray.listToTree([
    { id: 1, parentId: 0, name: '1' },
    { id: 11, parentId: 1, name: '1-1' },
    { id: 2, parentId: 0, name: '2' },
    { id: 21, parentId: 2, name: '2-1' },
    { id: 22, parentId: 2, name: '2-2' },
    { id: 3, parentId: 0, name: '3' },
    { id: 31, parentId: 3, name: '3-1' },
    { id: 311, parentId: 31, name: '3-1-1' },
  ])
  console.log(JSON.stringify(treeData));

  const listData = UseArray.treeToList([
    {"id":1,"parentId":0,"name":"1","children":[{"id":11,"parentId":1,"name":"1-1","children":[]}]},
    {"id":2,"parentId":0,"name":"2","children":[{"id":21,"parentId":2,"name":"2-1","children":[]},{"id":22,"parentId":2,"name":"2-2","children":[]}]},
    {"id":3,"parentId":0,"name":"3","children":[{"id":31,"parentId":3,"name":"3-1","children":[{"id":311,"parentId":31,"name":"3-1-1","children":[]}]}]}
  ])
  console.log(listData);
})();