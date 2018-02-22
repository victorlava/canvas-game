class Controls {
    constructor(player) {
        this.left = 37;
        this.up = 38;
        this.right = 39;
        this.down = 40;

        this.mvAmplify = 2; // movement amplifier

        this.player = player;
        this.initialize();
    }
    initialize() {
        document.addEventListener('keydown', function(e) {
            switch (e.keyCode) {
                case this.left:
                    this.player.move(-1 * this.mvAmplify, 0);
                break;

                case this.right:
                    this.player.move(1 * this.mvAmplify, 0);
                break;

                case this.down:
                    this.player.move(0, 1 * this.mvAmplify);
                break;

                case this.up:
                    this.player.move(0, -1 * this.mvAmplify);
                break;
                default:

            }
        }.bind(this));
    }
}
