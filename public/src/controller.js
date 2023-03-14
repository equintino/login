export default class Controller {
    #view
    #service

    constructor({ view, service }) {
        this.#view = view
        this.#service = service
    }

    getForm(form) {
        console.log(
            form
        )
    }

    async init() {
        const optDbs = this.#service.getOptDbs()
        if (!optDbs) {
            this.#view.openModal(() => {
                let formData = this.#view.getConfDB()
                this.#service.saveConf(formData)
            })
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