/**
 * Calls a canvas class, which is responsible for drawing basic shapes, elements and sprites.
 * @class Canvas
 * @param {object} canvas Canvas object
 * @param {object} ctx Context of the canvas
 */
class Canvas {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;

        this.sx = 0;
        this.tickCount = 0;
        this.numberOfFrames = 8;
        this.ticksPerFrame = 4;
        this.frameIndex = 0;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    rectangle(x, y, width, height, color) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, height);
        this.ctx.fillStyle = color;
        this.ctx.fill();

    }

    text(x, y, content) {
        this.ctx.font = "19px Arial";
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

    draw(object, debugging = false) { // Why we need object here?

        var object, dimensions, type;
        debugging = true; // Change to false on production

        // Loop through objects from registry
        for (var i = 0; i < registry.registry.length; i++) {

          object = registry.registry[i];
          dimensions = object.dimensions,
          type = object.type;

          if(debugging) {
              debug.coordinates(object);
          }

          switch (type) {
              case 'player':
                this.rectangle( dimensions.x,
                                dimensions.y,
                                dimensions.width,
                                dimensions.height,
                                'blue');
              break;

              case 'block':
                this.rectangle( dimensions.x,
                                dimensions.y,
                                dimensions.width,
                                dimensions.height,
                                'grey');
              break;

          }

        }
    } // loop end
}
