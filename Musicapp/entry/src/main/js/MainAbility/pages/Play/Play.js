
export default {
    data: {
        title: "",
        value: 0,
        startValue: 0,
        currentValue: 0,
        endValue: 0,
    },
    onInit() {
        this.title = "Hello World";
    },
    setvalue(e) {
        if (e.mode == "start") {
            this.value = e.value;
            this.startValue = e.value;
        } else if (e.mode == "move") {
            this.value = e.value;
            this.currentValue = e.value;
        } else if (e.mode == "end") {
            this.value = e.value;
            this.endValue = e.value;
        }
    },


}
