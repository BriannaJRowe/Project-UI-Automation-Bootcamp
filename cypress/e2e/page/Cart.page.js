class Cart {

get Topcart () {
    return ('#top-cart');
}

get cartSummary () {
    return ('section.snipcart-cart__content');
}

get cartitembox () {
    return ('.snipcart-item-line__container');
}

get detailedcartbtn () {
    return ('button[class="snipcart-button-link"]');
}

get cartitemqty () {
    return ('.snipcart-item-quantity__quantity.snipcart__font--std');
}

get topqty () {
    return ('.snipcart-cart-header__option.snipcart-cart-header__count.snipcart__font--secondary.snipcart__font--bold')
}

get cartitem () {
    return ('.snipcart-item-line__title.snipcart__font--xlarge.snipcart__font--secondary.snipcart__font--black')
}

get removebtn () {
    return ('button[title="Remove item"]')
}

get cartitemcost () {
    return ('.snipcart-item-quantity__total-price.snipcart__font--bold.snipcart__font--secondary')
}

get increaseqty () {
    return ('button[title="Increment quantity"]')
}

get decreaseqty () {
    return ('button[title="Decrement quantity"]')
}

get emptycartmsg () {
    return ('.snipcart-empty-cart__title.snipcart__font--secondary.snipcart__font--xlarge.snipcart__font--bold')
}

}

export default new Cart ()