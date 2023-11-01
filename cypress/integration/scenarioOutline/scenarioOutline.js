
import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('user goes to google', ()=>{
    cy.visit('https://google.com/')

})

And('user search {string} on searchbox', (capitals)=>{
    cy.get('.gLFyf').type(capitals)   
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()

})

And('verify that the {string} are searched', (capitals)=>{
    cy.title().should('contain', capitals)

})

