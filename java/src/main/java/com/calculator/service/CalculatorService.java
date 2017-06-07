package com.calculator.service;

import com.calculator.bean.Data;
import org.springframework.stereotype.Service;

@Service
public class CalculatorService {

    public String add(Data data){
        Integer res = Integer.parseInt(data.getVal1()) + Integer.parseInt(data.getVal2());
        return res.toString();
    }
}
