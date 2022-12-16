class AddtoCart{

    //Selectors
    // - Products list Selectors
    get ProductOne () {
        return ('button[data-item-id="quality-hat-model"]')
    }

    get ProductTwo () {
        return ('.chakra-button.snipcart-add-item.css-betff9[data-item-id="quality-mousepad"]')
    }

    get CartSummary () {
        return ('section.snipcart-cart__content');
    }

    get TopCartTotal () {
        return ('button[class="chakra-button snipcart-checkout css-186fne3"]')
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
        return ('.css-egoftb > :nth-child(1) > .chakra-heading')
    }

}

export default new AddtoCart ()