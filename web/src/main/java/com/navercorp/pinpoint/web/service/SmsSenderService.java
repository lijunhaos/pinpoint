package com.navercorp.pinpoint.web.service;

import com.alibaba.fastjson.JSON;
import com.navercorp.pinpoint.web.util.FutureWireless;
import com.navercorp.pinpoint.web.util.Md5;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;


@Service
public class SmsSenderService {
  private final static Logger LOG = LoggerFactory.getLogger(SmsSenderService.class);

  private static final String urlSendSms = "http://43.243.130.33:8860";
  private static final String custPwd = "bjhlt123";
  private static final String custCode = "C10170";


  /**
   * 未来无线平台发送普通短信
   * 
   * @param mobile
   * @param content
   */
  public void futureWirelessNormalSender(String mobile, String content) {
    try {
      // 发送短信地址
      String url_send_sms = urlSendSms + "/sendSms";
      // 签名，签名内容根据 “短信内容+客户密码”进行MD5编码后获得
      String sign = content + custPwd;
      sign = Md5.getMd5(sign.getBytes("UTF-8"));
      com.alibaba.fastjson.JSONObject jsonObject = new com.alibaba.fastjson.JSONObject();
      jsonObject.put("cust_code", custCode);
      jsonObject.put("content", "[APM性能监控告警]" + content + "【MPS】");
      jsonObject.put("destMobiles", mobile);
      jsonObject.put("sign", sign);
      String json_send_sms = JSON.toJSONString(jsonObject);
      FutureWireless.sendSms(url_send_sms, json_send_sms);// 发送普通短信
    } catch (Exception e) {
      LOG.error("短信发送失败" + e.getMessage() + e);
    }
  }
}
