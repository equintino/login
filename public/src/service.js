import ReadFile from "../../lib/shared/readFile.js"

export default class Service {
    #dbs

    login(e) {
        const formData = new FormData(e.target)
        return formData.getAll('login')
    }

    getDbs() {
        return this.#dbs
    }

    setDbs() {
        const readFile = new ReadFile()
        readFile.open("GET", "../config/dbs.ini_", false)
        if (readFile.status === 200) {
            this.#dbs = readFile.content.split("\n")
        }
        if (readFile.status === 404) {
            this.#dbs = false
        }
    }

    saveConf(formModal) {
        console.log(
            formModal
        )
    }
}
