class Player extends Block {

    constructor() {
        super();
        this.type = 'player';
        this.attr = new Attributes({
            health: 100,
            speed: 50
        });
    }

}
