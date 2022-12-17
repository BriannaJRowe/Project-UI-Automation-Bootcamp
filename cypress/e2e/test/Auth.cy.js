/// <reference types="cypress" />

describe('Login and Signup', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#signInOrRegister').click();
    })

    //Test Case: Verify that a user can login with valid credentials

    it('logins with a valid user', () => 
    {
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
        
        cy.wait(3500)
        cy.url().should('eq', 'https://ui-automation-camp.vercel.app/products')
    })

    //Test Case: Verify that a user can Sign Up

    it('Signs up a new user', () => 
    {
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {
                cy.get('.auth0-lock-tabs').contains('Sign Up').click();
                cy.get('input[name="email"]').type('annxsivan12@gmail.com');
                cy.get('input[name="password"]').type('P@ssword12');
                cy.get('button[id="1-submit"]').click();
                }

        );

        cy.wait(3000)
        cy.get('.chakra-heading.css-kmq9po').should('have.text', 'Automation Camp Store')

    })

    //Test Case: Verify that a user cannot login with an invalid username and/or password (Unhappy Path)
    it('Should not allow a user to signup with an invalid password', () => 
    {
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {
                cy.get('.auth0-lock-tabs').contains('Sign Up').click();
                cy.get('input[name="email"]').type('test@yahoo.com');
                cy.get('input[name="password"]').type('P12');
                cy.get('button[id="1-submit"]').click();
                cy.get('.auth0-lock-input-block.auth0-lock-input-password.auth0-lock-error').should('be.visible');
                cy.wait(1500)
                cy.get('.auth0-lock-error-invalid-hint').should('have.text','Password is invalid');
                }
        );

    })



}) 