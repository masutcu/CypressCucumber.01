import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('user goes page', ()=>{
    cy.visit('https://qa-environment.koalaresorthotels.com/')
    cy.get('#navLogon > .nav-link').click()
})

And('login with use data', (dataTable)=>{
    cy.get('#UserName').type(dataTable.rawTable[1][0])
    cy.get('#Password').type(dataTable.rawTable[1][1])
})

And('user clicks loginButton', ()=>{
    cy.get('#btnSubmit').click()
    
})

And('verify login', ()=>{
    cy.get('.username').should('contain.text','manager')
    
    
})

