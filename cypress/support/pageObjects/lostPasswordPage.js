export class LostPasswordPage {

    elements = {

        btnSendPassword: () => cy.get('#sendPassword'),

        error: () => cy.get('.parsley-required')
    }

    //Methods
    clickSendInstructions() {
        return this.elements.btnSendPassword().should('be.visible').click()
    }

    verifyErrorText() {
        this.elements.error().contains('This field is required.').should('be.visible')
        this.elements.error().contains('This value is required.').should('be.visible')
    }
}