import { BasketPage } from "../pageObjects/BasketPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { RegistrationPage } from "../pageObjects/RegistrarionPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";
import { BasePage } from "../pageObjects/basePage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.progileMenuoption.should("contain", "demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      RegistrationPage.notAcostumer.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      const genEmail = `email_${Math.round((Math.random() * 100) + 100)}@ebox.com`;
      RegistrationPage.emailField.type(genEmail);
      // Save that email address to some variable
      let myEmail = genEmail;
      // Fill in password field and repeat password field with same password
      const genPassword = `qwerty${Math.round((Math.random() * 100) + 100)}`;
      let myPassword = genPassword;

      RegistrationPage.passwordField.type(genPassword);
      RegistrationPage.repeatPasswordField.type(genPassword);
      // Click on Security Question menu
      RegistrationPage.sequrityQuestionButton.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.sequrityQuestion.click();
      // Fill in answer
      RegistrationPage.answerField.type("oksi");
      // Click Register button
      RegistrationPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(myEmail);
      // Set password value to previously used password value
      LoginPage.passwordField.type(myPassword);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.progileMenuoption.should("contain", myEmail);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.search.click();
      // Search for Lemon
      HomePage.searchField.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCard.click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.content.should("contain" , "Sour but full of vitamins.");
    });
    
    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml", () =>{
      // Click on search icon
      HomePage.search.click();
      // Search for 500ml
      HomePage.searchField.type("500ml{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCard.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.content.should("contain" , "Sour but full of vitamins.");
    });
    
    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
      // Click on search icon
        HomePage.search.click();
        // Search for 500ml
        HomePage.searchField.type("500ml{enter}");
        // Select a product card - Eggfruit Juice (500ml)
        HomePage.productCard.contains("Eggfruit Juice (500ml)").click();
        // Validate that the card (should) contains "Now with even more exotic flavour."
        HomePage.content.should("contain" , "Now with even more exotic flavour.");
        // Close the card
        HomePage.closeCard.click();
        // Select a product card - Lemon Juice (500ml)
        HomePage.productCard.contains("Lemon Juice (500ml)").click();
        // Validate that the card (should) contains "Sour but full of vitamins."
        HomePage.content.should("contain" , "Sour but full of vitamins.");
        // Close the card
        HomePage.closeCard.click();
        // Select a product card - Strawberry Juice (500ml)
        HomePage.productCard.contains("Strawberry Juice (500ml)").click();
        // Validate that the card (should) contains "Sweet & tasty!"
        HomePage.content.should("contain" , "Sweet & tasty!");
    });
    
    // Create scenario - Read a review
    it("Read a review", () => {
      // Click on search icon
      HomePage.search.click();
      // Search for King
      HomePage.searchField.type("King{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productCard.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.rewiew.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.rewiewCom.should("contain", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    });
    
    // Create scenario - Add a review
    it("Add a review", () => {
      // Click on search icon
      HomePage.search.click();
      // Search for Raspberry
      HomePage.searchField.type("Raspberry{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productCard.contains('Raspberry Juice (1000ml)').click();
      // Type in review - "Tastes like metal"
      HomePage.writeRewiew.type("Tastes like metal");
      // Click Submit
      HomePage.submitButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.rewiew.click();
      // Validate review -  "Tastes like metal"
      HomePage.rewiewCom.should("contain", "Tastes like metal");
    })
    
    
    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
      // Validate that the default amount of cards is 12
      HomePage.howManyCards.should("have.text", " 1 – 12 of 35 ");
      // Change items per page (at the bottom of page) to 24
      HomePage.chooseAmountOfCards.click();
      HomePage.changeAmountofCards24.click();
      // Validate that the amount of cards is 24
      HomePage.howManyCards.should("have.text", " 1 – 24 of 35 ");
      // Change items per page (at the bottom of page) to 36
      HomePage.chooseAmountOfCards.click();
      HomePage.changeAmountofCards36.click();
      // Validate that the amount of cards is 35
      HomePage.howManyCards.should("have.text", " 1 – 35 of 35 ");
    })

    
    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt", () => {
      // Click on search icon
      HomePage.search.click();
      // Search for Girlie
      HomePage.searchField.type("Girlie{enter}");
      // Add to basket "Girlie"
      HomePage.addShirtToBasket.click();
      // Click on "Your Basket" button
      HomePage.yourBasket.click();
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkOutButton.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.selectAddress.contains("United Fakedom").click();
      // Click Continue button
      BasketPage.continueButton.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.chooseDelivery.contains(" Standard Delivery").click();
      // Click Continue button
      DeliveryMethodPage.continueButton.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.selectAcard.click();
      // Click Continue button
      PaymentOptionsPage.continueButton.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.checkoutButton.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!" 
      OrderCompletionPage.confimation.contains("Thank you for your purchase!");
    })
    
    
    // Create scenario - Add address
    it.only("Add address", () => {
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.orderANDpaymentButton.click();
      // Click on My saved addresses
      HomePage.mySavedAddresess.click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.addNewAdress.click();
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      CreateAddressPage.countryField.type("Latvija");
      CreateAddressPage.nameField.type("Ilja Avlass");
      CreateAddressPage.phoneField.type("28282828");
      CreateAddressPage.zipCodeField.type("LV-3602");
      CreateAddressPage.addressField.type("P.Stradina222222");
      CreateAddressPage.cityField.type("Ventspils");
      CreateAddressPage.stateField.type("Kurzeme");
      // Click Submit button
      CreateAddressPage.submitButton.click();
      // Validate that previously added address is visible
      SelectAddressPage.selectAddress.should("contain", "Latvija");
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // Create scenario - Add payment option
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list
    
    
    
    
    
    
    
    
    


    

    
  });
});
