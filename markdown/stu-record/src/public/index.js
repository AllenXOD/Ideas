/*
 * @Author: AllenXD
 * @Date: 2023-10-09 12:42:54
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-10-09 13:17:29
 * @Description: file information
 * @Company: your company
 */
hljs.initCopyButtonOnLoad();
let e = document.querySelectorAll("pre code");
let e_len = e.length;
for (let i = 0; i < e_len; i++) {
  e[i].innerHTML = "<ul><li>" + e[i].innerHTML.replace(/\n/g, "\n</li><li>") + "\n</li></ul>";
}
