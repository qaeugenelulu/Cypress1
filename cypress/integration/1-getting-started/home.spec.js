/// <reference types="cypress" />
import HomePage from "/Users/etimofeev/Desktop/automation/Cypress1/cypress/pages/HomePage.js";



describe('my first Home page suite',()=> {

   it('open Home page and verify logo elements' ,()=>{

    cy.visit('/')

    HomePage.homePageLogo().should("be.visible");
    HomePage.signInLogo().should("be.visible");
    HomePage.wishLogo().should("be.visible");
    HomePage.countrylogo().should("be.visible")
    //HomePage.womenLink().click()

    cy.get('[data-testid=nav-desktop-search]').type('pants{enter}')




  })



 




})