// Registers all of the objects in the array
class Registry {
    constructor() {
        this.registry = [];
    }
    register(object) {
        this.registry.push(object);
        return this.registry.length;
        // console.log(this.registry);
    }
    getLastObjectId() {
        return this.registry.length + 1;
    }
}
