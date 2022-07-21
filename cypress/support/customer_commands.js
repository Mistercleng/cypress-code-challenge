/// <reference types="Cypress" />

Cypress.Commands.add('customerLogin', () => {
    cy.visit('/#/customer')
    cy.get('#userSelect').should('be.visible')
    cy.get('#userSelect').select('Harry Potter')
    cy.get('form').submit()
    cy.contains('Harry Potter').should('be.visible')
})

Cypress.Commands.add('deposit', (number) => {
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('[ng-model="amount"]').type(number)
    cy.get('[type=submit]').click()
})

Cypress.Commands.add('withdrawl', (number) => {
    cy.get('[ng-class="btnClass3"]').click()
    cy.contains('Amount to be Withdrawn :').next('[ng-model="amount"]').type(number)
    cy.contains('Amount to be Withdrawn :')
    cy.get('[type=submit]').should('have.text','Withdraw')
    cy.get('[type=submit]').click()
})