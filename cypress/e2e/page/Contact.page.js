class Contact {

    get Contactbtn() 
    {
        return ('#top-contact')
    }

    get fname() 
    {
        return ('#firstName')
    }

    get lname() 
    {
        return('#lastName')
    }

    get email() 
    {
        return('#email')
    }

    get subject()
    {
        return('#subject')
    }

    get comments() 
    {
        return('#message')
    }

    get sendmsgbtn()
    {
        return('button[class="chakra-button css-vs0e4t"]')
    }

    get popup() 
    {
        return ('#toast-1')
    }

   get fielderror()
   {
    return ('.chakra-form__error-message.css-170ki1a')
   }


}

export default new Contact ()