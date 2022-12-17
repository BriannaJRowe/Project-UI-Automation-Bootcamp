class Favorites {

    //Selectors
    get FittedhatfavoriteBtn() 
    {
        return('div[id="product-0"] div[class="css-1m8iww1"]')
    }

    get TruckerhatfavoriteBtn() 
    {
        return('div[id="product-1"] div[class="css-1m8iww1"]')
    }

    get FavoritesTab()
    {
        return ('#top-favorite')
    }

    get AddedMessage()
    {
        return ('.chakra-alert__title.css-hk9y3l')
    }

    get PopUpMessage() 
    {
        return ('.chakra-alert__title.css-tidvy5')
    }

    get FavoritesPageHeader () 
    {
        return ('.chakra-heading.css-11cq7yk')
    }

    get FavoritesPageItem1 () 
    {
        return ('.chakra-text.css-1n64n71')
    }

    get RemoveBtn ()
    {
        return ('#remove-favorite-btn')
    }

    get AddtoCartBtn ()
    {
        return ('#add-to-cart')
    }

    get NoFavorites () 
    {
        return ('div[class="chakra-stack css-owjkmg"] h2[class="chakra-heading css-kmq9po"]')
    }

    get FavoritesTabCount ()
    {
        return ('#top-favorite > .chakra-text')
    }

    //Product details Page Selector
    get AddToFavorites() 
    {
        return ('.css-1m8iww1')
    }

    get EmptyFavoritesMsg ()
    {
        return ('.chakra-text.css-jneyc')
    }


    //Methods
    AddFromHome () 
    {
        cy.get(this.TruckerhatfavoriteBtn).click()
    }

    RemoveFromHome ()
    {
        cy.get(this.FittedhatfavoriteBtn).click()
        cy.wait(10000)
        cy.get(this.FittedhatfavoriteBtn).click()
    }

    RemoveFromFavoritesPage () 
    {
        cy.get(this.FittedhatfavoriteBtn).click()
        cy.wait(10000)
        cy.get(this.FavoritesTab).click()
        cy.wait(5000)
    }


    AddMultipleFromHome () 
    {
        cy.get(this.TruckerhatfavoriteBtn).click()
        cy.get(this.FittedhatfavoriteBtn).click()
    }










}

export default new Favorites ()