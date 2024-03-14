import { BasePage } from "../pageObjects/basePage";

export class RegistrationPage extends BasePage {
    static get url() {
      return "/#/register";
    }

    static get notAcostumer() {
        return cy.get("#newCustomerLink");
    }

    static get emailField() {
        return cy.get("#emailControl");
    }

    static get passwordField() {
        return cy.get("#passwordControl");
    }

    static get repeatPasswordField() {
        return cy.get("#repeatPasswordControl");
    }

    static get sequrityQuestionButton() {
        return cy.get("[name='securityQuestion']");
    }

    static get sequrityQuestion() {
        return cy.get("#mat-option-9");
    }

    static get answerField() {
        return cy.get("#securityAnswerControl");
    }

    static get registerButton() {
        return cy.get("#registerButton")
    }

}
 