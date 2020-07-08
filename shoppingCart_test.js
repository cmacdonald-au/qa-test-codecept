Feature('shoppingCart');

Scenario('Launch Harvey Norman Home Page', (I) => {
    I.amOnPage('/')
    //Verify user is on Harvey Norman HomePage
    I.see('Harvey Norman')
    I.wait(5)
    I.click({xpath: "//*[@id='category-grid']/div[1]/div/div[3]/a"})
    I.wait(5)
    I.click({xpath: "//button[@id='btn-add-to-cart']"})
    I.wait(5)
    I.click({xpath: "//*[@id='btn_checkout']"})
    I.wait(5)
    //Verify user is on Shopping Cart Page
    I.see('HP 14-inch A4/4GB/128GB SSD Laptop - Natural Silver')
    I.saveScreenshot("addcart.jpg")
});
