function feedback(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("contect").value;
    var coment = document.getElementById("coment").value;

    if(name != name.match(/[a-z,A-z]{2,25}/)){
        alert("invalid name");
    }
    else if(email != email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)){
        alert("invalid Email");
    }
    else if(number != number.match(/[0-9]{10,10}/)){
        alert("invalid number");
    }
    else if(coment != coment.match(/[A-zA-z0-9]{6,50}/)){
        alert("invalid coment")
    }
    else {
        alert("THANK YOU FOR VISITING");
    }
}