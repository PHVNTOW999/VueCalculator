const app = Vue.createApp({
    data() {
        return {
            input: 0,
            placeholder: "",
        }
    },
    methods: {
        num(n) {
            this.input += "" + n 
            localStorage.setItem("Result", this.input)
        },
        clear() {
            this.input = ""
            localStorage.setItem("Result", this.input = '')
        },
        result() {
            if(this.input === "") {
                return
            } else {
                this.input = eval(this.input)
                localStorage.setItem("Result", this.input)
            }
            if(this.input == undefined || null) {
                clear()
            }
            if(this.input == SyntaxError || false) {
                clear()
            }
        },
    },
    mounted() {
        try {
            eval(this.input);
        } catch (e) {
            clear()
            console.error(e.name);
        }
        this.input += localStorage.getItem("Result", this.input)
    },
})

app.mount("#app")

console.log("Vue is work")