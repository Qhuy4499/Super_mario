import Vec2 from "./math.js";
class Entity {
    constructor() {
        this.pos = new Vec2(0, 0);
        this.velocity = new Vec2(0, 0);
    }
};

export default Entity;