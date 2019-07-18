// 开始类
import {Pencil} from "./Pencil";
import {Sprite} from "../base/Sprite";

export class DownPencil  extends  Pencil{
    constructor() {
        const  img = Sprite.getImage('pencilDown');
        super(img);
    }

    draw(top) {
        super.draw(top);
    }

}