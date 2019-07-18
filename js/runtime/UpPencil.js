// 开始类
import {Pencil} from "./Pencil";
import {Sprite} from "../base/Sprite";

export class UpPencil  extends  Pencil{
  constructor() {
      const  img = Sprite.getImage('pencilUp');
      super(img);
  }

  draw(top) {
    super.draw(top);
  }

}