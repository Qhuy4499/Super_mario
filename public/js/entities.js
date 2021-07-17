import {loadMarioSprite } from './sprites.js';
import Entity from './Entity.js';
import {createSpritesLayer} from './layers.js';
function createMario(){
    return loadMarioSprite()
    .then(marioSprite => {
        const mario = new Entity();
        mario.pos.set(20, 150);
        mario.velocity.set(3, -5);
        const gravity = 0.5
        mario.sprite = createSpritesLayer(marioSprite, mario.pos);  
        mario.update = function () {
            this.pos.x += this.velocity.x;
            this.pos.y += this.velocity.y;
            this.velocity.y += gravity;
        };
        return mario;
    });
   
}

export {createMario};