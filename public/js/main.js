import Compositor from './compositor.js';
import { loadLevel} from './loaders.js';
import {loadBackgroundSprites, loadMarioSprite} from './sprites.js';
import {createBackgroundLayer, createSpritesLayer} from './layers.js'

var canvas = document.getElementById('screen');
var context = canvas.getContext('2d');


Promise.all([
    loadBackgroundSprites(),
    loadMarioSprite(),
    loadLevel('1-1')
]).then(([sprites, mario, level]) => {
    const comp = new Compositor();
    const backgroundLayer = createBackgroundLayer(level.background, sprites)
    const pos = {
        x: 20,
        y: 20,
    };
    const mario_sprite = createSpritesLayer(mario, pos)
    comp.layers.push(backgroundLayer);
    comp.layers.push(mario_sprite);
 
    function update(){
        comp.draw(context);
        pos.x += 1;
        pos.y += 2;
        requestAnimationFrame(update);  
    }
    update();

})
