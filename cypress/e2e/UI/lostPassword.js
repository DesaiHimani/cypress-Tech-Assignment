import { CommonPage } from '../../support/pageObjects/commonPage';
import { LoginPage } from '../../support/pageObjects/loginPage'
import { LostPasswordPage } from '../../support/pageObjects/lostPasswordPage'

const testData = require('../../fixtures/testData');
const lostPasswordPage = new LostPasswordPage()
const loginPage = new LoginPage()
const commonPage = new CommonPage()

describe('Lost Password', () => {
    before(function () {
        cy.visit('/')
    })

    testData.validCredentials.forEach(element => {
        it('TC05: Verify Lost Password Page', function () {
            loginPage.clickLostPassword()
            commonPage.verifyURLContains('/forgotPassword')
            lostPasswordPage.clickSendInstructions().then(()=>{
                lostPasswordPage.verifyErrorText();
            })

        })
    })
})