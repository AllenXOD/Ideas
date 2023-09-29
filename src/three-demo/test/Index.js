/*
 * @Author: AllenXD
 * @Date: 2023-09-29 21:28:27
 * @Email: xudong@adbright.cn
 * @LastEditors: AllenXD
 * @LastEditTime: 2023-09-29 21:28:37
 * @Description: file information
 * @Company: your company
 */
// Todo: 判断浏览器是否支持 script importmap
console.info('script importmap', HTMLScriptElement.supports && HTMLScriptElement.supports('importmap'));
import * as THREE from "three";
console.log('Scene', THREE.Scene);

import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
console.info('OrbitControls', OrbitControls);
console.info('GLTFLoader', GLTFLoader);