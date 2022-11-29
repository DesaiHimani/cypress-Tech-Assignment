/// <reference types="Cypress" />
import { apiKey } from '../../fixtures/apiData.json';
import { default as ENDPOINTS } from '../../fixtures/endpoints';

export function getTopRatedValid(){
    cy.request({
        method: 'GET',
        url: ENDPOINTS.upcoming,
        qs: {api_key: apiKey}
    })
        .should((response) => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        });
}

export function getTopRatedInvalid(){
    cy.request({
        method: 'GET',
        url: ENDPOINTS.upcoming,
        qs: {api_key: '123456'},
        failOnStatusCode: false
    })
        .should((response) => {
            expect(response.status).to.eq(401)
            expect(response.body).property('status_message').eq('Invalid API key: You must be granted a valid key.')
            cy.log(JSON.stringify(response.body))
        });
}