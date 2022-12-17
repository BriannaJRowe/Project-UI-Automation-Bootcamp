/// <reference types="cypress" />
import Favorites from '../page/Favorites.page'
import Products from '../page/ProductDetails.page'

describe('Favorites/Wishlist', () => {
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
        
        cy.wait(3500)
        cy.url().should('eq', 'https://ui-automation-camp.vercel.app/products')
    })

    //Test Case: Verify that a user can add an item to favorites via the homepage

    it('Should add a single item to favorites from home page', () => 
    {
        cy.wait(5000)
        Favorites.AddFromHome()
        cy.get(Favorites.PopUpMessage).should('be.visible')
        cy.get(Favorites.PopUpMessage).should('have.text', 'Quality Trucker Hat added to favorites')
        cy.get(Favorites.FavoritesTabCount).should('have.text', 'Favorites [1]')
    })

    //Test Case: Verify that a user can add multiple items to favorites via the homepage
    it('Should add multiple items to favorites from home page', () => 
    {
        cy.wait(5000)
        Favorites.AddMultipleFromHome()
        cy.get(Favorites.PopUpMessage).should('be.visible')
        cy.get(Favorites.PopUpMessage).should('have.text', 'Quality Fitted Hat added to favoritesQuality Trucker Hat added to favorites')
        cy.get(Favorites.FavoritesTabCount).should('have.text', 'Favorites [2]')
    })

    //Test Case: Verify that a user can remove a product from the favorites list via the home page
    it('Should remove a product from the favorites list via the home page', () => 
    {
        cy.wait(5000)
        Favorites.RemoveFromHome()
        cy.get(Favorites.PopUpMessage).should('be.visible')
        cy.get(Favorites.PopUpMessage).should('have.text', 'Quality Fitted Hat removed from favorites')
        cy.get(Favorites.FavoritesTabCount).should('have.text', 'Favorites [0]')
    })

    //Test Case: Verify that a user can remove a product from the favorites list via the home page
    it('Should remove a product from the favorites list via the favorites page', () => 
    {
        cy.wait(5000)
        Favorites.RemoveFromFavoritesPage()
        cy.url().should('eq', 'https://ui-automation-camp.vercel.app/favorites')
        cy.get(Favorites.FavoritesPageItem1).should('have.text', 'Quality Fitted Hat')

        cy.get(Favorites.RemoveBtn).click()

        cy.get(Favorites.PopUpMessage).should('have.text', 'Quality Fitted Hat removed from favorites')
        cy.get(Favorites.NoFavorites).should('have.text', 'No favorites added!')
        cy.get(Favorites.FavoritesTabCount).should('have.text', 'Favorites [0]')
        
    })

    //Test Case: Verify that a user can add an item to favorites via the product details

    it('Adds an item to favorites from product details page', () => 
    {
        cy.wait(5000)
        cy.get(Products.fittedhat).click()
        cy.get(Products.productheading).should('be.visible')
        cy.get(Products.productheading).should('have.text', 'Quality Fitted Hat ')
        cy.get(Products.productcategory).should('have.text','hat')
        
        cy.get(Favorites.AddToFavorites).click()
        cy.get(Favorites.PopUpMessage).should('be.visible')
        cy.get(Favorites.PopUpMessage).should('have.text', 'Quality Fitted Hat added to favorites')
        cy.get(Favorites.FavoritesTabCount).should('have.text', 'Favorites [1]')
    })

    //Test Case: Verify that a user can add an item to favorites via the product details

    it('Adds an item to cart from favorites list page', () => 
    {
        cy.wait(5000)
        Favorites.AddFromHome()
        cy.get(Favorites.PopUpMessage).should('be.visible')
        cy.get(Favorites.PopUpMessage).should('have.text', 'Quality Trucker Hat added to favorites')
        cy.get(Favorites.FavoritesTabCount).should('have.text', 'Favorites [1]')
        cy.get(Favorites.FavoritesTab).click()
        cy.get(Favorites.FavoritesPageItem1).should('have.text', 'Quality Trucker Hat')
       
        cy.get(Favorites.AddtoCartBtn).click()
        cy.get(Products.CartSummary).should('be.visible');

    })

    //Unhappy Path
    //Test Case: Verify that the favorites list is empty upon login and the user cannot add any items via that page
    it('Should not allow user to add from favorites page', () => 
    {
        cy.wait(5000)
        cy.get(Favorites.FavoritesTab).click()
        cy.get(Favorites.NoFavorites).should('have.text', 'No favorites added!')
        cy.get(Favorites.EmptyFavoritesMsg).should('have.text', 'You can add favorites from the home page.')
        cy.get(Favorites.AddToFavorites).should('not.exist')

    })

}) 