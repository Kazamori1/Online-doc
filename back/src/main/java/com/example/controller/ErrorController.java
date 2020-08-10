package com.example.controller;

import com.example.entity.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ErrorController {

    @RequestMapping("/unLogin")
    public Result frequentOperation() {

        return Result.create(401, "登录过期，请重新登录");
    }

}