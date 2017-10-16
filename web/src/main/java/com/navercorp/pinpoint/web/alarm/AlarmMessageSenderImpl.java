/*
 * Copyright 2014 NAVER Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.navercorp.pinpoint.web.alarm;

import com.navercorp.pinpoint.web.alarm.checker.AlarmChecker;
import com.navercorp.pinpoint.web.service.EmailUtilService;
import com.navercorp.pinpoint.web.service.SmsSenderService;
import com.navercorp.pinpoint.web.service.UserGroupService;
import org.apache.commons.lang3.StringUtils;
import org.apache.velocity.app.VelocityEngine;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * @author minwoo.jung
 */
public class AlarmMessageSenderImpl implements AlarmMessageSender {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private UserGroupService userGroupService;
    @Autowired
    private SmsSenderService smsSenderService;
    @Autowired
    private EmailUtilService emailUtilService;
    @Autowired
    private VelocityEngine velocityEngine;

    @Override
    public void sendSms(AlarmChecker checker, int sequenceCount) {
        List<String> receivers = userGroupService.selectPhoneNumberOfMember(checker.getUserGroupId());

        if (receivers.size() == 0) {
            return;
        }

        try {
            for (String message : checker.getSmsMessage()) {
                logger.info("告警短信发送内容为 : {}", message);

                // TODO Implement logic for sending SMS
                if(StringUtils.isNoneBlank(message)) {
                    for (String phone: receivers){
                        smsSenderService.futureWirelessNormalSender(phone,message);
                    }
                }
            }
        }catch (Exception e) {
            logger.error("告警短信发送失败：{}",e.getMessage());
        }
    }

    @Override
    public void sendEmail(AlarmChecker checker, int sequenceCount) {
        List<String> receivers = userGroupService.selectEmailOfMember(checker.getUserGroupId());

        if (receivers.size() == 0) {
            return;
        }

        try {
            logger.info("告警邮件发送内容为 : {}", checker.getEmailMessage());
            // TODO Implement logic for sending email

            if(StringUtils.isNoneBlank(checker.getEmailMessage())) {
                emailUtilService.sendMultiEmailMessage(receivers,checker.getEmailMessage());
            }

        }catch (Exception e) {
            logger.error("告警邮件发送失败：{}",e.getMessage());
        }
    }

}
