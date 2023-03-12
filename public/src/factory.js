import View from "./view.js"
import Service from "./service.js"
import Controller from "./controller.js"

const factory = {
    async initializer() {
        return Controller.initializer({
            view: new View(),
            service: new Service()
        })
    }
}

export default factory