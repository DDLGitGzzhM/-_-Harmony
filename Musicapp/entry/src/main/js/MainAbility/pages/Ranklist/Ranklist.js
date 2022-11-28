export default {
    data: {
        title: "",
        top_choose_flag : 1,
        top_choose:[],
    },
    onInit() {
        this.title = "Hello World";
        this.top_choose =[
            {
                flag : 1, name : '周杰伦'
            },
            {
                flag : 2, name : '周杰伦'
            },
            {
                flag : 3, name : '周杰伦'
            },
            {
                flag : 4, name : '周杰伦'
            },
        ]
    },
    change_top_chooose_flag(flag){
        this.top_choose_flag = flag;
    }
}
