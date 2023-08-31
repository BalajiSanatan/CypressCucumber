///<reference types="cypress"/>

describe('top menu',()=>{

    it('select menu',()=>{
      cy.viewport(1366,768)

        cy.visit("https://demo.nopcommerce.com")
      //  cy.contains('Computers').trigger('mouseover')
        cy.contains('Notebooks').click({force:true})
        cy.get('.button-2.product-box-add-to-cart-button').first().click()
        //cy.contains('ADD TO CART').eq(4).click()
        

      /*  cy.visit('https://www.amazon.com/')
        cy.get('[data-csa-c-content-id="nav_ya_signin"]').trigger('mouseover')
        cy.contains('Create a List').click()
        cy.url().should('include','wishlist/intro')*/
    })
})