class Block {
    constructor(type) {
        // this.type = 'player';
        // this.description = description;

        this.id = registry.getLastObjectId();
        this.dimensions = new Dimension();
        this.type = 'block';
        this.gravity = .2;
        this.vx = 0;
        this.vy = -15;

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
    move(x, y) {
        this.dimensions.move(x, y);
        engine.clear();
        engine.draw(this);
    }
    gravitate() {
        var id = requestAnimationFrame(()=>this.gravitate());
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
			this.vx = 2;
			// Velocity y
			this.vy = -4;
		}

        if(this.dimensions.y + this.dimensions.height < canvas.height) {
            // alert('touched the bottom');
        }

        engine.draw(this);
    }

}
