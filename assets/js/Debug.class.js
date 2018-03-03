class Debug {

    constructor() {

    }
    coordinates(object) {
        var location = object.dimensions,
            text = 'x: ' + location.x + ', y: ' + location.y;

        engine.text(location.x, location.y, text);
    }
    round(number, precision) {
      var factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    }

}
