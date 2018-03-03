class Controls {
    constructor(player) {
        // Key Codes
        this.left = 37;
        this.up = 38;
        this.right = 39;
        this.down = 40;

        this.fired = {
            right: false,
            left: false
        }

        this.player = player;

        this.pressed = 0; // How much time the control was pressed

        this.initialize();
    }
    initialize() {
        var animation = undefined,
            movingRight = false;

        document.addEventListener('keydown', function(e) {

            switch (e.keyCode) {
                case this.left:
                    if(this.fired.left == false){
                        this.fired.left = true;
                        engine.moveLeft(this.player);
                    }
                break;

                case this.right:
                    if(this.fired.right == false){
                        this.fired.right = true;
                        engine.moveRight(this.player);
                    }
                break;

                case this.down:
                    if(this.player.attr.get('crouched') == false) {
                        engine.crouch(this.player);
                    }
                break;

                case this.up:
                    engine.gravitate(this.player);
                break;
                default:

            }
        }.bind(this));

        document.addEventListener('keyup', function(e) {
            switch(e.keyCode) {
                case this.right:
                    this.fired.right = false;
                    engine.stop(this.player);
                break;
                case this.left:
                    this.fired.left = false;
                    engine.stop(this.player);
                break;
                case this.down:
                    if(this.player.attr.get('crouched') == true) {
                        engine.standUp(this.player);
                    }
                break;
            }
        }.bind(this));
    }
}
