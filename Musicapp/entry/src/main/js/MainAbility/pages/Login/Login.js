import router from '@ohos.router'
export default {
    data: {
        title: ""
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    login(){
        router.push({
            url:'pages/MainContainer/MainContainer'
        });
    }
}



