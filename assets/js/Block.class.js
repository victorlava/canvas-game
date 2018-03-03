class Block {
    constructor(type) {
        // this.type = 'player';
        // this.description = description;

        this.id = registry.getLastObjectId();
        this.dimensions = new Dimension();
        this.type = 'block';
        this.gravity = .2;
        this.vx = 0;
        this.vy = -7;
        this.momentum = 0.15; // how much momentum when moving on x axis
        this.maxSpeed = 5;

        this.animations = {
            right: false,
            left: false,
            stop: false
        }


        // Registers block on the registry
        registry.register(this);
    }
    setTo(x, y) {
        this.dimensions.moveTo(x, y);
        engine.draw(this);
    }
    moveTo(x, y) {
        this.dimensions.moveTo(x, y);
        engine.clear();
        engine.draw(this);
    }
    stop() {

        this.animations.stop = requestAnimationFrame(()=>this.stop());

        if(this.vx > 0) { // Moving right
            this.vx -= this.momentum * 2;
            if(this.vx < 0) {
                cancelAnimationFrame(this.animations.right);
                cancelAnimationFrame(this.animations.stop);
                this.animations.stop = false;
                this.animations.right = false;
                this.vx = 0;
            }
        }
        else if(this.vx < 0) { // Moving left
            this.vx -= -this.momentum * 2;
            if(this.vx > 0) {
                cancelAnimationFrame(this.animations.left);
                cancelAnimationFrame(this.animations.stop);
                this.animations.stop = false;
                this.animations.left = false;
                this.vx = 0;
            }
        }



    }
    moveLeft() {

        this.animations.left = requestAnimationFrame(()=>this.moveLeft());

        // console.log(-this.maxSpeed);
        if(-this.maxSpeed < this.vx) {
            this.vx -= this.momentum;
            console.log(this.vx);
        }

        this.dimensions.move(this.vx, 0);
        engine.clear();
        engine.draw(this);

    }
    moveRight() {

        this.animations.right = requestAnimationFrame(()=>this.moveRight());

        if(this.maxSpeed > this.vx) {
            this.vx += this.momentum;
            console.log(this.vx);
        }

        this.dimensions.move(this.vx, 0);
        engine.clear();
        engine.draw(this);
        // engine.drawPlayer(this);

    }
    gravitate() {
        var animation = requestAnimationFrame(()=>this.gravitate());
        engine.clear();

        var oldDimensions = this.dimensions,
            coordinatesText = 'x: ' + oldDimensions.x + ', y: ' + oldDimensions.y;

        engine.text(oldDimensions.x, oldDimensions.y, coordinatesText);

        this.vy += this.gravity;
        this.dimensions.move(this.vx, this.vy);

        if (
				this.dimensions.x + this.dimensions.width > canvas.width ||
				this.dimensions.x - this.dimensions.width < 0 ||
				this.dimensions.y + this.dimensions.height > canvas.height// ||
				//ball.y - ball.radius  < 0
			 ) {

			// Re-positioning on the base ;)
            this.dimensions.moveTo(oldDimensions.x, oldDimensions.y);

			// If we do not re-set the velocities
			// then the ball will stick to bottom :D

			// Velocity x
			this.vx = 0;
			// Velocity y
			this.vy = -7;

            cancelAnimationFrame(animation);
		}

        if(this.dimensions.y + this.dimensions.height < canvas.height) {
            // alert('touched the bottom');
        }

        engine.draw(this);

    }

}
