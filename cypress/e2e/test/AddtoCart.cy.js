/// <reference types="cypress" />
import Addtocart from '../page/Addtocart.page'

describe('Adding To Cart', () => {
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

    // Add a product from the product list page
    xit('should add a product from product list page', () => {
        cy.get(Addtocart.ProductOne).click();
        //cy.get(Addtocart.CartSummary).should('be.visible');
        //cy.get(Addtocart.TopCartTotal).should('have.text', '$20.00')
    })

    //Add a product from the product details page
    it('should add a product from product details page', () => {
        
        cy.get(Addtocart.ProductImage1).click();
        //cy.get('div[class="chakra-stack css-84zodg"] h2[class="chakra-heading css-1dklj6k"]').
        //cy.get('h2[class="chakra-heading css-1dklj6k"]').contains('Quality Fitted Hat');
        //cy.get(Addtocart.Productheader).should('have.text', 'Quality Fitted Hat')
        cy.get(Addtocart.AddtoCartbtn).click();
        //cy.get(Addtocart.CartSummary).should('be.visible');
        //cy.get(Addtocart.TopCartTotal).should('have.text', '$20.00')
    })

    //Adds multiple products to cart
    xit('should add 2 products from product list page', () => {
        cy.get(Addtocart.ProductOne).click();
        cy.get(Addtocart.ProductTwo).click();
        //cy.get(Addtocart.CartSummary).should('be.visible');
        //cy.get(Addtocart.TopCartTotal).should('have.text', '$20.00')
    })
})