package com.bookbuddy.demo.global.controller;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.book.repository.BookRepository;
import com.bookbuddy.demo.member.repository.MemberRepository;
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
    private final BookRepository bookRepository;
    private WebDriver driver;
    private final String url = "https://product.kyobobook.co.kr/category/KOR/0801#?page=1&type=all&per=20&sort=new";
    private final String chromePath = "C:/chromedriver-win64/chromedriver.exe";

    public CrawlingController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public void process() throws InterruptedException, JsonProcessingException, ParseException {
        System.setProperty("webdriver.chrome.driver", chromePath);
        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.addArguments("--remote-allow-origins=*");
        chromeOptions.addArguments("headless");

        driver = new ChromeDriver(chromeOptions);
        driver.get(url);

        getDataList();
    }

    private void getDataList() throws InterruptedException, ParseException {
        WebDriverWait webDriverWait = new WebDriverWait(driver, Duration.ofSeconds(10));
        List<WebElement> productList = driver.findElements(By.className("prod_item"));
        long id = 0;

        int page = 1;
        int endPage = 5;
        while(page <= endPage) {
            for(WebElement element : productList) {
                String name = element.findElement(By.className("prod_name")).getText();

                String priceStr = element.findElement(By.cssSelector(".price .val")).getText()
                        .replaceAll(",", "");
                int price = Integer.parseInt(priceStr);

                String[] authorStr = element.findElement(By.cssSelector(".prod_author")).getText().split(" · ");

                String author = authorStr[0];
                String publisher = authorStr[1];
                String dateStr = authorStr[2];

                SimpleDateFormat format = new SimpleDateFormat("yyyy.MM.dd");
                Date date = new Date(format.parse(dateStr).getTime());

                String imgSrc = element.findElement(By.cssSelector(".img_box img")).getAttribute("src");

                Book book = new Book(++id, name, author, publisher, price, date, imgSrc);
                bookRepository.save(book);

            }
            ++page;
           // driver.findElement(By.cssSelector(".btn_page.next")).click();
        }
    }
}
