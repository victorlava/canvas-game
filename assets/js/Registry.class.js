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

    // Loops through registry, finds the element with
    // specified id and drops from registry
    // if global true, removes from global Registry
    // else returns the copy of it
    /**
     * Just renaming the addEventListener function
     * @function drop
     * @param {string} attribute Attribute name to search for
     * @param {string|number} value Value to search for
     * @param {boolean} global If true removes the object from global registry, else doesn't
     */
    drop(attribute, value, global = false) {
        let i = 0,
            result = undefined;
        const localRegistry = this.registry;

        for (let element of localRegistry) {

            if (element.hasOwnProperty('id')) {
                if(element.id == value) {
                    // this.registry[i].remove();
                    localRegistry.splice(i, 1);

                    if(global) {
                        // this.registry = localRegistry;
                    }

                }
            }

            i += 1;
        }

        return localRegistry;
    }
}
