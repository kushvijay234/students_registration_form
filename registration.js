class Student {
    constructor( name, email, password ) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

function ValidateForm() {
    var name = document.forms[0]["name"].value;
    var email = document.forms[0]["email"].value;
    var password = document.forms[0]["password"].value;

    if(name=="") {
        document.getElementById("error-log").innerHTML="Name Must be Filled Out";
        //alert("Name Must be Filled Out");
        return false;
    }
    if(email=="") {
        document.getElementById("error-log").innerHTML="Email Id Must be Filled Out";
        //alert("Email Id Must be Filled Out");
        return false;
    }
    if(password=="") {
        document.getElementById("error-log").innerHTML="Password Must be Filled Out";
        // alert("Password Must be Filled Out");
        return false;
    }

    var student = new Student(name, email, password);
    document.getElementById("registered-log").innerHTML="Registration Sucessful";
   
}