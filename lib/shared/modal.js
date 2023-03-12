import ReadFile from './readFile.js'

export default class Modal {
    #box
    #css
    #title
    #button

    constructor() {
        this.#box = document.querySelector('#box')
        this.#title = document.querySelector('#title')
        this.#button = document.querySelector('#button')
        this.#setCss()
        this.#box.style = this.#style(this.#css.box)
    }

    #style(stl) {
        let css = ""
        for (let i in stl) {
            css += i + ':' + stl[i] + ";"
        }
        return css
    }

    #setCss() {
        this.#css = {
            box: {
                display: "block",
            },
            title: {
            }
        }
    }

    setContent(method, url) {
        const readFile = new ReadFile()
        readFile.open(method, url)

        this.#box.querySelector("#content").innerHTML = readFile.content
    }

    setTitle(title) {
        this.#title.innerHTML = title.toUpperCase()
    }

    setButton(btn) {
        this.#button.innerHTML = btn
    }

    setEvent(evt, fn) {
        this.#box.addEventListener(evt, fn)
    }

    getContent() {
        return this.#box.querySelector("#content")
    }
}