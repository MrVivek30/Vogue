let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");
let image3 = document.querySelector(".img3");

let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let start = document.querySelector(".main-carousel")

let images = ["https://cdna.lystit.com/cms/DESKTOP_1_d79b60b494.png", "https://cdna.lystit.com/cms/blackfriday_desktop_2400_930_2968301bf3.gif",
    "https://cdna.lystit.com/cms/DESKTOP_1_d79b60b494.png", "https://cdna.lystit.com/cms/blackfriday_desktop_2400_930_2968301bf3.gif"

];
let inter
let generate = (array) => {
    let randomNum = Math.floor(Math.random() * array.length);
    image1.setAttribute("src", array[randomNum]);


    start.addEventListener("click", function () {
        inter = setInterval("generate(images)", 5000)

    })
}
let count = 0;
next.addEventListener("click", function () {
    clearInterval(inter)
    count++;
    if (count >= images.length) {
        count = 0;
        image1.src = images[count];

    }
    else {
        image1.src = images[count];

    }
})
prev.addEventListener("click", function () {
    clearInterval(inter);
    count--
    if (count < 0) {
        count = images.length - 1
        image1.src = images[count];

    }
    else {
        image1.src = images[count];

    }
})



generate(images)


// **************************search function*********************

function search(){

    
}