class Player extends Block {

    constructor() {
        super();
        this.type = 'player';
        this.attr = new Attributes({
            health: 100,
            speed: 50
        });
    }
    crouchDown() {
        this.dimensions.setSize(this.dimensions.width, this.dimensions.height/2);
        this.dimensions.move(0, this.dimensions.height);
        engine.clear();
        engine.draw(this);
        this.attr.set('crouched', true);
    }
    crouchUp() {
        this.dimensions.setSize(this.dimensions.width, this.dimensions.height*2);
        this.dimensions.move(0, -this.dimensions.height/2);
        engine.clear();
        engine.draw(this);
        this.attr.set('crouched', false);
    }

}
