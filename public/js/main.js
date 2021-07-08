import SpriteSheet from './SpriteSheet.js'
function loadImg(url){
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', ()=>{
            resolve(image);
        });
        image.src = url
    });
}

var canvas = document.getElementById('screen')
var context = canvas.getContext('2d')
context.fillStyle = '#000';
context.fillRect(0,0,175,175);

loadImg('/img/Tileset.png').then(
    img => {
        const sprites = new SpriteSheet(img, 16, 16);
        console.log(sprites.image);
        sprites.define('ground', 0, 0);
        sprites.draw('ground', context, 45 , 62);
    }
)