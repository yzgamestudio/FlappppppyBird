// 资源文件加载器 确认canvas图片资源加载后才进行渲染

import {Resources} from './Resources.js'

export class ResourceLoader {

  constructor() {
    this.map = new Map(Resources);
    for (let [key, value] of this.map) {
      const image = wx.createImage();
      // console.log('赋值src前');
      image.src = value;
      this.map.set(key, image);
    }

  }

  onLoaded(callback) {
    let loadedCount = 0;
    for(let value of this.map.values()){
      value.onload = ()=> {
        loadedCount++;
        if(loadedCount >= this.map.size){
          callback(this.map);
        }
      }
    }
  }

  static create() {
    return new ResourceLoader();
  }

}