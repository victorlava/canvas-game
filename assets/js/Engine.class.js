/**
 * Calls an engine class, which is responsible for the game physics.
 * @class Engine
 */
class Engine {
    constructor() {
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
    }

    setTo(object, x, y) {
        object.dimensions.moveTo(x, y);
        canvas.draw(object);
    }

    moveTo(object, x, y) {
        object.dimensions.moveTo(x, y);
        canvas.clear();
        canvas.draw(object);
    }

    crouch(object) {
        object.dimensions.setSize(object.dimensions.width, object.dimensions.height/2);
        object.dimensions.move(0, object.dimensions.height);
        canvas.clear();
        debug.coordinates(object);
        canvas.draw(object);
        object.attr.set('crouched', true);
    }

    standUp(object) {
        object.dimensions.setSize(object.dimensions.width, object.dimensions.height*2);
        object.dimensions.move(0, -object.dimensions.height/2);
        canvas.clear();
        debug.coordinates(object);
        canvas.draw(object);
        object.attr.set('crouched', false);
    }

    stop(object) {

        this.animations.stop = requestAnimationFrame(()=>this.stop(object));

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

    moveLeft(object) {

        this.animations.left = requestAnimationFrame(()=>this.moveLeft(object));

        // console.log(-this.maxSpeed);
        if(-this.maxSpeed < this.vx) {
            this.vx -= this.momentum;
            console.log(this.vx);
        }

        object.dimensions.move(this.vx, 0);
        canvas.clear();
        debug.coordinates(object);
        canvas.draw(object);

    }

    moveRight(object) {

        this.animations.right = requestAnimationFrame(()=>this.moveRight(object));

        if(this.maxSpeed > this.vx) {
            this.vx += this.momentum;
            console.log(this.vx);
        }

        object.dimensions.move(this.vx, 0);
        canvas.clear();
        debug.coordinates(object);
        canvas.draw(object);


    }

    gravitate(object) {
        var animation = requestAnimationFrame(()=>this.gravitate(object)),
            currentDimensions = object.dimensions; // Used for re-positioning

        canvas.clear();
        debug.coordinates(object);

        this.vy += this.gravity;
        object.dimensions.move(this.vx, this.vy);

        if (
				object.dimensions.x + object.dimensions.width > canvas.width ||
				object.dimensions.x - object.dimensions.width < 0 ||
				object.dimensions.y + object.dimensions.height > canvas.height// ||
				//ball.y - ball.radius  < 0
			 ) {

			// Re-positioning to the currentDimensions, which currently are old ones
            object.dimensions.moveTo(currentDimensions.x, currentDimensions.y);

			// If we do not re-set the velocities
			// then the ball will stick to bottom :D

			// Velocity x
			this.vx = 0;
			// Velocity y
			this.vy = -7;

            cancelAnimationFrame(animation);
		}

        if(object.dimensions.y + object.dimensions.height < canvas.height) {
            // tells when an object is in the air
            console.log('in the air');
        }

        canvas.draw(object);

    }
}
