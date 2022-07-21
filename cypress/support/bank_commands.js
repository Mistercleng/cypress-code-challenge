/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';

Cypress.Commands.add('addCustomer', () => {
    cy.visit('/#/manager')
    cy.get('[ng-class="btnClass1"]').should('be.visible')
    cy.get('[ng-class="btnClass1"]').click()
    cy.get('[ng-model="fName"]').focus().type(faker.name.firstName())
    cy.get('[ng-model="lName"]').focus().type(faker.name.lastName())
    cy.get('[ng-model="postCd"]').focus().type(faker.address.zipCode())
    cy.get('form.ng-dirty > .btn').click()

})

Cypress.Commands.add('openAccount', () => {
    cy.visit('/#/manager')
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('#userSelect').select('Neville Longbottom')
    cy.get('#currency').select('Dollar')
    cy.get('form').submit()
})