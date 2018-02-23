class Engine {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
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
