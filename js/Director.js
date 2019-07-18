import { DataStore } from './base/DataStore.js'
import {Land} from './runtime/Land.js'


1// 开始类
export class Director {

  constructor() {
    this.dataStore = DataStore.getInstance();
    this.speed = 2;
  }

  static getInstance() {
    if(!Director.instance) {
      Director.instance = new Director();
    }
    return Director.instance;
  }

  run(){
    const backgroundSprie = this.dataStore.get('background');
    backgroundSprie.draw();

    // 如何实现位置随机的水管
    const  upPencil = this.dataStore.get('pencilUp');
    upPencil.draw(-40);

    const  downPencil = this.dataStore.get('pencilDown');
    const  canvas = this.dataStore.canvas;
    let downTop = canvas.height / 5 + upPencil.height + (-40);
    downPencil.draw(downTop);

    const land = this.dataStore.get('land');
    land.draw();

    //  如何实现动画无限渲染
    let timer = requestAnimationFrame(() => this.run());
  }

}