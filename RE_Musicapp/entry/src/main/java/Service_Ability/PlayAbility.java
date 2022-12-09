package Service_Ability;


import ohos.aafwk.ability.Ability;
import ohos.aafwk.content.Intent;
import ohos.app.Context;
import ohos.hiviewdfx.HiLog;
import ohos.hiviewdfx.HiLogLabel;
import ohos.rpc.*;
import ohos.utils.zson.ZSONObject;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class PlayAbility  extends Ability{
    private static final String TAG = "PlayAbility";
    private static final int PLUS = 2001;
    private PlayRemote remote;

    PlaySoundUtil playSoundUtil ;

    @Override
    protected void onStart(Intent intent) {
        super.onStart(intent);
        try{
            playSoundUtil = new PlaySoundUtil();
        }catch (IOException e){
            e.printStackTrace();
        }
    }

    @Override
    protected IRemoteObject onConnect(Intent intent) {
        super.onConnect(intent);
        Context c = getContext();
        remote = new PlayRemote();
        return remote.asObject();
    }

    class PlayRemote extends RemoteObject implements IRemoteBroker {

        public PlayRemote() {
            super("PlayRemote 666");
        }

        @Override
        public boolean onRemoteRequest(int code, MessageParcel data, MessageParcel reply, MessageOption option) throws RemoteException {
            switch (code) {
                case PLUS: {
                    playSoundUtil.loadSound("123.wav");
                    break;
                }
                default: {
                    reply.writeString("service not defined");
                    return false;
                }
            }
            return true;
        }

        @Override
        public IRemoteObject asObject() {
            return this;
        }
    }

}
