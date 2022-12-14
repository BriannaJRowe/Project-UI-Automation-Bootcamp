/// <reference types="cypress" />
import Gallery from '../page/Gallery.page'

describe('Contact', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#signInOrRegister').click();

        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {
                cy.get('li[class="auth0-lock-tabs-current"]');
                cy.get('input[name="email"]').type('annxsivan@gmail.com');
                cy.get('input[name="password"]').type('P@ssword12');
                cy.get('button[id="1-submit"]').click();
                }
        );
    })

    //Test Case: Verify home page content
        xit('Should take the user to the products home page', () => {
            cy.url().should('eq', 'https://ui-automation-camp.vercel.app/products')
            cy.wait(5000);
            cy.get(Gallery.Navheader).should('have.text', 'Automation Camp Store')
            cy.get(Gallery.producttitle).should('have.text', 'Products')
            cy.get(Gallery.description).should('have.text', 'Shop for wide range of womens and mens clothing for the latest fashion trends you can totally do your thing in, with 100s of new styles landing every day! All that is free!')
        })

        //Test Case: Verify that the user can sign out
        xit('Should take the user back to the landing page', () => {
            cy.get(Gallery.signout).click();
            cy.url().should('eq', 'https://ui-automation-camp.vercel.app/')

        })

        //Test Case: Verify that the iFrame is loaded
        it('Should verify that the iFrame is loaded', () => {
            /*cy.wait(5000)
            cy.get(Gallery.iframe).click()

            cy.origin(
                "https://www.youtube.com/watch?v=JSda4u5jFFk&embeds_euri=https%3A%2F%2Fui-automation-camp.vercel.app%2F&source_ve_path=MjM4NTE&feature=emb_title",
                { args: {} },
                ({}) => {
                    cy.url().should('include', 'https://www.youtube.com/watch')
                    
                    }
            );*/
            cy.frameLoaded(Gallery.iframe, { url: 'https://www.youtube.com/watch?v=JSda4u5jFFk&embeds_euri=https%3A%2F%2Fui-automation-camp.vercel.app%2F&source_ve_path=MjM4NTE&feature=emb_title' })
        })

})
