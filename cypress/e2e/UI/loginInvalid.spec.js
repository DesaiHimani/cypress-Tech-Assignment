import { LoginPage } from '../../support/pageObjects/loginPage'

const testData = require('../../fixtures/testData');
const loginPage = new LoginPage()

describe('Login - Invalid Credentials', () => {
    before(function () {
        cy.visit('/')
        cy.fixture('testData').then((data) => {
            this.data = data;
        })
    })


    testData.invalidCredentials.forEach(element => {
        it('TC04: Verify Error When Invalid Credentials', function () {
            loginPage.enterTextInField("Email/Username", element + "test")
            loginPage.enterTextInField("Password", " ")
            loginPage.clickLogin().then(() => {
                loginPage.verifyErrorMessage(element.error)
            })
        })
    })

})