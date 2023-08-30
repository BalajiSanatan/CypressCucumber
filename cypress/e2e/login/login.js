import {Before,Given,When,Then} from "cypress-cucumber-preprocessor/steps"


import login from "../../PageObject/loginPage"

const loginpge=new login()
let uemail
let upass

Before(()=>{
    cy.fixture('loginData.json').then((data)=>{
         uemail=data.emailId
         upass=data.password

    })
})
///<reference types="cypress"/>



Given("user on login page",()=>{
    
    cy.visit("https://demo.nopcommerce.com/")

})

When('user type username and password',()=>{

    cy.log(uemail)
    cy.log(upass)
    loginpge.clickOnLoginLink()
    loginpge.enterEmailId(uemail)
    loginpge.enterPassword(upass)
   loginpge.clickOnLoginBtn()
})

Then('user should be on home page',()=>{
    loginpge.verifyLoginMsg()
       
})