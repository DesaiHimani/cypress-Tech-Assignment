export class CommonPage {

    elements = {
        
    }


    //Methods
    verifyURLContains(urlToVerify){
     cy.url().should('include',urlToVerify)
    }

    
}