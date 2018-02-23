class Controls {
    constructor(player) {
        this.left = 37;
        this.up = 38;
        this.right = 39;
        this.down = 40;

        this.xVelocity = 10;
        this.yVelocity = 20;

        this.vx = 0;
        this.momentum = 2; // how much momentum when moving on x axis
        this.maxSpeed = 10;

        this.player = player;

        this.pressed = 0; // How much time the control was pressed

        this.initialize();
    }
    initialize() {
        var animation = undefined;

        document.addEventListener('keydown', function(e) {
            // var timeStamp = e.timeStamp;
            switch (e.keyCode) {
                case this.left:
                    this.player.move(this.vx, 0);
                break;

                case this.right:
                    // this.moveRight();

                    if(this.maxSpeed > this.vx) {
                        this.vx += this.momentum;
                    }


                    console.log('x velocity: ' + this.vx);
                    console.log('start running');
                    // console.log(animation);
                    this.player.move(this.vx, 0);
                    // console.log(e);
                    // START MOVING RIGHT



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
                    this.vx = 0;
                    this.player.move(this.vx, 0);

                    console.log('stop running');
                    console.log('x velocity: ' + this.vx);
                    // this.player.move(0, undefined, true);
                    console.log(animation);
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
