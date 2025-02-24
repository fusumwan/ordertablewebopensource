/**************************************************
 // Author: Sum Wan,FU
 // Date: 7-5-2019
 // Description: Validation javascript
 **************************************************/


/*
Validation function
*/

var error = {
    protection: {
		/*Only allow input number*/
        FilterNumberSpecialCharacters: function (event, allowSpaces)
        {
            if(allowSpaces == true )
                return this.AcceptRegExOnly(event, /^[0-9 ]$/);
            if(allowSpaces == false)
                return this.AcceptRegExOnly(event, /^[0-9]$/);

            return AcceptRegExOnly(event, /^[0-9]$/);
        },
		/*Not allow special character*/
		FilterSpecialCharacters: function (event, allowSpaces, allowPeriod)
        {
            if(allowSpaces == true && allowPeriod == false)
                return this.AcceptRegExOnly(event, /^[a-zA-Z0-9 ]$/);
            if(allowPeriod == true && allowSpaces == false)
                return this.AcceptRegExOnly(event, /^[a-zA-Z0-9]$/);
            if(allowPeriod == true && allowSpaces == true)
                return this.AcceptRegExOnly(event, /^[a-zA-Z0-9 ]$/);

            return AcceptRegExOnly(event, /^[a-zA-Z0-9]$/);
        },
        AcceptRegExOnly:function(event, regex)  
        {   
            var keyCode = event.which ? event.which : event.keyCode;
            var keyPressed = String.fromCharCode(keyCode);
            return regex.test(keyPressed);
        },
		/*Check email format*/
		ValidEmail: function (email) {
            //Regular expression for email
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        },
        preventDefault: function(event){
            event.preventDefault();
        }
    }
};