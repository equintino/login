export default class Controller {
    #view
    #service

    constructor({ view, service }) {
        this.#view = view
        this.#service = service
    }

    async init() {
        const optDbs = this.#service.getOptDbs()
        if (!optDbs) {
            return console.log(
                "não temos opções de conexão!"
            )
        }
        this.#view.setOptDbs(optDbs)
        this.#view.login()
    }

    static async initializer(deps) {
        const controller = new Controller(deps)
        return controller.init()
    }
}