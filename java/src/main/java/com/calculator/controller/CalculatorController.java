package com.calculator.controller;

import com.calculator.bean.Data;
import com.calculator.service.CalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CalculatorController {

    @Autowired
    CalculatorService calculatorService;
//
    @PostMapping(value = "/calculate")
    public String calculate(@RequestBody Data data, HttpServletRequest request) {
        return calculatorService.add(data);
    }

}
