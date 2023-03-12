export default class View {
    #id
    #optDbs

    login() {
        this.#id = document.querySelector('#auth')
        this.#id.querySelector("[name=db]").innerHTML = this.#optDbs
    }

    setOptDbs(dbs) {
        let opt = "<option value=''></option>"
        for (let db of dbs) {
            opt += `<option value='${db}'>${db}</option>`
        }
        this.#optDbs = opt
    }
}