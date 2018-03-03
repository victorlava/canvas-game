/**
 * Calls a debug class, which is responsible for debugging elements on canvas
 * @class debug
 */
class Debug {

    constructor() {

    }

    /**
     * Used for displaying coordinates of the object
     * @function coordinates
     * @param {object} object Can anything that has dimensions property
     */
    coordinates(object) {
        var padding = 10,
            location = object.dimensions,
            text = 'x: ' + this.round(location.x) + ', y: ' + this.round(location.y);

        canvas.text(location.x, location.y - padding, text);
    }
    
    /**
     * Funtionc that rounds number up with the desired precision.
     * @function round
     * @param {float | integer} number Number to rounds
     * @param {integer} precision How much precision to use when rounding up
     */
    round(number, precision = 0) {
      var factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    }

}
