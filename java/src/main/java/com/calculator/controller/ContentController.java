package com.calculator.controller;


import com.calculator.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ContentController {

    @Autowired
    ContentService contentService;

    @GetMapping(value = "/getHomeContent")
    public String calculate(HttpServletRequest request) {
        return contentService.getContent();
    }


}
