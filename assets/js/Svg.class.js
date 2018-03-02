class Svg {

    constructor(ctx) {
        this.ctx = ctx;
        this.assetsPath = 'assets/img/';
        this.assets = false;

        this.initialize();
    }

    initialize() {
        this.assets = {
            player: {
                run: this.load('character/run.png')
            }
        };
    }

    load(path) {
        var img = new Image();
            img.src = this.assetsPath + path;

        return img;
    }

}
