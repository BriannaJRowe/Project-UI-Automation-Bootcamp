class AddtoCart{

    //Selectors
    // - Products list Selectors
    get ProductOne () {
        return ('.chakra-button.snipcart-add-item.css-betff9[data-item-id="quality-hat-model"]')
    }

    get ProductTwo () {
        return ('.chakra-button.snipcart-add-item.css-betff9[data-item-id="quality-mousepad"]')
    }

    get CartSummary () {
        //return ('.snipcart-cart__content')
        return ('.snipcart-test-banner__message')
    }

    get TopCartTotal () {
        return ('#top-cart')
    }

    //Product details page selector
    get ProductImage1 ()
    {
        return ('.chakra-image.css-2i84d9[src="/images/quality-hat-model.jpg"]')
    }

    get AddtoCartbtn ()
    {
        return ('#add-to-cart')
    }

    get Productheader ()
    {
        return ('div[class="chakra-stack css-84zodg"] h2[class="chakra-heading css-1dklj6k"]')
        //h2[class="chakra-heading css-1dklj6k"div[class='chakra-stack css-84zodg'] h2[class='chakra-heading css-1dklj6k']
    }
    //Methods

}

export default new AddtoCart ()