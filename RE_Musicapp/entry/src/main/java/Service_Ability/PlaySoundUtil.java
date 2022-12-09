package Service_Ability;

import ohos.media.audio.*;
import java.io.*;

public class PlaySoundUtil {

    private AudioStreamInfo audioStreamInfo = null;
    private AudioRendererInfo audioRendererInfo = null;
    private AudioRenderer.PlayMode playMode = AudioRenderer.PlayMode.MODE_STREAM;
    private AudioRenderer audioRenderer = null;
    private AudioManager audioManager = null;
    private AudioInterrupt audioInterrupt = null;
    private InputStream soundInputStream = null;
    private String fileName = null;



    public PlaySoundUtil() throws IOException {
        System.out.println("音乐播放器初始化");
        audioStreamInfo = new AudioStreamInfo.Builder().sampleRate(44100) // 44.1kHz
                .audioStreamFlag(AudioStreamInfo.AudioStreamFlag.AUDIO_STREAM_FLAG_MAY_DUCK) // 混音
                .encodingFormat(AudioStreamInfo.EncodingFormat.ENCODING_PCM_16BIT) // 16-bit PCM
                .channelMask(AudioStreamInfo.ChannelMask.CHANNEL_OUT_STEREO) // 双声道输出
                .streamUsage(AudioStreamInfo.StreamUsage.STREAM_USAGE_MEDIA) // 媒体类音频
                .build();

        audioRendererInfo = new AudioRendererInfo.Builder().audioStreamInfo(audioStreamInfo)
                .audioStreamOutputFlag(AudioRendererInfo.AudioStreamOutputFlag.AUDIO_STREAM_OUTPUT_FLAG_DIRECT_PCM) // pcm格式的输出流
                .bufferSizeInBytes(1024)
                .isOffload(false) // false表示分段传输buffer并播放，true表示整个音频流一次性传输到HAL层播放
                .build();
        audioRenderer = new AudioRenderer(audioRendererInfo,playMode);
    }

    public void loadSound(String fileName){
        this.fileName = fileName;
        String filePath = String.format("src/main/resources/rawfile/music/%s", fileName);
        System.out.println("播放中");
        soundInputStream = this.getClass().getClassLoader().getResourceAsStream(filePath);

        int bufSize = audioRenderer.getBufferFrameSize();

        System.out.println("bufSize"+bufSize);

        byte[] buffer = new byte[1024] ;
        int len;
        try {
            audioRenderer.start();
            while((len=soundInputStream.read(buffer,0,buffer.length)) != -1){
                audioRenderer.write(buffer,0,buffer.length) ;
            }
            soundInputStream.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public AudioRenderer getAudioRenderer(){
        return this.audioRenderer;
    }

}
