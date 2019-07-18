import { ResourceLoader } from '/js/base/ResourceLoader.js'
import { Director } from '/js/Director.js'
import { DataStore } from '/js/base/DataStore.js'
import {BackGround} from '/js/runtime/BackGround.js'
import { Land } from '/js/runtime/Land.js'
import { UpPencil } from '/js/runtime/UpPencil.js'
import {DownPencil} from "./js/runtime/DownPencil";




// 开始类
export class Main {
  constructor(){
    this.canvas = wx.createCanvas();
    this.context = this.canvas.getContext('2d');
    this.dataStore = DataStore.getInstance();
    const loader = ResourceLoader.create();
    loader.onLoaded(map => this.onResourceFirstLoaded(map));
  }

  onResourceFirstLoaded(map) {
    this.dataStore.ctx = this.context;
    this.dataStore.res = map;
    this.dataStore.canvas = this.canvas;
    this.init();
  }

  init() {
    console.log('resource is');
    console.log(this.dataStore.res);
    this.dataStore.put('background', new BackGround);
    this.dataStore.put('land', new Land);
    this.dataStore.put('pencilUp',new UpPencil);
    this.dataStore.put('pencilDown', new DownPencil);
    Director.getInstance().run();
  }

}