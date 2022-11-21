import router from '@ohos.router';
export default {
    data: {
        title: ""
    },
    onInit() {
        this.title = "Hello World";
    },
    login(){
        router.push({
            url:'pages/index/index'
        });
    }
}
