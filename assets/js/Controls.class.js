class Controls {
    constructor(player) {
        this.left = 37;
        this.up = 38;
        this.right = 39;
        this.down = 40;

        this.xVelocity = 10;
        this.yVelocity = 20;

        this.player = player;

        this.pressed = 0; // How much time the control was pressed

        this.initialize();
    }
    initialize() {
        var crouched = false;

        document.addEventListener('keydown', function(e) {
            // var timeStamp = e.timeStamp;
            switch (e.keyCode) {
                case this.left:
                    this.moveLeft();
                break;

                case this.right:
                    this.moveRight();
                break;

                case this.down:
                    if(this.player.attr.get('crouched') == false) {
                        this.doCrouchDown();
                        // this.player.attr.set('crouched', true);
                    }
                break;

                case this.up:
                    this.doJump();
                    // this.timePressed(e);
                break;
                default:

            }
        }.bind(this));

        document.addEventListener('keyup', function(e) {
            switch(e.keyCode) {
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
    doJump() {
        this.player.gravitate();
    }
    timePressed(pressed, timestamp) {
        this.pressed = timestamp - pressed;
    }
}
