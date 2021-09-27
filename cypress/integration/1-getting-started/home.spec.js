/// <reference types="cypress" />
//import HomePage from "/Users/etimofeev/Desktop/automation/Cypress1/cypress/pages/HomePage.js";



   

   it ('home page open ' , ()=>{ 
   cy.visit('https://qa23.preprod.lululemon.com')  
   cy.get('.iblpc').should("be.visible")
   } )





 




