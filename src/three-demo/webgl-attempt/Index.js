/*
 * @Author: AllenXD
 * @Date: 2023-10-02 10:09:19
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-10-05 11:52:17
 * @Description: file information
 * @Company: your company
 */
import { logN } from '/src/log.js'
// Todo: 判断浏览器是否支持 script importmap
console.info('script importmap', HTMLScriptElement.supports && HTMLScriptElement.supports('importmap'));
import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
console.log('Scene', THREE.Scene);

// Todo: 创建3D场景对象
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(50, 50, 50) // 长宽高

// Todo: MeshBasicMaterial不受光源影响
// const material = new THREE.MeshBasicMaterial({
//   color: 0xff0000, // 红色
//   transparent: true,
//   opacity: 0.45
// })
const material = new THREE.MeshLambertMaterial({
  color: 0xff0ff0, // 红色材质
  transparent: true, //开启透明
  opacity: 0.7, //设置透明度
})
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0, 0, 0) // x轴 y轴 z轴
scene.add(mesh)
console.log('mesh %o', mesh);

lightFn()

// Todo: 创建 Camera
const canvas = {
  width: 800,
  height: 500
}
// Todo: 定义观察空间（锥体）
const camera = new THREE.PerspectiveCamera(45, canvas.width/canvas.height, 0.1, 2000) // 观察角度 视图宽高比 近观察点 远观察点
camera.position.set(200, 200, 200)
camera.lookAt(mesh.position) // 观察目标坐标指向模型

// Todo: 辅助观察坐标系
const axesHelper = new THREE.AxesHelper(150)
scene.add(axesHelper)

// Todo: 渲染
const renderer = new THREE.WebGLRenderer()
renderer.setSize(canvas.width, canvas.height)
// renderer.render(scene, camera) // 载入场景与视角
// document.body.appendChild(renderer.domElement)
document.querySelector('.webgl').appendChild(renderer.domElement)

// Todo: 控制器
const controls = new OrbitControls(camera, renderer.domElement)
const cameraLog = ois(() => {
  console.log('camera.position', camera.position);
})
controls.addEventListener('change', () => {
  cameraLog()
  // renderer.render(scene, camera)
}, false)

function ois (fun, time = 600) {
  let timer = null
  const _debounce = () => {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      fun()
    }, time)
  }
  return _debounce
}

async function lightFn () {
  // Todo: 点光源
  const light = new THREE.PointLight(0xffffff, 1, 0, 0)
  light.position.set(100, 50, 50);
  // scene.add(light)
  // Todo: 可视化点光源
  const lightHelper = new THREE.PointLightHelper(light, 5)
  scene.add(lightHelper)

  // Todo: 环境光
  const ambient = new THREE.AmbientLight(0xffffff, 0.85)
  // scene.add(ambient)

  // Todo: 平行光 - 两点一线
  const directional = new THREE.DirectionalLight(0xffffff, 1)
  directional.position.set(80, 90, 50) // 光源起始坐标
  directional.target = mesh // 光源指向模型对象，不设置默认坐标原点
  scene.add(directional)
  // Todo: 可视化平行光
  const directionalHelper = new THREE.DirectionalLightHelper(directional, 5, 0xff0000)
  scene.add(directionalHelper)
}

(() => {
  // let index = 0
  const clock = new THREE.Clock()
  function renderAnimation () {
    // if (index > 500) return
    // index++
    // console.log('执行次数 %n', index);
    const spt = clock.getDelta() * 1000 // 毫秒
    logN.info('渲染数据', 'requestAnimationFrame', {
      'FPS': 1000/spt,
      '时间间隔': spt
    })
    mesh.rotateX(0.1)
    renderer.render(scene, camera)
    // Todo: 理论上可以达到每秒执行60次
    requestAnimationFrame(renderAnimation)
  }
  renderAnimation()
})();
