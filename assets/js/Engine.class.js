/**
 * Calls an engine class, which is responsible for the game physics.
 * @class Engine
 */
class Engine {
    constructor() {
        this.gravity = .3;
        this.vx = 0;
        this.vy = -7;
        this.momentum = 0.15; // how much momentum when moving on x axis
        this.maxSpeed = 5;

        this.animations = {
            right: false,
            left: false,
            stop: false,
            jump: false
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
        canvas.draw(object);
        object.attr.set('crouched', true);
    }

    standUp(object) {
        object.dimensions.setSize(object.dimensions.width, object.dimensions.height*2);
        object.dimensions.move(0, -object.dimensions.height/2);
        canvas.clear();
        canvas.draw(object);
        object.attr.set('crouched', false);
    }

    stop(object) {

        this.animations.stop = requestAnimationFrame(()=>this.stop(object));

        if(this.vx > 0) { // Moving right
            this.vx -= this.momentum * 2;
            if(this.vx <= 0) {
                cancelAnimationFrame(this.animations.right);
                cancelAnimationFrame(this.animations.stop);
                this.animations.stop = false;
                this.animations.right = false;
                this.vx = 0;
            }
        }
        else if(this.vx < 0) { // Moving left
            this.vx -= -this.momentum * 2;
            if(this.vx >= 0) {
                cancelAnimationFrame(this.animations.left);
                cancelAnimationFrame(this.animations.stop);
                this.animations.stop = false;
                this.animations.left = false;
                this.vx = 0;
            }
        }



    }

    moveLeft(object) {
        if(!engine.rectangleCollision(object.dimensions,
                                    registry.registry[0].dimensions)) {

            this.animations.left = requestAnimationFrame(()=>this.moveLeft(object));

            // console.log(-this.maxSpeed);
            if(-this.maxSpeed < this.vx) {
                this.vx -= this.momentum;
                console.log(this.vx);
            }

            object.dimensions.move(this.vx, 0);
            canvas.clear();
            canvas.draw(object);

        }
    }

    moveRight(object) {
        if(!engine.rectangleCollision(object.dimensions)) {

            // console.log('no collision');
            this.animations.right = requestAnimationFrame(()=>this.moveRight(object));


            if(this.maxSpeed > this.vx) {
                this.vx += this.momentum;
                console.log(this.vx);
            }

            object.dimensions.move(this.vx, 0);
            canvas.clear();
            canvas.draw(object);

        }

    }

    rectangleCollision(first, second = undefined) {
        var collision = false,
            elements = registry.registry,
            second = [];

    
            // need to remove myself from the registry because always will be collisioned

        for (var i = 0; i < elements.length; i++) {

            second[i] = elements[i].dimensions;

            if (first.x < second[i].x + second[i].width &&
               first.x + first.width > second[i].x &&
               first.y < second[i].y + second[i].height &&
               first.height + first.y > second[i].y) {
                   collision = true;
                   console.log('colissioned!');
            }
        }

        return collision;
    }

    gravitate(object) {


        this.animations.jump = requestAnimationFrame(()=>this.gravitate(object));
        var currentDimensions = object.dimensions; // Used for re-positioning

        canvas.clear();

        this.vy += this.gravity;

        if(engine.rectangleCollision(object.dimensions,
                                    registry.registry[0].dimensions)) {

            this.vy = -7;

            cancelAnimationFrame(this.animations.jump);
        }

        object.dimensions.move(this.vx, this.vy);




        if(object.dimensions.y + object.dimensions.height < canvas.height) {
            // tells when an object is in the air
            console.log('in the air');
            // cancelAnimationFrame(this.animations.jump-1);

        }

        canvas.draw(object);

    }
}
