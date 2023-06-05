const real = document.getElementById("real")
const modal101 = document.getElementById("modal101")
const frame = document.getElementById("frame")

real.addEventListener("click", ()=> {
    modal101.style.display = "flex"
});

let getData = () =>{
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let fullDetails = '';
    for (i = 0; i < data.length; i++) {
      fullDetails += `<div class="product-contain" id="product-container">
          <img src="${data[i].image}" alt="image" class="image-fix" />
           <div class="product-info">
            <p class="paragraph" id="product-name">${data[i].title}</p>
             <p class="paragraph">$${data[i].price}</p>
            
             <p class="paragraph">${data[i].category}</p>
         </div>
         </div>`;
    }

    frame.innerHTML = fullDetails;
  });
}

getData()
