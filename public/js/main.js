import Compositor from './compositor.js';
import { loadLevel} from './loaders.js';
import {loadBackgroundSprites} from './sprites.js';
import {createBackgroundLayer, createSpritesLayer} from './layers.js';
import { createMario } from './entities.js';
var canvas = document.getElementById('screen');
var context = canvas.getContext('2d');


Promise.all([
    loadBackgroundSprites(),
    createMario(),
    loadLevel('1-1')
]).then(([backgroundSprites, mario, level]) => {
    const comp = new Compositor();
    const backgroundLayer = createBackgroundLayer(level.background, backgroundSprites)

    comp.layers.push(backgroundLayer);
    console.log(mario.sprite);
    comp.layers.push(mario.sprite);
 
    function update(){
        comp.draw(context);
        mario.update();
        // requestAnimationFrame(update);
        setTimeout(update, 1000/30);  
    }
    update();

})
