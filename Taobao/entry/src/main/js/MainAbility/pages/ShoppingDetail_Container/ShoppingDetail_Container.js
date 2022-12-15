import router from '@system.router'
export default {
    data: {
        title: "",
        detail:[],
    },
    onInit() {
        this.title = "Hello World";
        this.detail = [{
            title: "油画资源地" , image : "/Img/油画.jpg" , Detail : "R101【法国、瑞士】 Eugene Gr" , price:"¥7.3"
        }]
    },
    mainpage(){
        router.push ({
            uri: 'pages/Mainpage/Mainpage',
        });
    },
    kefu(){

    },
    shouchang(){

    },
    gouwuche(){
        router.push({
            uri: 'pages/Shopping/Shopping',
            params : {
                detail:this.detail
            }
        })
    },
    lijigoumai(){
        router.push ({
            uri: 'pages/orderConfirm/orderConfirm',
        });
    }
}
