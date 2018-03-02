class Engine {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.sx = 0;
        this.tickCount = 0;
        this.numberOfFrames = 8;
        this.ticksPerFrame = 4;
        this.frameIndex = 0;
    }
    rectangle(x, y, width, height, color) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, height);
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    text(x, y, content) {
        this.ctx.font = "21px Arial";
        this.ctx.fillStyle = "red";
        this.ctx.fillText(content, x, y);
    }
    startSprite(sprite, x, y) {
        // console.log(sprite);
        // requestAnimationFrame(()=>this.animate());

        requestAnimationFrame(()=>this.startSprite(sprite, x, y));

            // this.sx++;
            // if(sprite.width == this.sx) { this.sx = 0; }

                this.tickCount += 1;

                if (this.tickCount > this.ticksPerFrame) {

    				this.tickCount = 0;

                    // If the current frame index is in range
                    if (this.frameIndex < this.numberOfFrames - 1) {
                        // Go to the next frame
                        this.frameIndex += 1;
                    } else {
                        this.frameIndex = 0;
                    }
                }

        // console.log('asd');

            //context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
            this.clear();
            this.ctx.drawImage( sprite, // image
                                this.frameIndex * sprite.width / this.numberOfFrames, // sx
                                0, // sy
                                sprite.width / this.numberOfFrames, // sw
                                sprite.height, // sh
                                x, // dx
                                y, // dy
                                sprite.width / this.numberOfFrames, // dw
                                sprite.height); // dh


                                console.log(this.frameIndex * sprite.width / this.numberOfFrames);
    }
    draw(object) {
        var dimensions = object.dimensions,
            type = object.type;

            switch (type) {
                case 'player':
                    // var coordinatesText = 'x: ' + dimensions.x + ', y: ' + dimensions.y;

                    // this.startSprite(assets.player.run, 0, 0);
                    this.rectangle(dimensions.x, dimensions.y, dimensions.width, dimensions.height, 'blue');
                    // engine.text(dimensions.x, dimensions.y, coordinatesText);
                break;

                case 'block':
                    this.rectangle(dimensions.x, dimensions.y, dimensions.width, dimensions.height, 'grey');
                break;
                default:

            }

        // console.log(object);

    }
}
