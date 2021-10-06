/// <reference types="cypress" />
import HomePage from "/Users/etimofeev/Desktop/automation/Cypress1/cypress/pages/HomePage.js";

describe("my first Home page suite", () => {
  beforeEach("open Home page", () => {
    HomePage.navigation();
  });

  it("open Home page and verify logo elements", () => {
    HomePage.homePageLogo().should("be.visible");
    HomePage.signInLogo().should("be.visible");
    HomePage.wishLogo().should("be.visible");
    HomePage.countrylogo().should("be.visible");
    HomePage.brandStatement()
    .should("have.text",'Free shipping. Free returns.')
    .and("be.visible");

  });

  it("Verify that search field is available and type, verify Search page",()=>{

    cy.get("[data-testid=nav-desktop-search]").type("pants{enter}");
    cy.contains("Showing results for:").should("be.visible");

  })
});
