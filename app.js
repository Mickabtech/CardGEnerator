const real = document.getElementById("real")
const frame = document.getElementById("modal101")
const title = document.getElementById("title")
const imags = document.getElementById("iages").src
const price = document.getElementById("price")
const descript = document.getElementById("descript")
const category = document.getElementById("category");


real.addEventListener("click", ()=> {
    frame.style.display = "flex"
});

let getData = () =>{
    fetch(
        "https://fakestoreapi.com/products"
        ).then((response) =>{
            return response.json()
        }).then((data) =>{ 
           title.innerHTML=data[0].title
           imags.innerHTML = `<img src="https://fakestoreapi.com/products+${data[0].image}"`
           price.innerHTML = "Price: " + "$" + data[0].price
           descript.innerHTML = "Description: " + data[0].description
           category.innerHTML = "Category: " + data[0].category
        })
}

getData()