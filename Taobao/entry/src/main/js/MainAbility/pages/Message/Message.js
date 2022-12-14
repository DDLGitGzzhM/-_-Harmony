
export default {
    data: {
        title: "消息",
        message_shop: [],
        value: "",
    },
    onInit() {
        this.title = "消息";
        this.message_shop = [
            {url: "/Img/Leaftree.png" , Title : "Leaftree旗舰店" , date : "星期一" , message : "如果消息较多打扰到您。可以点此拒绝消息"},
            {url: "/Img/Leaftree.png" , Title : "Leaftree旗舰店" , date : "星期一" , message : "如果消息较多打扰到您。可以点此拒绝消息"},
            {url: "/Img/Leaftree.png" , Title : "Leaftree旗舰店" , date : "星期一" , message : "如果消息较多打扰到您。可以点此拒绝消息"},
            {url: "/Img/Leaftree.png" , Title : "Leaftree旗舰店" , date : "星期一" , message : "如果消息较多打扰到您。可以点此拒绝消息"},
            {url: "/Img/Leaftree.png" , Title : "Leaftree旗舰店" , date : "星期一" , message : "如果消息较多打扰到您。可以点此拒绝消息"},
            {url: "/Img/油画.jpg" , Title : "油画旗舰店" , date : "星期一" , message : "如果消息较多打扰到您。可以点此拒绝消息"},
        ]
    },
    change(e){
        this.value =e.value;
    }
}
