import {loadImg} from './loaders.js';
import SpriteSheet from './SpriteSheet.js'
function loadMarioSprite() {
    return loadImg('/img/character.png').then(
        img => {
            const sprites = new SpriteSheet(img);
            sprites.define('mario_idle', 300, 0, 25, 35);
            return sprites;
        }
    )
}
function loadBackgroundSprites() {
    return loadImg('/img/Tileset.png').then(
        img => {
            const sprites = new SpriteSheet(img, 16, 16);
            sprites.defineTile('ground', 0, 0);
            sprites.defineTile('sky', 12.75, 8.5);
            return sprites;
        }
    )
}

export {loadBackgroundSprites, loadMarioSprite}