class register{

    //page locators
   gender_male_radioBtn='#gender-male'
   firstName="[name='FirstName']"
   lastName= "[name='LastName']"
   email="[name='Email']"
   psd= "[name='Password']"
   conPsd="[name='ConfirmPassword']"

//page actions
check_gender()
{
    cy.get(this.gender_male_radioBtn).click()


}
enterfirstName()
{
    cy.get(this.firstName).type('abcdght')
   // this.firstName
}
enterlastName()
{
    cy.get(this.lastName).type('abcdght')

    
}

enterEmail()
{
    cy.get(this.email).type('abcd7878@gmail.com')

    
}
enterpassword()
{
    cy.get(this.psd).type('bala@123')
       
}
enterConfPassword()
{
    cy.get(this.conPsd).type('bala@123')
   
}
    clickOn_register_lnk()
    {
        cy.contains('Register').click()
        
    }
    clickOn_registerBtn()
     {
            cy.get('#register-button').click()
     }

    clickOnContinueBtn()
    {
        cy.contains('Continue').click()
    } 
    
   
    
}
export default register

