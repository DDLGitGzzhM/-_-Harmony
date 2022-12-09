
export default {
    data: {
        title: "",
        swiperImage: [],
        quickStart: [],
        gou : "https://s2.best-wallpaper.net/wallpaper/1920x1080/1712/Furry-dog-front-view-eyes_1920x1080.jpg",
        startClass: [],
        hotCourses: [],
    },
    onInit() {
        this.title = "Hello World";
        this.swiperImage = ["https://s2.best-wallpaper.net/wallpaper/1920x1080/1712/Furry-dog-front-view-eyes_1920x1080.jpg","https://s2.best-wallpaper.net/wallpaper/1920x1080/1712/Furry-dog-front-view-eyes_1920x1080.jpg","https://s2.best-wallpaper.net/wallpaper/1920x1080/1712/Furry-dog-front-view-eyes_1920x1080.jpg","https://s2.best-wallpaper.net/wallpaper/1920x1080/1712/Furry-dog-front-view-eyes_1920x1080.jpg"];
        this.quickStart = [
            {
                name : '音乐' , image: 'xxx.png' , url:  'xxx'
            },
            {
                name : '音乐' , image: 'xxx.png' , url:  'xxx'
            },
            {
                name : '音乐' , image: 'xxx.png' , url:  'xxx'
            },
            {
                name : '音乐' , image: 'xxx.png' , url:  'xxx'
            },
            {
                name : '音乐' , image: 'xxx.png' , url:  'xxx'
            }
        ];
        this.startClass=[
            {
                name: '周杰伦' , master: '周杰伦' , stuNum: '周杰伦' , image : this.gou
            },
            {
                name: '周杰伦' , master: '周杰伦' , stuNum: '周杰伦' , image : this.gou
            },
            {
                name: '周杰伦' , master: '周杰伦' , stuNum: '周杰伦' , image : this.gou
            },
            {
                name: '周杰伦' , master: '周杰伦' , stuNum: '周杰伦' , image : this.gou
            }
        ];
        this.hotCourses=[
            {
                name: '周杰伦' , teacher: '周杰伦', stuNum: '周杰伦' , hour : '周杰伦' , image : this.gou
            },
            {
                name: '周杰伦' , teacher: '周杰伦', stuNum: '周杰伦' , hour : '周杰伦' , image : this.gou
            },
            {
                name: '周杰伦' , teacher: '周杰伦', stuNum: '周杰伦' , hour : '周杰伦' , image : this.gou
            },
            {
                name: '周杰伦' , teacher: '周杰伦', stuNum: '周杰伦' , hour : '周杰伦' , image : this.gou
            },
            {
                name: '周杰伦' , teacher: '周杰伦', stuNum: '周杰伦' , hour : '周杰伦' , image : this.gou
            },
            {
                name: '周杰伦' , teacher: '周杰伦', stuNum: '周杰伦' , hour : '周杰伦' , image : this.gou
            },
        ]
    }
}
