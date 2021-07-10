class Compositor {
    constructor() {
        this.layers = [];
    }

    draw(context) {
        this.layers.forEach(layers => {
            layers(context);
        })
    }
}

export default Compositor;