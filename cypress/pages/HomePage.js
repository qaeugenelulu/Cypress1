//import { describe } from "mocha";

export default class HomePage {

 static homePageLogo() {
    return cy.get(".mega-nav_logo__13GOX");
  }

  static signInLogo(){
      return cy.get('.iconComponents_underline__37kK3')
  }

  static wishLogo(){
      return cy.get('[class="anchor_anchor__1pPYT iconComponents_iconWrapper__S6T-1 lll-text-body-3"]')

  }

  static countrylogo(){
         return  cy.get('[data-testid=desktop-region-selector] > .iconComponents_underline__37kK3')
  }
  static womenLink(){
    return  cy.get(':nth-child(1) > [data-testid=nav-desktop-l1]')
  }
   
  static navigation(){
    cy.visit('/')
  }

  static brandStatement(){
    return cy.get(".global-brand-statement_headlineText__3LLif");
  }

  static megaNav(){
    return cy.get("[data-testid='nav-desktop']");
  }

  static footerNav(){
    return cy.get(".footer_primaryMenu__1kS1C");
  }

  static megaNavGrid(){
    return cy.get(".detailed_detailNavIner__1r3z6");
  }
}