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


}
