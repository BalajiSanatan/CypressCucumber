export default class login{

    //page locators
    login_lnk='.ico-login'
    emailId='#Email'
    password='#Password'
    loginBtn='.button-1.login-button'

    //page action
    clickOnLoginLink()
    {
        cy.get(this.login_lnk).click()
    }
    enterEmailId(emailu)
    {
        cy.get(this.emailId).type(emailu)
    }
    enterPassword(passu)
    {
        cy.get(this.password).type(passu)
    }
    clickOnLoginBtn()
    {
        cy.get(this.loginBtn).click()
    }

    verifyLoginMsg()
    {
        cy.contains('Log out').should('be.visible')
    }
   
}