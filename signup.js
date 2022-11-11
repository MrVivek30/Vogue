let form = document.querySelector("#form");
let LsData = JSON.parse(localStorage.getItem("signup")) || [];
form.addEventListener("submit", function (event) {
    event.preventDefault()

    let obj = {
        email: form.email.value,
        mobil: form.mobil.value,
        pass: form.pass.value,

    }
    if (obj.email == "" || obj.mobil == "" || obj.pass == "") {
        alert("please fill the details")
    }
    else {
        LsData.push(obj);
        localStorage.setItem("signup", JSON.stringify(LsData))
        window.location.href = 'login.html'
    }
})