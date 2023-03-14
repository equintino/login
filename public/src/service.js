import ReadFile from "../../lib/shared/readFile.js"

export default class Service {
    #dbs

    constructor() {
        this.#setOptDbs()
    }

    login(e) {
        const formData = new FormData(e.target)
        return formData.getAll('login')
    }

    getOptDbs() {
        return this.#dbs
    }

    #setOptDbs() {
        const readFile = new ReadFile()
        readFile.open("GET", "../config/dbs.ini", false)
        if (readFile.status === 200) {
            this.#dbs = readFile.content.split("\n")
        }
        if (readFile.status === 404) {
            this.#dbs = false
        }
    }

    saveConf(formData) {
        let confDB = '{'

        formData.forEach((value, name) => {
            if (name === "connectionName") {
                confDB += `${value}: {`
            } else {
                confDB += `${name}: ${value},`
            }
        })
        confDB += '}}'
    }
}