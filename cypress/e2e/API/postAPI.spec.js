/// <reference types="Cypress" />
import * as rateMovie from '../../support/apiObjects/rateMovie.js';
describe('Rate Movies API', () => {
    context('GET : Upcoming Movie', () => {
        Cypress.config('baseUrl', "https://api.themoviedb.org/3/movie/")
        it('201 - Unauthorized', () => {
            rateMovie.postValid()
        });

        it('401 - Unauthorized', () => {
            rateMovie.postInvalid()
        });
    });
});