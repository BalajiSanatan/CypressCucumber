import registerPage from "../PageObject/registerPage"
///<reference types="cypress"/>
const regpage=new registerPage()

describe('register user',()=>{


    
    it('create user ',()=>{

        //register page
        cy.visit('https://demo.nopcommerce.com/')
        regpage.clickOn_register_lnk()
      //  cy.contains('Register').click()
       // cy.get('#gender-male').click()
        regpage.check_gender()
       // cy.get("[name='FirstName']").type('abcd')
        regpage.enterfirstName()
        regpage.enterlastName()
      //  cy.get("[name='LastName']").type('abcd')
       // cy.get("[name='Email']").type('abcdf1234@gmail.com')
        regpage.enterEmail()
       // cy.get("[name='Password']").type('abcd@123')
        regpage.enterpassword()
       // cy.get("[name='ConfirmPassword']").type('abcd@123')
        regpage.enterConfPassword()
       // cy.get('#register-button').click()
        regpage.clickOn_registerBtn()
        cy.contains('Your registration completed').should('be.visible')

        cy.contains('Continue').click()

        //login page
        cy.wait(8000)
       /* if(cy.get('.ico-logout').should('be.visible'))
        {
            cy.get('.ico-logout').click()
        }*/
        cy.wait(8000)
        cy.get('.ico-login').click()
        cy.get(".email").type('abcd7878@gmail.com')
        cy.get(".password").type('bala@123')
        cy.get('form > .buttons > .button-1').click()
      //  cy.contains('Log in').click()
        cy.wait(8000)
        cy.contains('Log out').should('be.visible')
       
        

        
        
    })

})