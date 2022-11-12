let form = document.getElementById("form")
form.addEventListener("submit", function (event) {
    event.preventDefault()

    let obj = {
        email: form.email.value,
        // mobil:form.mobil.value,
        pass: form.pass.value,

    }
    console.log(obj)
    let flag=false;
    let getmail = JSON.parse(localStorage.getItem("signup"))
    // let getpass=JSON.parse(localStorage.getItem("signup"))
    console.log(getmail.email)
    getmail.forEach(function (e) {
        // if (obj.email == e.email) {
        //     if (obj.pass == e.pass) {
        //         alert("login successful")
        //     }
        //     else {
        //         alert("wrong password")
        //     }
        // }
        // else {
        //     alert("Invalid credentials")
        // }
        if (obj.email == e.email&&obj.pass == e.pass){
            flag=true;
        }


    })
    if(flag){
        alert("login successful")
        window.location.href="index.html"
    }else{
        alert("Invalid credentials")
    }


})