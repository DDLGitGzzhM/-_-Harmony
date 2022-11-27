export default {
    data: {
        title: "",
        flag: 1
    },
    onInit() {
        this.title = "Hello World";
    },
    changebar(index){
        this.flag  = index;
    }
}
