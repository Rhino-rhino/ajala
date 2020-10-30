function required() {
     let empt = document.form1.Email.value;
     let mpt = document.form1.password.value;
     if (empt == "")
     {
         alert("Please input a value");
         return false;
     }
     else if (mpt == "")
    {

        alert ("please enter password");
        return false;
    }
    else
     {
      alert( "code has accepted" );
      return true;
     }
 }
