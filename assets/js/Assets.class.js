class Assets {

    constructor(ctx) {
        this.assetsPath = 'assets/img/';
        this.assets = false;

        this.initialize();
    }

    initialize() {
        this.player = {
                run: this.load('character/run.png'),
                jump: this.load('character/jump.png'),
                landing: this.load('character/landing.png')
            }

    }

    load(path) {
        var img = new Image();
            img.src = this.assetsPath + path;
        return img;
    }

}
