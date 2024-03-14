import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("button#navbarAccount");
  }

  static get loginButton() {
    return cy.get("button#navbarLoginButton");
  }

  static get progileMenuoption() {
    return cy.get("button[aria-label='Go to user profile']")
  }

  // search
  static get search() {
    return cy.get("#searchQuery")
  }

  static get searchField() {
    return cy.get("#mat-input-0")
  }

  // productCard
  static get productCard() {
    return cy.get("[class='item-name']");
  }

  static get content() {
    return cy.get("[class='mat-dialog-content']");
  }

  static get closeCard() {
    return cy.get("button[aria-label='Close Dialog']");
  }

  // comment
  static get rewiew() {
    return cy.get("[aria-label='Expand for Reviews']");
  }

  static get rewiewCom() {
    return cy.get('div.comment');
  }

  static get writeRewiew() { 
    return cy.get('[aria-label="Text field to review a product"]');
  }

  static get submitButton() {
    return cy.get("#submitButton");
  }

  //card count
  static get howManyCards() {
    return cy.get('[class="mat-paginator-range-label"]');
  }

  static get chooseAmountOfCards() {
    return cy.get("#mat-select-0" || "#mat-select-1" || "#mat-select-2");
  }

  static get changeAmountofCards24() {
    return cy.get("#mat-option-1")
  }

  static get changeAmountofCards36() {
    return cy.get("#mat-option-2")
  }

  //basket
  static get addShirtToBasket() {
    return cy.get('[aria-label="Add to Basket"]');
  }

  static get yourBasket() {
    return cy.get('[aria-label="Show the shopping cart"]');
  }
  
  //add adress
  static get orderANDpaymentButton() {
    return cy.get('[aria-label="Show Orders and Payment Menu"][role="menuitem"]');
  }

  static get mySavedAddresess() {
    return cy.get('[aria-label="Go to saved address page"]');
  }

}
