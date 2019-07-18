import {Sprite} from "../base/Sprite.js";
import {Director} from "../Director.js";
import {DataStore} from "../base/DataStore";


export class Pencil  extends  Sprite {
    constructor(img) {
        const canvas = DataStore.getInstance().canvas;
        super(img,0, 0,img.width, img.height,
            canvas.width - img.width, 0, img.width, img.height);
    }


    draw(top) {
      const canvas = DataStore.getInstance().canvas;

        this.x = this.x - Director.getInstance().speed;
        if(this.x < -70) {
          this.x = canvas.width - this.width;
        }
        super.draw(this.img,0, 0, this.width, this.height,
            this.x, top, this.width, this.height);

    }

}