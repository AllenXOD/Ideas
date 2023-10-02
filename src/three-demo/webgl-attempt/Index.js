/*
 * @Author: AllenXD
 * @Date: 2023-10-02 10:09:19
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-10-02 10:58:23
 * @Description: file information
 * @Company: your company
 */
// Todo: 判断浏览器是否支持 script importmap
console.info('script importmap', HTMLScriptElement.supports && HTMLScriptElement.supports('importmap'));
import * as THREE from "three";
console.log('Scene', THREE.Scene);
// Todo: 创建3D场景对象
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(100, 100, 100) // 长宽高
const meterial = new THREE.MeshBasicMaterial({
  color: 0xff0000, // 红色
})
const mesh = new THREE.Mesh(geometry, meterial)
mesh.position.set(0, 10, 0) // x轴 y轴 z轴
scene.add(mesh)
console.log('mesh %o', mesh);

// Todo: 创建 Camera
const canvas = {
  width: 800,
  height: 500
}
// Todo: 定义观察空间（锥体）
const camera = new THREE.PerspectiveCamera(45, canvas.width/canvas.height, 0.1, 2000) // 观察角度 视图宽高比 近观察点 远观察点
camera.position.set(200, 200, 200)
camera.lookAt(mesh.position) // 观察目标坐标指向模型


// Todo: 渲染
const renderer = new THREE.WebGL1Renderer()
renderer.setSize(canvas.width, canvas.height)
renderer.render(scene, camera) // 载入场景与视角
// document.body.appendChild(renderer.domElement)
document.querySelector('.webgl').appendChild(renderer.domElement)
