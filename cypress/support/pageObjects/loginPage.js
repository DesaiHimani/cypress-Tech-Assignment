export class LoginPage {

    elements = {
        txtUsername: () => cy.get('#inputEmail'),

        txtPassword: () => cy.get('#inputPassword'),

        txtWithPlaceholder: (label) => cy.get('input[placeholder="' + label + '"]'),

        linkLostPassword: () => cy.get('.lost-password a'),

        btnLogin: () => cy.get('button[type="submit"]'),

        msgBox: () => cy.get('.cbox_messagebox'),

        notification: () => cy.get('.notification h1'),

        btnSupport : () => cy.get('#custom-support-form-button'),

        listLanguage : () => cy.get('.admin-options'),

        logoBynder : () => cy.get('.admin-bar-logo'),

        logoAccount : () => cy.get('.account-logo'),


    }

    //Methods
    clickLogin() {
        return this.elements.btnLogin().should('be.visible').click()
    }

    enterTextInField(fieldName, value) {
        return this.elements.txtWithPlaceholder(fieldName).should('be.enabled').type(value)
    }

    verifyErrorMessage(errorText) {
        this.elements.msgBox().should('have.text', errorText)
    }

    clickLostPassword() {
        this.elements.linkLostPassword().should('be.visible').click()
    }

    verifyUIComponentsDisplayed(){
        this.elements.logoBynder().should('be.visible')
        this.elements.listLanguage().should('be.visible')
        this.elements.btnSupport().should('be.visible')
        this.elements.logoAccount().should('be.visible')
    }

}