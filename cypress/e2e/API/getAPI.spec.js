import * as upcoming from '../../support/apiObjects/topRated.js';

describe('Top Rated Movies API', () => {

    context('GET : Top Rated Movie', () => {
        Cypress.config('baseUrl', "https://api.themoviedb.org/3/movie/")
        it('200 - Authorized', () => {
            upcoming.getTopRatedValid();
        });

        it('401 - Unauthorized', () => {
            upcoming.getTopRatedInvalid();
        });
    });
})