const erroMsg = "Transaction Failed. You can not withdraw amount more than the balance.";

describe('Customer Transactions', ()=> {
    it('should make a deposit with a positive value', ()=> {
        cy.customerLogin()
        cy.deposit(4)
        cy.get('[ng-show=message]').should('be.visible')
    })
    it('should fail when make a deposit with a negative value', ()=> {
        cy.customerLogin()
        cy.deposit(-4)
        cy.get('[ng-show=message]').should('not.be.visible')
    })

    it('should make a debit with a positive value', ()=> {
        cy.customerLogin()
        cy.withdrawl(2)
        cy.get('[ng-show=message]').should('be.visible')
    })

    it('should make a debit with a negative value', ()=> {
        cy.customerLogin()
        cy.withdrawl(-2)
        cy.get('[ng-show=message]').should('not.be.visible')
    })

    it('should make a debit grander than the balance', ()=> {
        cy.customerLogin()
        cy.deposit(4)
        cy.withdrawl(5)
        cy.get('[ng-show=message]').should('have.text',erroMsg)
    })

})