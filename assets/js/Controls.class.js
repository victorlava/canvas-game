class Controls {
    constructor(player) {
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
            // var timeStamp = e.timeStamp;
            switch (e.keyCode) {
                case this.left:
                    if(this.fired.left == false){
                        this.fired.left = true;
                        this.player.moveLeft();
                    }
                break;

                case this.right:
                    if(this.fired.right == false){
                        this.fired.right = true;
                        this.player.moveRight();
                    }
                break;

                case this.down:
                    if(this.player.attr.get('crouched') == false) {
                        this.doCrouchDown();
                        // this.player.attr.set('crouched', true);
                    }
                break;

                case this.up:
                    this.player.gravitate();
                    // this.timePressed(e);
                break;
                default:

            }
        }.bind(this));

        document.addEventListener('keyup', function(e) {
            switch(e.keyCode) {
                case this.right:
                    this.player.stop();
                    this.fired.right = false;
                break;
                case this.left:
                    this.player.stop();
                    this.fired.left = false;
                break;
                case this.down:
                    if(this.player.attr.get('crouched') == true) {
                        this.doCrouchUp();
                        // this.player.attr.set('crouched', false);
                    }
                break;
            }
        }.bind(this));
    }
    moveLeft() {
        this.player.move(-1 * this.xVelocity, 0);
    }
    moveRight() {
        this.player.move(1 * this.xVelocity, 0);
    }
    doCrouchDown() {
        this.player.crouchDown();
    }
    doCrouchUp() {
        this.player.crouchUp();
    }
    timePressed(pressed, timestamp) {
        this.pressed = timestamp - pressed;
    }
}
