/// <reference types="cypress" />

describe('Login and Signup', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#signInOrRegister').click();
    })

    //Test Case: Login
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
    })

    //Test Case: Sign Up --REVISIT
    it('Signs up a new user', () => 
    {
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {
                cy.get('.auth0-lock-tabs').contains('Sign Up').click();
                cy.get('input[name="email"]').type('tester@yahoo.com');
                cy.get('input[name="password"]').type('P@ssword12');
                cy.get('button[id="1-submit"]').click();
                //cy.get('button[aria-label="Sign Up"]').click();
                }
        );

    })

    //Test case: Forget password --REMOVE
    xit('Should reset password', () => {
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {
                cy.get('p[class="auth0-lock-alternative"]').click();
                cy.get('div[title="Reset your password"]').should('have.text', 'Reset your password')
                cy.get('input[id="1-email"]').type('test@yahoo.com');
                cy.get('button[id="1-submit"]').click();
                cy.get('.auth0-global-message.auth0-global-message-success').should('be.visible');
                }
        );

    })

    //Test Case: Invalid password (Unhappy Path)
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
            
                }
        );

    })

    //note: put entire login block in before each for other tests


}) 