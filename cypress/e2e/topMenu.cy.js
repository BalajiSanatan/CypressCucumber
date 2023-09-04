///<reference types="cypress"/>

describe('top menu',()=>{

    it('select menu',()=>{
      cy.viewport(1366,768)

        cy.visit("https://demo.nopcommerce.com")
      //  cy.contains('Computers').trigger('mouseover')
        cy.contains('Notebooks').click({force:true})
        cy.get('.button-2.product-box-add-to-cart-button').first().click()
        cy.get('.button-1.add-to-cart-button').click()
        cy.get('.button-1.cart-button').click({force:true})
        cy.get('.page-title').should('be.visible')
       // cy.wait(3000)
        cy.get('.qty-input').should('have.value',2)
        cy.get('button#updatecart').click()
        
      
    })
})