export default {
    data: {
        swiperImgs :[],
        list1:[],
        list2:[],
        list3:[],
        list51:[],
        list52:[],
        list53:[],
        list54:[],
    },
    onInit() {
        this.swiperImgs = ['1212.png','WorldCup.png'];
        this.list1 = [
            {
                name : "收藏", image : "star.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "订阅店铺", image : "check.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "足迹", image : "history.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "零钱", image : "wallet.png", url:"pages/Mainpage/Mainpage"
            }

        ];
        this.list2 = [
            {
                name : "待付款", image : "card.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "待发货", image : "package.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "待收货", image : "truck.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "待评价", image : "comment.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "退款/售后", image : "refund.png", url:"pages/Mainpage/Mainpage"
            }

        ];
        this.list3 = [
            {
                name : "淘宝主会场", image : "circle.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "淘宝神店榜", image : "circle.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "品质好货", image : "circle.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "我的双12", image : "circle.png", url:"pages/Mainpage/Mainpage"
            }

        ];
        this.list51 = [
            {
                name : "芭芭农场", image : "farm.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "淘宝人生", image : "life.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "火爆连连消", image : "xiao.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "斗地主", image : "ddz.png", url:"pages/Mainpage/Mainpage"
            }

        ];
        this.list52 = [
            {
                name : "我的快递", image : "cainiao.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "一起摇现金", image : "cash.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "试用领取", image : "getTry.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "领券中心", image : "quan.png", url:"pages/Mainpage/Mainpage"
            }

        ];
        this.list53 = [
            {
                name : "小流浪旅社", image : "xll.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "成就奖励", image : "reward.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "大房东", image : "house.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "四川麻将", image : "majiang.png", url:"pages/Mainpage/Mainpage"
            }

        ];
        this.list54 = [
            {
                name : "我的评价", image : "myComment.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "闲置换钱", image : "transmoney.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "充话费", image : "phone.png", url:"pages/Mainpage/Mainpage"
            },
            {
                name : "更多频道", image : "more.png", url:"pages/Mainpage/Mainpage"
            }

        ];
    }
}
