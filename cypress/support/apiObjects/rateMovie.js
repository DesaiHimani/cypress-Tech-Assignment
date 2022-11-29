
/// <reference types="Cypress" />
import { movieId, apiKey, guestSessionId } from '../../fixtures/apiData.json';
import { default as ENDPOINTS } from '../../fixtures/endpoints';

const movieRating = 9;

 export function postValid(){
    cy.request({
    method: 'POST',
    url: movieId + ENDPOINTS.rateMovie,
    qs: {
        api_key: apiKey,
        guest_session_id: guestSessionId
    },
    body: { "value": movieRating }
})
    .should((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).property('status_message').eq('The item/record was updated successfully.')
        cy.log(JSON.stringify(response.body))
    });
}

export function postInvalid(){
    cy.request({
        method: 'POST',
        url: movieId + ENDPOINTS.rateMovie,
        qs: {
            api_key: apiKey+'123',
            guest_session_id: guestSessionId
        },
        body: { "value": movieRating },
        failOnStatusCode: false
    })
        .should((response) => {
            expect(response.status).to.eq(401)
            expect(response.body).property('status_message').eq('Invalid API key: You must be granted a valid key.')
            cy.log(JSON.stringify(response.body))
        });
}