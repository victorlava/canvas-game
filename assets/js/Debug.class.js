class Debug {

    constructor() {

    }
    
    coordinates(object) {
        var padding = 10,
            location = object.dimensions,
            text = 'x: ' + this.round(location.x) + ', y: ' + this.round(location.y);

        canvas.text(location.x, location.y - padding, text);
    }
    round(number, precision = 0) {
      var factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    }

}
