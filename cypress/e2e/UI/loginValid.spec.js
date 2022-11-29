import { LoginPage } from '../../support/pageObjects/loginPage'
import { DashboardPage } from '../../support/pageObjects/dashboardPage'
import { CommonPage } from '../../support/pageObjects/commonPage'

const testData = require('../../fixtures/testData');
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const commonPage = new CommonPage()

describe('Login - Valid Credentials', () => {
    before(function () {
        cy.visit('/')
        cy.fixture('testData').then((data) => {
            this.data = data;
        })
    })

    testData.validCredentials.forEach(element => {
        it('TC01: Verify Valid Login', function () {
            loginPage.enterTextInField("Email/Username", element.email)
            loginPage.enterTextInField("Password", element.password)
            loginPage.clickLogin().then(() => {
                dashboardPage.getProfileAvatar().should('be.visible')
                commonPage.verifyURLContains('/account/dashboard')
            })
        })

        it('TC02: Verify Logout take to Login', function () {
            dashboardPage.getProfileName().click().then(() => {
                dashboardPage.clickLogout()
                commonPage.verifyURLContains('/login')
                //loginPage.verifyErrorMessage("You have successfully logged out.")
            })
        })

        it('TC03: Verify UI Components', function () {
            loginPage.verifyUIComponentsDisplayed()
        })
    })

})