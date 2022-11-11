//********************api fetch************************************* */


let url = "https://636b39a67f47ef51e12aa81a.mockapi.io/products"
let arr = []
async function getdata() {
    try {
        let res = await fetch(url);
        let out = await res.json();

        arr = out
        console.log(arr)
        display(arr)

    } catch (err) {
        alert(err)
    }
}
getdata()
//**************************filter function********************
function filteritem() {
    let select = document.querySelector("#filter").value;
    let filterdata = arr.filter(function (element) {
        return element.category == select
    });
    display(filterdata)
}


//*********************main Display function**************************

function display(arr) {
    let carts = JSON.parse(localStorage.getItem("cart")) || [];
    document.querySelector("#product-container").innerHTML = "";
    arr.forEach(function (element) {

        let div = document.createElement("div");

        let img = document.createElement("img")
        img.setAttribute("src", element.image)
        let name = document.createElement("h2")
        name.innerText = element.title;
        let Price = document.createElement("h3")
        Price.innerText ="₹"+ element.price
        let Details = document.createElement("p")
        Details.innerText = element.description
        let Category = document.createElement("p")
        Category.innerText = element.category+"'s"

        let btn = document.createElement("button");
        btn.innerText = "Add To Cart"
        btn.addEventListener("click", function () {
            carts.push(element)
            localStorage.setItem("cart", JSON.stringify(carts))
        })

        div.append(img, name, Price, Details, Category, btn)

        document.querySelector("#product-container").append(div)


    })
}

