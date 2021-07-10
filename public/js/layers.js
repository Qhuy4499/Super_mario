function drawBackground(background, context, sprites) {
    let [x1, y1, x2, y2] = background.ranges;
    for (let i = x1; i < y1; i++) {
        for (let j = x2; j < y2; j++) {
            sprites.drawTile(background.tile, context, i, j)
        }
    }
}

function createBackgroundLayer(background, sprites) {
    const buffer = document.createElement('canvas');
    buffer.width = 256 * 2;
    buffer.height = 256 * 2;

    background.forEach(element => {
        drawBackground(element, buffer.getContext('2d'), sprites);

    });
    return function drawBackgroundLayer(context) {
        context.drawImage(buffer, 0, 0);
    }
}
function createSpritesLayer(sprites, pos) {
    return function drawSprites(context) {
        sprites.draw('mario_idle', context, pos.x, pos.y);
    }

}

export {createBackgroundLayer, createSpritesLayer}