
export default class ProductDisplayPage {

    static productName(){
        return cy.get("[itemprop='name']");
    }

    static productPrice(){
        return cy.get('[class="col-xs-12 price-wrapper"] .price-1jnQj');
    }

   static bopisLink(){
       return cy.contains('Check All Store Inventory');
   }
   static colorSwatch(){
       return cy.get("[data-testid*='swatch-container'] .available");
    
   }

   static sizeSelector(){
       return cy.
       get( "[data-testid='size-selector'] span[class*='sizeTile']:not([class*='Disabled']");
   }
   
   static bopisModal(){
     return cy.get("[class*='modal-2BrZH']") ;
   }
   static bopisSearchBar(){
       return cy.get('#bopis-searchbar');
       
   }

   static bopisDistance(){
       return cy.get("[class*='filter-result-bar__distance-dropdown']");
   }
   static distanceSelector(){
    return cy.get("[id='customDistance']");
   }

   static buttonSelectStore(){
       return cy.get("[class*='modal__select-btn--visible']");
   }

   static buttonAddBopis(){
       return cy.get("[class*='buttonPrimary-1m-xO']");
   }

   static storeSelector(){
       return cy.get("[class*='store-list-radio-button']");
   }

   static buyModal(){
       return cy.get("[class*='modal__inner-wrapper']");
   }
}