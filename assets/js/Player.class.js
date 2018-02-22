class Player extends Block {

    constructor() {
        super();
        this.type = 'player';
        this.attributes = new Attributes({
            health: 100,
            speed: 50
        });

    }

}
