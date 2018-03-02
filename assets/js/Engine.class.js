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
    drawSprite(sprite) {
        // console.log(sprite);
        // requestAnimationFrame(()=>this.animate());

        requestAnimationFrame(()=>this.drawSprite(sprite));

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
                                0, // dx
                                0, // dy
                                sprite.width / this.numberOfFrames, // dw
                                sprite.height); // dh


                                console.log(this.frameIndex * sprite.width / this.numberOfFrames);
    }
    draw(object) {
        var dimensions = object.dimensions,
            type = object.type;

            switch (type) {
                case 'player':
                    this.rectangle(dimensions.x, dimensions.y, dimensions.width, dimensions.height, 'blue');
                break;

                case 'block':
                    this.rectangle(dimensions.x, dimensions.y, dimensions.width, dimensions.height, 'grey');
                break;
                default:

            }

        // console.log(object);

    }
}
