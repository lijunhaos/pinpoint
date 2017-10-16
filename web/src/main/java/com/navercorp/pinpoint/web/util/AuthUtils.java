package com.navercorp.pinpoint.web.util;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.StringUtils;

public class AuthUtils {

  public static boolean isPassBasicAuth(String authStr, final String username, final String pwd) {
    if (StringUtils.isBlank(authStr) || !authStr.startsWith("Basic")) {
      return false;
    } else {
      authStr = authStr.substring(authStr.indexOf(' ') + 1);
      byte[] bytes = null;
      Base64 base64 = new Base64();
      bytes = base64.decode(authStr);
      authStr = new String(bytes);
      String name = authStr.substring(0, authStr.indexOf(':'));
      String password = authStr.substring(authStr.indexOf(':') + 1);
      if (!(name.equals(username) && password.equals(pwd))) {
        return false;
      }
    }
    return true;
  }

}
