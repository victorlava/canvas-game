class Block {
    constructor(type) {
        // this.type = 'player';
        // this.description = description;

        this.id = registry.getLastObjectId();
        this.dimensions = new Dimension();
        this.type = 'block';

        // Registers block on the registry
        registry.register(this);
    }
    setTo(x, y) {
        this.dimensions.moveTo(x, y);
        engine.draw(this);
    }
    moveTo(x, y) {
        this.dimensions.moveTo(x, y);
        engine.clear();
        engine.draw(this);
    }
    move(x, y) {
        this.dimensions.move(x, y);
        engine.clear();
        engine.draw(this);
    }

}
