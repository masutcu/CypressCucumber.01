import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('user goes url', ()=>{
    cy.visit('https://www.kitapyurdu.com/')

})

And('clicks to login button', ()=>{
    cy.get('.login > a').click()

})

And('user enters username and psw', ()=>{
    
    cy.get('#login-email').type('masutcu@gmail.com')
    cy.wait(2000)
    //açılan pencere kabul ediliyor
    cy.get('#cookiescript_accept').click()
    cy.wait(2000)

    cy.get('#login-password').type('Litvanya')
    cy.wait(2000)
    cy.get('.ky-btn-orange').click()

})

And('verify that user login succesfully', ()=>{
    cy.get('b').should('include.text','Mehmet')
    cy.get('b').should('include.text','Sutcu')

})

