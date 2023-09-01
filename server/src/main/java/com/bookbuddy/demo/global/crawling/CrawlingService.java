package com.bookbuddy.demo.global.crawling;

import com.bookbuddy.demo.book.entity.Book;
import com.bookbuddy.demo.book.repository.BookRepository;
import com.bookbuddy.demo.book.service.BookService;
import com.bookbuddy.demo.category.entity.Category;
import com.bookbuddy.demo.category.repository.CategoryRepository;
import com.bookbuddy.demo.category.service.CategoryService;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.By;
import org.openqa.selenium.ElementClickInterceptedException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Slf4j
@Service
public class CrawlingService {
    private final CategoryService categoryService;
    private final BookRepository bookRepository;
    private final BookService bookService;
    private WebDriver driver;
    private final String chromePath = "C:/chromedriver-win64/chromedriver.exe";

    public CrawlingService(CategoryService categoryService, BookRepository bookRepository, BookService bookService) {
        this.categoryService = categoryService;
        this.bookRepository = bookRepository;
        this.bookService = bookService;
    }

    public List<Book> process() throws InterruptedException, ParseException {
        System.setProperty("webdriver.chrome.driver", chromePath);
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");

        options.addArguments("--disable-popup-blocking");               // 팝업 안띄움
        options.addArguments("headless");                               // 브라우저 안띄움
        options.addArguments("--disable-gpu");			                // gpu 비활성화
        options.addArguments("--blink-settings=imagesEnabled=false");   // 이미지 안띄움

        driver = new ChromeDriver(options);
        driver.get("https://product.kyobobook.co.kr/category/KOR/08#?type=home");

        return getDataList();
    }

    public List<Book> getDataList() throws ParseException, InterruptedException {
        List<Book> bookList = new ArrayList<>();

        // 카테고리
        List<WebElement> categoryList = driver.findElements(By.className("snb_item"));
        for(WebElement categoryEl : categoryList) {
            String categoryName = categoryEl.getText();
            String categoryLink = categoryEl.findElement(By.className("snb_link")).getAttribute("href");
            Category category = new Category(categoryName, categoryLink);
            categoryService.createCategory(category);
        }

        List<Category> findCategorys = categoryService.findCategorys();
        for(Category category : findCategorys) {
            driver.get(category.getLink());
            Thread.sleep(1000);

            label:for(int i = 0; i <= 5; ++i) {
                // List 초기값 세팅
                List<WebElement> productList = driver.findElements(By.className("prod_item"));

                // 대기
                WebDriverWait webDriverWait = new WebDriverWait(driver, Duration.ofSeconds(10));
                webDriverWait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.className("prod_item")));

                for(WebElement element : productList) {
                    Thread.sleep(2);
                    // 아이디
                    String id = element.getAttribute("data-id");

                    if(bookService.isVerifiedBook(id)) {
                        bookList.add(bookService.findVerifyBook(id));
                        continue;
                    }
                    Thread.sleep(2);

                    // 책 이름
                    String name = element.findElement(By.className("prod_name")).getText();
                    Thread.sleep(2);

                    // 가격
                    String priceStr = element.findElement(By.className("price")).findElement(By.className("val")).getText()
                            .replaceAll(",", "");
                    int price = Integer.parseInt(priceStr);
                    Thread.sleep(2);

                    String[] info = element.findElement(By.className("prod_author")).getText().split(" · ");

                    String author = info[0]; // 작성자
                    String publisher = info[1]; // 출판사
                    String dateStr = info[2]; // 발행일
                    Thread.sleep(2);

                    SimpleDateFormat format = new SimpleDateFormat("yyyy.MM.dd");
                    Date date = new Date(format.parse(dateStr).getTime());
                    Thread.sleep(2);

                    // 이미지
                    String imgSrc = element.findElement(By.className("img_box")).findElement(By.tagName("img")).getAttribute("src");

                    // 인스턴스 생성
                    Book book = new Book(id, name, author, publisher, price, date, imgSrc, category);
                    Thread.sleep(2);

                    bookRepository.save(book);
                    bookList.add(book);
                }

                try {
                    driver.findElement(By.className("pagination")).findElement(By.className("next")).click();
                    Thread.sleep(3000);
                } catch (ElementClickInterceptedException e) {
                    break label;
                }
            }
        }

        return bookList;
    }
}
