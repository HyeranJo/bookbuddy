package com.bookbuddy.demo.global.controller;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Duration;
import java.util.List;

@RestController
@RequestMapping("/crawling")
public class CrawlingController {
    private WebDriver driver;
    private final String url = "https://product.kyobobook.co.kr/category/KOR/0801#?page=1&type=all&per=20&sort=new";
    private final String chromePath = "C:/chromedriver-win64/chromedriver.exe";

    @GetMapping
    public void process() throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", chromePath);
        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.addArguments("--remote-allow-origins=*");

        driver = new ChromeDriver(chromeOptions);
        driver.get(url);
        
        getDataList();
    }

    private void getDataList() throws InterruptedException {
        Thread.sleep(1000);

        WebDriverWait webDriverWait = new WebDriverWait(driver, Duration.ofSeconds(10));
        List<WebElement> productList = driver.findElements(By.className("prod_item"));
        for(WebElement element : productList) {
            System.out.println(element.getText());
        }
    }
}
