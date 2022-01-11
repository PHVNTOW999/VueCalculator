const app = Vue.createApp({
    data() {
        return {
            input: "",
            placeholder: "",
        }
    },
    methods: {
        num(n) {
            this.input += "" + n 
            console.log(this.input, n)
        },
        clear() {
            this.input = ""
        },
        result() {
            if(this.input === "") {
                return
            } else {
                this.input = eval(this.input)
                console.log(this.input)
            }
            if(this.input == undefined) {
                clear()
            }
            if(this.input == SyntaxError || false) {
                clear()
            }
            console.log(typeof this.input)
        },
    },
    mounted() {
        try {
            eval(this.input);
        } catch (e) {
            clear()
            console.error(e.name);
        }
    },
})

app.mount("#app")

console.log("Vue is work")