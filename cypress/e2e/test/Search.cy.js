/// <reference types="cypress" />

describe('Searching', () => {
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


        xit('Should search by name', () => {
            cy.get('#search').type('Quality Fitted Hat')
            cy.get('img[src="/images/quality-hat-model.jpg"]').should('be.visible')
            cy.get('.chakra-text.css-1n64n71').should('have.text', 'Quality Fitted Hat')
            cy.get('.chakra-text.css-0').should('have.text', '$30.00')
        })

        it('Should search by category', () => {
            cy.get('#search').type('Hat')
            cy.get('img[src="/images/quality-hat-model.jpg"]').should('be.visible')
            cy.get('div[id="product-0"] p[class="chakra-text css-1n64n71"]').should('have.text', 'Quality Fitted Hat')
            cy.get('div[id="product-0"] p[class="chakra-text css-0"]').should('have.text', '$30')

            cy.get('img[src="/images/quality-hat.jpg"]').should('be.visible')
            cy.get('div[id="product-1"] p[class="chakra-text css-1n64n71"]').should('have.text', 'Quality Trucker Hat')
            cy.get('div[id="product-1"] p[class="chakra-text css-0"]').should('have.text', '$24')
        })

        // Unhappy path
        it('Should not produce results when searching by number', () => {
            cy.get('#search').type('1')
            cy.get('.css-12qzrsi').should('be.visible')
        })
})


