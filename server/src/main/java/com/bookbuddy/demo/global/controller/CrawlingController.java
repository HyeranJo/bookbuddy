package com.bookbuddy.demo.global.controller;

import com.bookbuddy.demo.book.entity.Book;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/crawling")
public class CrawlingController {
    private WebDriver driver;
    private final String url = "https://product.kyobobook.co.kr/category/KOR/0801#?page=1&type=all&per=20&sort=new";
    private final String chromePath = "C:/chromedriver-win64/chromedriver.exe";

    @GetMapping
    public ResponseEntity process() throws InterruptedException, JsonProcessingException, ParseException {
        System.setProperty("webdriver.chrome.driver", chromePath);
        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.addArguments("--remote-allow-origins=*");
        chromeOptions.addArguments("headless");

        driver = new ChromeDriver(chromeOptions);
        driver.get(url);

        ObjectMapper objectMapper = new ObjectMapper();
        List<Book> response = getDataList();

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    private List<Book> getDataList() throws InterruptedException, ParseException {
        Thread.sleep(100);

        WebDriverWait webDriverWait = new WebDriverWait(driver, Duration.ofSeconds(10));
        List<WebElement> productList = driver.findElements(By.className("prod_item"));
        List<Book> bookList = new ArrayList<>();
        long id = 0;
        for(WebElement element : productList) {
            String name = element.findElement(By.className("prod_name")).getText();

            String priceStr = element.findElement(By.cssSelector(".price .val")).getText()
                    .replaceAll(",", "");
            int price = Integer.parseInt(priceStr);

            String[] author = element.findElement(By.cssSelector(".prod_author")).getText().split(" · ");

            String writer = author[0];
            String publisher = author[1];
            String dateStr = author[2];

            SimpleDateFormat format = new SimpleDateFormat("yyyy.MM.dd");
            Date date = new Date(format.parse(dateStr).getTime());

            Book book = new Book(++id, name, writer, publisher, price, date);
            bookList.add(book);
        }
        return bookList;
    }
}
