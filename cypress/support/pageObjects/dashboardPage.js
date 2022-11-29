export class DashboardPage {

    elements = {
        labelProfileAvatar: () => cy.get('a div.avatar'),

        lnkAssets : () => cy.get('a[title="Assets"]'),

        labelProfileName : ()=> cy.get('a[class="admin-dropdown profile"]'),

        btnLogout : () => cy.get('button').contains('Logout')
    }


    //Methods
    getProfileAvatar(){
        return this.elements.labelProfileAvatar();
    }

    getAssetsLink(){
        return this.elements.lnkAssets();
    }

    getProfileName(){
        return this.elements.labelProfileName();
    }

    clickLogout(){
        return this.elements.btnLogout().click()
    }

}