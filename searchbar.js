let url="https://636b39a67f47ef51e12aa81a.mockapi.io/products"
let data=[]
async function showData(){
    try{
        let res=await fetch(url);
        out=await res.json();
        data=out;
        console.log(out);
        // display(out);
    }
    catch(err){
        console.log(err);
    }
}
showData();



function search(){
    let q=document.querySelector("#beer").value;
    let newData=data.filter(function(element){
        return element.title.toLowerCase().includes(q.toLowerCase())
        window.location.reload()
    });
    display(newData)
    // window.location.href="product.html"
}
function display(data){
    let cartArr=JSON.parse(localStorage.getItem("cart"))||[]
    let cartArrs=JSON.parse(localStorage.getItem("pro"))||[]
    document.querySelector("#searchhistory").innerHTML="";
    data.forEach(function(element,index){
        
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

        let anchor=document.createElement("a");
        anchor.setAttribute("href","product.html");
        // imageProd.style.width="100%"
        // imageProd.style.height="20vh"
        let btn=document.createElement("button");
        btn.innerText="ADD TO CART"
        btn.addEventListener("click",function(){
            cartArr.push(element);
            localStorage.setItem("cart",JSON.stringify(cartArr))
            alert("Product Added Successfully")
        })
        div.addEventListener("click",function(){
            cartArrs.push(element)
            console.log(cartArr)
            localStorage.setItem("pro",JSON.stringify(cartArrs))
        });
        div.append(img,name,Price,Details,Category,btn)
        // anchor.append(div)
        document.querySelector("#searchhistory").append(div)
    });
}