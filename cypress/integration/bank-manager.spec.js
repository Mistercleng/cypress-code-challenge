describe('Bank Manager Customers Accounts', ()=> {

    it('should add new user', ()=> {
        cy.addCustomer()
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('Customer added successfully with customer id :6');
         })
    })

    it('should open an Account', ()=> {
        cy.openAccount()
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('Account created successfully with account Number :1016');
         })
    })

})