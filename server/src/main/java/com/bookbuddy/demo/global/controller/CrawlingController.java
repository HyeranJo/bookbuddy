package com.bookbuddy.demo.global.controller;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class CrawlingController {
    private final String url = "https://product.kyobobook.co.kr/";
    private final String driverPath = "C:/chromedriver-win64/chromedriver.exe";
    public void process() {
        System.setProperty("webdriver.chrome.driver", driverPath);
        ChromeOptions chromeOptions = new ChromeOptions();

        WebDriver driver = new ChromeDriver(chromeOptions);

        driver.get(url);
    }
}
