class Dimension extends Point {
    constructor(width = 0, height = 0, x = 0, y = 0) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
    }
}
