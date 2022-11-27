import router from '@ohos.router';
export default {
    data: {
        title: "",
        index: 1
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    login(){
        router.push({
            url:'pages/Login/Login'
        });
    },
    changeMenu(index){
        this.index = index;
    }
}



