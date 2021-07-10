function loadImg(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url
    });
}
async function loadLevel(name){
    const response = await fetch(`/levels/${name}.json`)
    return response.json();
}
export {loadImg, loadLevel}
