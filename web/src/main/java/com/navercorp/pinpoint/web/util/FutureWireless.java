package com.navercorp.pinpoint.web.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Created by gao_yang on 2017/3/22.
 */
public class FutureWireless {
    private final static Logger LOG = LoggerFactory.getLogger(FutureWireless.class);

    /**
     * 短信发送
     * @param url_send_sms url
     * @param json_send_sms 发送内容
     * @throws Exception
     */
    public static String sendSms(String url_send_sms, String json_send_sms) throws Exception {
        URL url = new URL(url_send_sms);
        HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
        httpURLConnection.setRequestMethod("POST");
        httpURLConnection.setDoOutput(true);
        httpURLConnection.setRequestProperty("Content-Type", "application/json");
        OutputStream out = httpURLConnection.getOutputStream();
        out.write(json_send_sms.getBytes("UTF-8"));
        System.out.println("发送内容:\t" + json_send_sms);
        InputStream inputStream = null;
        InputStreamReader inputStreamReader = null;
        BufferedReader reader = null;
        StringBuffer resultBuffer = new StringBuffer();
        String tempLine = null;
        try {
            inputStream = httpURLConnection.getInputStream();
            inputStreamReader = new InputStreamReader(inputStream, "UTF-8");
            reader = new BufferedReader(inputStreamReader);
            while ((tempLine = reader.readLine()) != null) {
                resultBuffer.append(tempLine);
            }
            System.out.println("接收内容:\t" + resultBuffer.toString());
            return resultBuffer.toString();
        } catch (Exception e) {
            LOG.error("获取回调失败" + e.getMessage() + e);
        } finally {
            if (reader != null) {
                reader.close();
            }
            if (inputStreamReader != null) {
                inputStreamReader.close();
            }
            if (inputStream != null) {
                inputStream.close();
            }
            httpURLConnection.disconnect();
        }
        return "";
    }
}
