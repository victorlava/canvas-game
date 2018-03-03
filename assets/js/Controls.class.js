/**
 * Calls a control class, which is responsible for keyboard
 * controls and players and object movement.
 *
 * @class Controls
 * @param {object} player Player object.
 */
class Controls {
    constructor(player) {

        // Key Codes
        this.left = 37;
        this.up = 38;
        this.right = 39;
        this.down = 40;

        /*
        This is for stopping continous
        propogation of the keyboard controls
        */
        this.fired = {
            top: false,
            right: false,
            left: false
        }

        this.player = player;

        this.initialize();
    }

    /**
     * Initializes all of the events/controls
     * @function initialize
     */
    initialize() {
        this.keyDown();
        this.keyUp();
    }

    /**
     * Just renaming the addEventListener function
     * @function event
     * @param {string} key Name of the event
     * @param {function} callback Function to execute when the event fires
     */
    event(key, callback) {
        document.addEventListener(key, function(e) {
            callback(e);
        });
    }

    /**
     * Responsible for what happens on global keydown event.
     * @function keyDown
     */
    keyDown() {
        this.event('keydown', function(e) {

            switch (e.keyCode) {

                case this.left:
                    if(this.fired.left == false){
                        this.fired.left = true;
                        engine.moveLeft(this.player);
                    }
                break;

                case this.up:
                if(this.fired.top == false) {
                    this.fired.top = true;
                    engine.gravitate(this.player);
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

            }
        }.bind(this));
    }

    /**
     * Responsible for what happens on global keydown event.
     * @function keyUp
     */
    keyUp() {
        this.event('keyup', function(e) {
            switch(e.keyCode) {

                case this.left:
                    this.fired.left = false;
                    engine.stop(this.player);
                break;

                case this.up:
                    this.fired.top = false;
                break;

                case this.right:
                    this.fired.right = false;
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
