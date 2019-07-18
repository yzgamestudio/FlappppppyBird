import {Sprite} from '../base/Sprite.js'
import {DataStore} from '../base/DataStore.js'
// import {Director} from "../Director.js"


// 开始类
export class Land  extends Sprite{
  constructor() {
    const image = Sprite.getImage('land');
    const canvas = DataStore.getInstance().canvas;
    console.log('Land width');
    super(image,
      0, 0, image.width, image.height,
      0, canvas.height - image.height, image.width, image.height);
    
    this.landX = 0;
    this.landSpeed = 2;
  }

  draw() {
    this.landX = this.landX + this.landSpeed;
    const canvas = DataStore.getInstance().canvas;

    // 如何实现无限滚动的地板
    if (this.landX > (this.img.width - canvas.width)){
      this.landX = 0;
    }
    super.draw(this.img,
              this.srcX,
              this.srcY,
              this.srcW,
              this.srcH,
              -this.landX,
              this.y,
              this.width,
              this.height);
  }

}