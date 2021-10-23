/// <reference types="cypress" />
//import { should } from "chai";
//import { first } from "cypress/types/lodash";
import HomePage from "/Users/etimofeev/Desktop/automation/Cypress1/cypress/pages/HomePage.js";
import ProductDisplayPage from "/Users/etimofeev/Desktop/automation/Cypress1/cypress/pages/ProductDisplayPage";
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
    cy.wait(9000);
    cy.get("[data-testid='product-tile']").first().click();
    cy.wait(9000);
    ProductDisplayPage.productName().should('be.visible') ;
    ProductDisplayPage.productPrice().should('be.visible') ;
    
  })


it.only("Verify Guest is able to use BOPIS at PDP",()=>{
 cy.visit("/p/womens-leggings/Align-Pant-2/_/prod2020015?locale=en_CA&sl=CA");

 ProductDisplayPage.colorSwatch().first().click();
 ProductDisplayPage.sizeSelector().first().click();

 ProductDisplayPage.bopisLink().should('be.visible');
 ProductDisplayPage.bopisLink().click();
 ProductDisplayPage.bopisModal().should('be.visible') ;
 ProductDisplayPage.bopisSearchBar().type('Vancouver{enter}');
 cy.wait(3000);
 ProductDisplayPage.bopisDistance().click();
 
 ProductDisplayPage.distanceSelector().contains('125').click();
 cy.wait(3000);
 ProductDisplayPage.storeSelector().first().click();
 ProductDisplayPage.buttonSelectStore().should("be.visible").click();
 ProductDisplayPage.buttonAddBopis().should("contain",'Add to pick up at-store').click();
 cy.wait(3000);
 ProductDisplayPage.buyModal().should("be.visible").should("contain",'Order before 5pm and pick up today');

})

 /* it("Verify We made too much page",()=>{
   cy.visit("/c/womens-leggings/_/N-8s6");

  }) */

});
