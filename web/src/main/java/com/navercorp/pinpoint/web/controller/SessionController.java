package com.navercorp.pinpoint.web.controller;

import com.navercorp.pinpoint.web.util.AuthUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by yanwen on 16-7-8.
 */
@Controller
@RequestMapping("/x")
public class SessionController {

    @RequestMapping("")
    public String index(HttpServletRequest request, HttpServletResponse response) {
        String authorization = request.getHeader("Authorization");
        if (!AuthUtils.isPassBasicAuth(authorization, "thisisusername", "thisispassword~")) {
            response.setHeader("WWW-Authenticate", "BASIC   realm=\"manage\"");
            response.setStatus(401);
            return null;
        } else {
            return "redirect:/index.html";
        }
    }
}
