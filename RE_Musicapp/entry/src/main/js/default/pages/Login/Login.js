import router from '@system.router'
const ACTION_SOUND_LOAD = 2001;
const ACTION_SOUND_START = 2002;
const ACTION_SOUND_STOP = 2003;

const ABILITY_TYPE_EXTERNAL = 0;
const ACTION_SYNC = 0;
const ACTION_ASYNC = 1;
const ACTION_MESSAGE_CODE_PLUS = 1001;
export const playAbility= {
    play: async function (code) {
        var action = {};
        action.bundleName = 'com.example.phone';
        action.abilityName = 'com.example.phone.ability.PlayAbility';
        action.messageCode = code;
        action.data = {};
        action.abilityType = ABILITY_TYPE_EXTERNAL;
        action.syncOption = ACTION_SYNC;

        var result = await FeatureAbility.callAbility(action);
        var ret = JSON.parse(result);
        if (ret.code == 0) {
            console.info(JSON.stringify(ret.abilityResult));
        } else {
            console.error(JSON.stringify(ret.code));
        }
    }
}
export default {

    data: {
        title: ""
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    login(){
        router.push({
            uri:'pages/MainContainer/MainContainer'
        });
    },
    play(){
        this.title = "播放中";
        playAbility.play(ACTION_SOUND_START);
    }
}



