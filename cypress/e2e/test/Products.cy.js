/// <reference types="cypress" />
import Products from '../page/Details.page'

describe('Product details', () => {
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

    //Test Case: Verify that the user is taken to the product details page when a product is clicked
        it('Should take the user to the product details page', () => {
            cy.get(Products.productone).click();
            cy.wait(1500);
            cy.get(Products.productheading).should('be.visible')
            cy.get(Products.productheading).should('have.text', 'Quality Fitted Hat ')
            cy.get(Products.category).should('have.text','hat')
        })

        //Test Case: Verify that the user is taken back to the home page upon clicking 'back to products'
        it('Should take the user back to the products home page', () => {
            cy.get(Products.productone).click();
            cy.wait(1500);
            cy.get(Products.productheading).should('be.visible')
            cy.get(Products.productheading).should('have.text', 'Quality Fitted Hat ')

            cy.get(Products.backbtn).click();
            cy.wait(1500);
            cy.url().should('eq', 'https://ui-automation-camp.vercel.app/products')

        })

        //Test Case: Verify that the user is able to change the images in the slide show
        it('Should switch between images', () => {
            cy.get(Products.productone).click();
            cy.wait(1500);
            cy.get(Products.productheading).should('be.visible')
            cy.get(Products.productheading).should('have.text', 'Quality Fitted Hat ')

            cy.get(Products.image1).should('be.visible')
            cy.get(Products.nextarrow).should('be.visible')
            cy.get(Products.nextarrow).click()
            cy.get(Products.image2).should('be.visible')
            cy.get(Products.backarrow).should('be.visible')
            cy.get(Products.image2).should('be.visible')
        })

})
