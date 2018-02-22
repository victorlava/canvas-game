class Enemy extends Block {

    constructor() {
        super();
        this.attributes = new Attributes({
            health: 100,
            speed: 30,
            type: 'enemy'
        });
    }

}
