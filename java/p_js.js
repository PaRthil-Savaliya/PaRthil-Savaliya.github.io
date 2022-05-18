function p(){
    var x=document.form1.fname.value;
    if(x.length==0)
    {
        alert("enter your name");
        document.form1.fname.focus();
        return false;
     
    }
    else{
    var w=/^[a-zA-Z]+$/;
    if(x.match(w))
    {}
    else
    {
    alert("enter valid name");
    document.form1.fname.focus();
    return false;
    }
    }
    var mno=document.form1.mno.value;
    if(mno.length==0)
    {
        alert("enter mobile no")
    }
    else{
        var z=/^[0-9]+$/
        if(mno.match(z) && mno.length==10)
        {}
        else{
                     alert("enter your proper mobile no " + mno) 
                     document.form1.mno.focus();
                     return false;
        }
    }
    a=document.form1.email.value;
    if(a.length==0)
    {
        alert("enter your email...!")
    }
    else{
        b=/^([a-zA-Z0-9_\-\.]+)@([a-z A-Z 0-9_\-\.]+).([a-z A-Z]{2,5})$/;
        if(a.match(b))
        {}
        else{
            alert("enter proper email");
        }
    }
  
}
