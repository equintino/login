import Modal from './../../lib/shared/modal.js'

export default class View {
    #id
    #optDbs
    #confDB

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

    getConfDB() {
        return this.#confDB
    }

    openModal(fn) {
        const modal = new Modal()
        modal.setButton('save', 'Salvar Configuração')
        modal.setTitle('configurando base de dados')
        modal.setContent('GET', './../pages/modals/database.html')
        modal.setEvent('click', (e) => {
            if (e.target.value === 'save') {
                const form = modal.getContent().querySelector('form')
                this.#confDB = new FormData(form)
                fn()
            }
        })
    }
}