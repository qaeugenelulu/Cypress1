/// <reference types="cypress" />
import HomePage from "/Users/etimofeev/Desktop/automation/Cypress1/cypress/pages/HomePage.js";

describe("my first Home page suite", () => {
 /*beforeEach("open Home page", () => {
    HomePage.navigation();
  });  */

  it("Verify Header, meeganav with elements and the footer", () => {
    HomePage.navigation();
    HomePage.homePageLogo().should("be.visible");
    HomePage.signInLogo().should("be.visible");
    HomePage.wishLogo().should("be.visible");
    HomePage.countrylogo().should("be.visible");
    HomePage.megaNav().should("be.visible");
    HomePage.womenLink().should("be.visible");
    HomePage.womenLink().trigger('mouseover')
    HomePage.megaNavGrid().should("be.visible");
    HomePage.brandStatement().should("have.text",'Free shipping. Free returns.').and("be.visible");
    HomePage.footerNav().should("be.visible");

  });

  it("Verify that search field is available and type, verify Search page",()=>{
    HomePage.navigation();
    cy.get("[data-testid=nav-desktop-search]").type("pants{enter}");
    cy.get(".results-title").should("have.text",'Showing results for:');

  })
  it("Verify that guest can navigate from CDP to PDP", ()=>{
    cy.visit("/c/womens-leggings/");
    cy.get("[data-testid='product-tile']").first().click();
    cy.wait(9000);
    cy.get("[data-testid*='swatch-container'] .available").first().click();
    cy.get(
      "[data-testid='size-selector'] span[class*='sizeTile']:not([class*='Disabled']"
    ).first().click();
    cy.get("[type='button']").contains('Add to Bag').click();
    cy.get(".modal__inner").should("be.visible");
  })



 /* it("Verify We made too much page",()=>{
   cy.visit("/c/womens-leggings/_/N-8s6");

  }) */

});
