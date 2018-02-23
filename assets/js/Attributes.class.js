class Attributes {
    constructor(settings) {
        this.health = settings.health;
        this.speed = settings.speed;
        this.crouched = false;
    }
    set(name, value) {
        Object.defineProperty(this, name, {
          value: value,
          writable: false
        });
    }
    get(name) {
        return Object.getOwnPropertyDescriptor(this, name).value;
    }
}
