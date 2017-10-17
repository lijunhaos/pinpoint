package com.navercorp.pinpoint.web.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Properties;

/**
 * Created by lijunhao on 2017/9/19 0019.
 */
@Service
public final class EmailUtilService {

    private static final Logger LOG = LoggerFactory.getLogger(EmailUtilService.class);

    // 发件人的 邮箱 和 密码
    // PS: 某些邮箱服务器为了增加邮箱本身密码的安全性，给 SMTP 客户端设置了独立密码（有的邮箱称为“授权码”）,
    //     对于开启了独立密码的邮箱, 这里的邮箱密码必需使用这个独立密码（授权码）。
    public static final String myEmailAccount = "m18251888476_1@163.com";
    public static final String myEmailPassword = "Sonic333";

    // 发件人邮箱的 SMTP 服务器地址, 必须准确, 不同邮件服务器地址不同, 一般(只是一般, 绝非绝对)格式为: smtp.xxx.com
    // 网易163邮箱的 SMTP 服务器地址为: smtp.163.com
    public static final String myEmailSMTPHost = "smtp.163.com";

    // 设置为debug模式, 可以查看详细的发送 log
    public static final boolean myEmailDebug = true;

    // 邮件发件人名称
    public static final String senders_name = "\u6027\u80fd\u76d1\u63a7";

    //邮件主题
    public static final String emailSubject = "\u544a\u8b66";

    /**
     * 发送单份邮件
     * @param mail
     * @param content
     */
    public void sendSingleEmailMessage(String mail, String content) throws MessagingException {
        sendMultiEmailMessage(Arrays.asList(mail),content);
    }
    /**
     * 发送多份邮件
     * @param mails  需要发送的邮件地址集合
     * @param content 需要发送的邮箱内容
     */
    public void sendMultiEmailMessage(List<String> mails, String content) throws MessagingException {
        // 1. 创建参数配置, 用于连接邮件服务器的参数配置
        Properties props = new Properties();                    // 参数配置
        props.setProperty("mail.transport.protocol", "smtp");   // 使用的协议（JavaMail规范要求）
        props.setProperty("mail.smtp.host", myEmailSMTPHost);   // 发件人的邮箱的 SMTP 服务器地址
        props.setProperty("mail.smtp.auth", "true");            // 需要请求认证

        // 2. 根据配置创建会话对象, 用于和邮件服务器交互
        Session session = Session.getDefaultInstance(props);
        session.setDebug(myEmailDebug);                                 // 设置为debug模式, 可以查看详细的发送 log

        // 3. 创建一封邮件
        MimeMessage message = createMimeMessage(session,mails,content);

        if(null!=message){
            // 4. 根据 Session 获取邮件传输对象
            Transport transport = null;
            try {
                transport = session.getTransport();
            } catch (NoSuchProviderException e) {
                LOG.error("根据 Session 获取邮件传输对象出错，详细信息为{}",e.getMessage());
            }
                // 5. 使用 邮箱账号 和 密码 连接邮件服务器, 这里认证的邮箱必须与 message 中的发件人邮箱一致, 否则报错
                transport.connect(myEmailAccount, myEmailPassword);

                // 6. 发送邮件, 发到所有的收件地址, message.getAllRecipients() 获取到的是在创建邮件对象时添加的所有收件人, 抄送人, 密送人
                transport.sendMessage(message, message.getAllRecipients());

                // 7. 关闭连接
                transport.close();
        }
    }

    /**
     * 创建一封只包含文本的简单邮件
     *
     * @param session 和服务器交互的会话
     * @param content 需要发送的邮箱内容
     * @param receiveMail 收件人邮箱集合
     * @return
     * @throws Exception
     */
    public MimeMessage createMimeMessage(Session session, List<String> receiveMail, String content) {
        if(receiveMail.size()>0){
            Address[] addresses = new Address[receiveMail.size()];
            for (int i=0;i<receiveMail.size();i++){
                InternetAddress internetAddress = null;
                try {
                    internetAddress = new InternetAddress(receiveMail.get(i),"UTF-8");
                } catch (UnsupportedEncodingException e) {
                    LOG.error("增加收件人{}出错，详细信息为{}",receiveMail.get(i),e.getMessage());
                }
                addresses[i]=internetAddress;
            }
            // 1. 创建一封邮件
            MimeMessage message = new MimeMessage(session);

            // 2. From: 发件人
            try {
                message.setFrom(new InternetAddress(myEmailAccount, senders_name, "UTF-8"));
            } catch (Exception e) {
                LOG.error("设置发件人{}出错，详细信息为{}",myEmailAccount,e.getMessage());
            }

            // 3. To: 收件人（可以增加多个收件人、抄送、密送）
            try {
                message.setRecipients(MimeMessage.RecipientType.TO, addresses);
            } catch (MessagingException e) {
                LOG.error("批量添加收件人{}出错，详细信息为{}",addresses,e.getMessage());
            }

            // 4. Subject: 邮件主题
            try {
                message.setSubject(emailSubject, "UTF-8");
            } catch (MessagingException e) {
                LOG.error("添加邮件主题出错，详细信息为{}",e.getMessage());
            }

            // 5. Content: 邮件正文（可以使用html标签）
            try {
                message.setContent(content, "text/html;charset=UTF-8");
            } catch (MessagingException e) {
                LOG.error("添加邮件正文{}出错，详细信息为{}",content,e.getMessage());
            }

            // 6. 设置发件时间
            try {
                message.setSentDate(new Date());
            } catch (MessagingException e) {
                LOG.error("设置邮件发送时间出错，详细信息为{}",e.getMessage());
            }

            // 7. 保存设置
            try {
                message.saveChanges();
            } catch (MessagingException e) {
                LOG.error("保存邮件设置出错，详细信息为{}",e.getMessage());
            }
            return message;
        }else{
            return null;
        }
    }
}
